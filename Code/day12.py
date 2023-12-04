mushrooms = 0

def _mushroomLeft():
    kara.turnLeft()

    if kara.mushroomFront():
        kara.turnRight()
        return True
    else:
        kara.turnRight()
        return False
    
while not kara.treeFront():
    if _mushroomLeft():
        mushrooms = mushrooms + 1
        
    kara.move()