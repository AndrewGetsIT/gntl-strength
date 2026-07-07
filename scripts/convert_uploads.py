"""One-off: convert real uploaded product photos (HEIC/oversized JPG/PNG)
into resized, web-ready JPEGs. Run manually when new raw uploads land in
assets/images/products/<slug>/ before referencing them in products.js.
"""
import os
from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

BASE = os.path.join(os.path.dirname(__file__), "..", "assets", "images", "products")
MAX_DIM = 1600
QUALITY = 82

# slug -> ordered list of (source filename, output filename)
JOBS = {
    "boot-stripes": [
        ("IMG_0848.jpg", "real-1.jpg"),
        ("IMG_0893.HEIC", "real-2.jpg"),
        ("IMG_2637.HEIC", "real-3.jpg"),
        ("IMG_2638.HEIC", "real-4.jpg"),
    ],
    "custom-pant": [
        ("IMG_2623.HEIC", "real-1.jpg"),
        ("IMG_2644.HEIC", "real-2.jpg"),
        ("IMG_2648.HEIC", "real-3.jpg"),
        ("IMG_4609.HEIC", "real-4.jpg"),
        ("IMG_4612.heic", "real-5.jpg"),
        ("IMG_5178.HEIC", "real-6.jpg"),
    ],
    "custom-boot": [
        ("IMG_2625.JPG", "real-1.jpg"),
        ("IMG_2634.JPG", "real-2.jpg"),
        ("IMG_2639.JPG", "real-3.jpg"),
        ("IMG_2642.JPG", "real-4.jpg"),
        ("84254956-78C1-4A54-9A95-DDC61B9ED012.JPG", "real-5.jpg"),
        ("CFD9FA2B-8510-4BD0-B2B2-5FEBD139988A.JPG", "real-6.jpg"),
        ("F5818FAB-0810-4547-907C-C8D36ECBCB83.JPG", "real-7.jpg"),
    ],
    "custom-caps-hats": [
        ("AE910147-95C8-43A7-96B8-1162844AE014.jpg", "real-1.jpg"),
        ("15BB724E-1666-49A1-BFC1-938A0FDD1A32.JPG", "real-2.jpg"),
    ],
    "freedom-and-rebellion": [
        # Studded Hood Jacket
        ("IMG_2630.JPG", "jacket-1.jpg"),
        ("IMG_2631.JPG", "jacket-2.jpg"),
        ("IMG_2636.JPG", "jacket-3.jpg"),
        ("IMG_2647.JPG", "jacket-4.jpg"),
        ("IMG_9846.JPG", "jacket-5.jpg"),
        ("IMG_2646.JPG", "jacket-6.jpg"),
        # Lace-Up Pants
        ("IMG_2628.JPG", "pants-1.jpg"),
        ("IMG_2641.JPG", "pants-2.jpg"),
        ("IMG_9841.JPG", "pants-3.jpg"),
        # Croc Mini Skirt
        ("IMG_2645.JPG", "skirt-1.jpg"),
        ("IMG_9847.JPG", "skirt-2.jpg"),
        # Studded Backpack
        ("IMG_2629.PNG", "backpack-1.jpg"),
        # Buckle Crop Jacket
        ("IMG_2640.JPG", "buckle-jacket-1.jpg"),
    ],
}


def convert(src_path, dst_path):
    img = Image.open(src_path)
    img = ImageOps.exif_transpose(img)
    if img.mode != "RGB":
        img = img.convert("RGB")
    img.thumbnail((MAX_DIM, MAX_DIM))
    img.save(dst_path, "JPEG", quality=QUALITY, optimize=True)
    print(f"{src_path} -> {dst_path} ({img.size[0]}x{img.size[1]})")


for slug, files in JOBS.items():
    folder = os.path.join(BASE, slug)
    for src_name, dst_name in files:
        src = os.path.join(folder, src_name)
        dst = os.path.join(folder, dst_name)
        convert(src, dst)

print("done")
