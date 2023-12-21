input = ?
grade = False

def _goToPilz():
    kara.turnLeft()

    for i in range(3):
        kara.move()

    kara.turnLeft()

def _goToMushroom():
    kara.turnRight()
    
    for i in range(3):
        kara.move()

    kara.turnRight()

if input*2 % 2 == 0:
    grade = True

if grade:
    _goToPilz()
else:
    _goToMushroom()