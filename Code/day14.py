number = 0

for i in range(8):
    number += 1

    if number % 2 == 0:
        number += 2

for i in range(number / 2):
    kara.putLeaf()
    kara.move()


#Durchgang 1: number = 1
#Durchgang 2: number = 4
#Durchgang 3: number = 5
#Durchgang 4: number = 8
#Durchgang 5: number = 9
#Durchgang 6: number = 12
#Durchgang 7: number = 13s