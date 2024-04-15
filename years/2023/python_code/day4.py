while not kara.mushroomFront() or kara.mushroomFront():
    kara.move()
    if kara.mushroomFront():
      kara.removeLeaf()