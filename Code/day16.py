array = []

for i in range(7):
    array.append(i)

for i in range(7):
    kara.turnLeft()
    kara.putLeaf()

    for j in range(array[i]):
        kara.move()
        kara.putLeaf()

    kara.turnLeft()
    kara.turnLeft()

    for j in range(array[i]):
        kara.move()
        
    kara.turnLeft()
    kara.move()