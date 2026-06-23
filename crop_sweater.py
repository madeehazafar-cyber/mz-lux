# This helper file crops one sweater image asset for the website.
from PIL import Image
from pathlib import Path

src = Path('images/models/cream sweater.webp')
dst = Path('images/models/cream sweater cropped.webp')
img = Image.open(src)
print(img.size)
# crop out the lower body/pants and keep the upper torso and head
w, h = img.size
left = 0
upper = 0
right = w
lower = int(h * 0.75)
# keep the middle of the frame, slightly zoom in
cropped = img.crop((left, upper, right, lower))
cropped.save(dst)
print(dst)

