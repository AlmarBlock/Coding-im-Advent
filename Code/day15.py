zahl = 6
turn = 0

for i in range(zahl):
    if i == zahl:
        turn = 1
    else:
        turn = 2

if turn == 1:
    kara.turnLeft()
else:
    kara.turnRight()