for i in range(4):
    kara.move()
if kara.mushroomFront():
    kara.turnLeft()
    kara.move()
    kara.turnLeft()
while not kara.treeFront():
    kara.move()
    if kara.mushroomFront():
        kara.turnLeft()
        kara.move()
        kara.turnLeft()
    else:
        if kara.treeFront():
            kara.turnLeft()
            kara.turnLeft()
        else:
            if kara.treeRight():
                for i in range(3):
                    kara.move()
                kara.turnRight()
                for i in range (2):
                    kara.move()
