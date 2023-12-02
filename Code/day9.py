Variable1 = 1
Variable2 = "1"
for i in range(8):
    Variable1 += Variable1 + Variable2

if Variable1 >= str(0):
    kara.turnLeft()
else:
    kara.turnRight()