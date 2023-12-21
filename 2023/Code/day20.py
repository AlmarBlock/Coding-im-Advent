def _baum_hinten():
    kara.turnLeft()
    kara.turnLeft()
    if kara.treeFront():
        baum_hinten = True
    else:
        baum_hinten = False
    kara.turnLeft()
    kara.turnLeft()
    return baum_hinten

while not kara.treeFront():
    if _baum_hinten():
        kara.move()