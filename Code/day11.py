anweisungen = []

for i in range(len(anweisungen)):
    if anweisungen[i] == 1:
        kara.turnLeft()

    if anweisungen[i] == 2:
        kara.turnRight()

    if anweisungen[i] == 3:
        kara.move()

    if anweisungen[i] == 4:
        kara.putLeaf()