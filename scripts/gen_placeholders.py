from PIL import Image, ImageDraw
import os

BASE = os.path.join(os.path.dirname(__file__), "..", "assets", "images")

BONE = (237, 232, 224)
CHARCOAL = (28, 27, 25)
SAGE = (138, 154, 126)

def make(path, size, bg, fg, label):
    img = Image.new("RGB", size, bg)
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, 0, size[0] - 1, size[1] - 1], outline=fg, width=2)
    text = label
    bbox = draw.textbbox((0, 0), text)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((size[0] - w) / 2, (size[1] - h) / 2), text, fill=fg)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "JPEG", quality=85)

# Hero images (wide, landscape-ish)
make(os.path.join(BASE, "hero", "home-hero.jpg"), (1600, 1200), CHARCOAL, SAGE, "GNTL STRENGTH — HOME HERO")
make(os.path.join(BASE, "hero", "about-hero.jpg"), (1600, 900), CHARCOAL, SAGE, "GNTL STRENGTH — ABOUT HERO")

products = {
    "jacket": 3,
    "boot-stripes": 2,
    "custom-pant": 2,
    "custom-boot": 2,
}

for slug, count in products.items():
    for i in range(1, count + 1):
        make(
            os.path.join(BASE, "products", slug, f"{i}.jpg"),
            (1000, 1250),
            BONE,
            CHARCOAL,
            f"{slug.upper()} {i}",
        )

print("done")
