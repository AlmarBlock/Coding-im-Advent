hoehe = 4
breite = 6

for i in range(hoehe * 2):
    for j in range(breite):
        kara.putLeaf()
        kara.move()
    kara.turnRight()
    kara.turnRight()
    for n in range(breite):
        kara.move()
    kara.turnLeft()
    kara.move()
    kara.turnLeft()