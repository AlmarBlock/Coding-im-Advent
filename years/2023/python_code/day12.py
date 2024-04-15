mushrooms = 0
trees = 0

def _mushroomLeft():
    kara.turnLeft()

    if kara.mushroomFront():
        kara.turnRight()
        return True
    else:
        kara.turnRight()
        return False

def _TreeLeft():
    kara.turnLeft()

    if kara.treeFront():
        kara.turnRight()
        return True
    else:
        kara.turnRight()
        return False
    
while not kara.onLeaf():
    if _mushroomLeft():
        mushrooms = mushrooms + 1
        
    if _TreeLeft():
        trees = trees + 1
    kara.move()