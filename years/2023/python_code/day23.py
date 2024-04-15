def _ist_blatt_links():
    Blatt_links = False
    kara.turnLeft()
    kara.move()
    if kara.onLeaf():
        Blatt_links = True
    else:
        Blatt_links = False
    kara.turnLeft()
    kara.turnLeft()
    kara.move()
    kara.turnLeft()

while _ist_blatt_links():
    kara.move()