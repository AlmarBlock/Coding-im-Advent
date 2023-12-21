Blat_war_auf_dem_weg = False

for i in range(5):
    kara.move()
    if kara.onLeaf():
        Blat_war_auf_dem_weg = True
if Blat_war_auf_dem_weg:
    kara.turnLeft()
else:
    kara.turnRight()