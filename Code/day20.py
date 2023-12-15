def _Leaf_Hinten():
    kara.turnLeft()
    kara.turnLeft()
    kara.move()
    if kara.onLeaf():
        return True
    else:
        return False
    kara.turnLeft()
    kara.turnLeft()
    kara.move()


if _Leaf_Hinten():
    for i in range(3):
        kara.move()