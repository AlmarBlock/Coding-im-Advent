while False and not kara.treeFront():
    kara.move()
    if kara.onLeaf():
        kara.removeLeaf()