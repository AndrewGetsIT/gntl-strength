"""Remove a plain white studio background from a product photo,
leaving the subject intact. Only removes the background region that's
actually connected to the image border (flood-fill), so near-white
details inside the subject (e.g. metallic hardware) aren't affected.
Produces a transparent PNG.

Usage: python3 remove_white_bg.py <input> <output.png> [threshold]
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage


def remove_white_background(src_path, dst_path, threshold=235):
    img = Image.open(src_path).convert("RGB")
    arr = np.array(img)

    # Candidate background pixels: bright and low-saturation (near white/gray)
    mn = arr.min(axis=2).astype(int)
    mx = arr.max(axis=2).astype(int)
    is_bright = mn > threshold
    is_low_sat = (mx - mn) < 20
    candidate = is_bright & is_low_sat

    # Only keep candidate regions connected to the border (true background),
    # not isolated near-white pixels inside the subject.
    labeled, n = ndimage.label(candidate)
    border_labels = set(labeled[0, :]) | set(labeled[-1, :]) | set(labeled[:, 0]) | set(labeled[:, -1])
    border_labels.discard(0)

    bg_mask = np.isin(labeled, list(border_labels))

    alpha = np.where(bg_mask, 0, 255).astype(np.uint8)
    alpha_img = Image.fromarray(alpha, mode="L").filter(ImageFilter.GaussianBlur(1.2))

    rgba = img.convert("RGBA")
    rgba.putalpha(alpha_img)
    rgba.save(dst_path, "PNG", optimize=True)
    print(f"{src_path} -> {dst_path} ({rgba.size[0]}x{rgba.size[1]})")


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    threshold = int(sys.argv[3]) if len(sys.argv) > 3 else 235
    remove_white_background(src, dst, threshold)
