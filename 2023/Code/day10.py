mushrooms = 0
trees = 0
    
while not kara.onLeaf():
    kara.turnLeft()
    if kara.mushroomFront():
        mushrooms = mushrooms + 1
    elif kara.treeFront():
        trees = trees + 1
    kara.turnRight()
    kara.turnRight()
    if kara.mushroomFront():
        mushrooms = mushrooms + 1
    elif kara.treeFront():
        trees = trees + 1
    kara.turnLeft()
    kara.move()