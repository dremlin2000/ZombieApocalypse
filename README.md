# Zombie Apocalypse NodeJS (typescript) application

### Prerequisites

- The latest Node.JS

### Description

After the nuclear war, a strange and deadly virus has infected the planet. Living creatures
are becoming zombies that spread their zombiness by an unfriendly bite. The world consists
of an n x n grid on which zombies and creatures live.
Both of these occupy a single square on the grid and can be addressed using zero-indexed
x-y coordinates. Top left corner is (x: 0, y: 0) with x represent horizontal coordinate, y
represent vertical coordinate. Any number of zombies and creatures may occupy the same
grid square.
At the beginning of the program, a single zombie awakes and begins to move around the
grid. It is given an initial x-y coordinate and a list of movements, up, down, left and right. E.g.
(U,D,L,R).

The ordered sequence of movements needs to be represented somehow as input, for
example: DLUURR (down, left, up, up, right, right). Zombies can move through the edge of
the grid, appearing on the directly opposite side. For a 10x10 grid, a zombie moving left for
(0,4) will move to (9,4); a zombie moving down from (3,9) will move to (3,0).
The poor creatures in the area are the zombie’s victims. They also have an initial x-y
coordinate. The creatures are aware of zombie presence but are so frightened that they
never move.
If a zombie moves so that it end up on the same location as a creature, the creature is
transformed into another zombie and zombies score one point. The zombie continues
moving and infecting creatures until has performed all its moves.
Once it has completed its movement, the first newly created zombie moves using the same
sequence as the original zombie. Once it has completed its move, the second newly created
zombie moves, and so in order of infection with each zombie performing the same sequence
of moves. Once no new zombies have been created and all the zombies have completed
moving the program ends.

### How To Run

1. Go to the root folder and run `npm install`.
2. Run `npm start -- -s [board dimension] -d [sequence of directions] -z [array of zombies coordinates] -v [array of victims coordinates]`, e.g. you can run `npm start -- -s 4 -d DLUURR -z 2,1 -v 0,1 -v 1,2 -v 3,1`. Please make sure that the input parameters are formatted correctly. Please use comma `,` as the separator for coordinate pair X and Y.
3. You can also can run unit tests by running `npm test`
