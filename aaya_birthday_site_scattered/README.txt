AAYA BIRTHDAY SITE — SCATTERED PHOTO VERSION

BACKGROUND
----------
The uploaded sky image is already included at:
images/sky-background.jpeg

18 PHOTOS
---------
Put the photos into the images folder with these exact filenames:

photo01.jpg through photo18.jpg

The photos are NOT arranged in a gallery.
They are scattered throughout the hero, letter section and ending.

IMPORTANT: The Polaroid frames do NOT crop the images.
Every image uses:
    width: 100%;
    height: auto;

So portrait / landscape / square photos keep their original aspect ratios.

PENDRIVE PHOTO
--------------
The fake USB graphic has been completely removed.

Add the real USB/pendrive picture as:
    images/pendrive.png

It has its own floating slot beside the relevant line and also preserves
its natural aspect ratio.

If the actual image files are missing, numbered placeholder boxes appear
so you can still see the intended composition while designing.

PHOTO POSITIONS
---------------
All positions are near the bottom of style.css:

.sp01 ... .sp18

You can move a photo by changing:
    left / right
    top / bottom

You can rotate it by changing:
    --r: -5deg;

You can change its size by changing the width value.

TONE
----
Typography is Helvetica Neue / Helvetica / Arial.
Text tracking is tight and text sizing is intentionally restrained so
the page reads as a close-friend birthday site, not a romantic letter.

RUN
---
Open index.html directly or use VS Code + Live Server.
