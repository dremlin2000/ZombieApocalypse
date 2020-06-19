export enum Direction {
  N,
  U,
  D,
  L,
  R,
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface Creature {
  isZombie: boolean;
  isMoved: boolean;
  isBeingMoved: boolean;
}

export class ZombieApocalypse {
  private _boardDimension: number;
  private _path: Direction[];
  private _board: Creature[][][] = [];
  private _zombiesScore: number = 0;

  constructor(
    boardDimension: number,
    zombieLocations: Coordinate[],
    victimLocations: Coordinate[],
    pathToMove: Direction[]
  ) {
    this._boardDimension = boardDimension;
    this._path = [Direction.N, ...pathToMove];

    this.initArray();
    this.transformCoordinates(zombieLocations, true);
    this.transformCoordinates(victimLocations, false);
  }

  private initArray() {
    for (let i = 0; i < this._boardDimension; i++) {
      this._board[i] = [];
      for (let j = 0; j < this._boardDimension; j++) {
        this._board[i][j] = [];
      }
    }
  }

  private transformCoordinates(coordinates: Coordinate[], isZombie: boolean) {
    coordinates.forEach((coordinate) => {
      this._board[coordinate.x][coordinate.y].push({
        isZombie,
        isMoved: false,
        isBeingMoved: false,
      });
    });
  }

  startInfection() {
    for (let i = 0; i < this._boardDimension; i++) {
      for (let j = 0; j < this._boardDimension; j++) {
        const foundZombie = this._board[i][j].find(
          (creature) => creature.isZombie && !creature.isMoved
        );

        if (foundZombie) {
          this.moveAndInfect({ x: i, y: j });
        }
      }
    }
  }

  getZombiesScore() {
    return this._zombiesScore;
  }

  getZombiesCoordinates(): Coordinate[] {
    let result: Coordinate[] = [];
    for (let i = 0; i < this._boardDimension; i++) {
      for (let j = 0; j < this._boardDimension; j++) {
        this._board[i][j]
          .filter((creature) => creature.isZombie)
          .map((_) => result.push({ x: i, y: j }));
      }
    }

    return result;
  }

  private moveAndInfect(coordinate: Coordinate) {
    const { x, y } = coordinate;

    if (
      this._board[x][y].length === 0 ||
      this._board[x][y].some(
        (creature) => creature.isZombie && creature.isMoved
      ) ||
      this._board[x][y].some((creature) => creature.isBeingMoved)
    ) {
      return;
    }

    this._board[x][y].forEach((creature) => (creature.isBeingMoved = true));

    let newX = x;
    let newY = y;

    this._path.forEach((direction) => {
      const shouldMove = direction != Direction.N;

      switch (direction) {
        case Direction.R:
          newX = newX + 1 > this._boardDimension - 1 ? 0 : newX + 1;
          break;
        case Direction.L:
          newX = newX - 1 < 0 ? this._boardDimension - 1 : newX - 1;
          break;
        case Direction.U:
          newY = newY - 1 < 0 ? this._boardDimension - 1 : newY - 1;
          break;
        case Direction.D:
          newY = newY + 1 > this._boardDimension - 1 ? 0 : newY + 1;
          break;
      }

      this._board[newX][newY]
        .filter((creature) => !creature.isZombie)
        .forEach((creature) => {
          creature.isZombie = true;
          this._zombiesScore++;
        });

      if (shouldMove) {
        this.moveAndInfect({ x: newX, y: newY });
      }
    });

    this._board[x][y].forEach((creature) => (creature.isBeingMoved = false));

    //Once the zombie achieves the final destination, move them to the new cell
    if (newX != x || newY != y) {
      const zombiesToMove = this._board[x][y].filter(
        (creature) => !creature.isMoved
      );
      this._board[newX][newY] = this._board[newX][newY].concat(zombiesToMove);
      this._board[x][y] = this._board[x][y].filter(
        (creature) => creature.isMoved
      );
      zombiesToMove.forEach((creature) => {
        creature.isMoved = true;
      });
    }
  }
}
