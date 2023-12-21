for i in range(9):
    for j in range(9):
        if kara.onLeaf():
            kara.removeLeaf()
        else:
            kara.putLeaf()
        kara.move()
    kara.turnLeft()
    kara.turnLeft()
    for j in range(9):
        kara.move()
    kara.turnLeft()
    kara.move()
    kara.turnLeft()