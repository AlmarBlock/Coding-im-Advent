Blaetter = 0

while not kara.treeFront():
    if kara.onLeaf():
        Blaetter = Blaetter + 1
    kara.move()
for i in range(Blaetter):
    kara.turnLeft()