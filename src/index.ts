import {
  ZombieApocalypse,
  Coordinate,
  Direction,
} from "../src/ZombieApocalypse";
require("source-map-support").install();

// const zombieApocalypse = new ZombieApocalypse(
//   4,
//   [{ x: 2, y: 1 }],
//   [
//     { x: 0, y: 1 },
//     { x: 1, y: 2 },
//     { x: 3, y: 1 },
//   ],
//   [
//     Direction.Down,
//     Direction.Left,
//     Direction.Up,
//     Direction.Up,
//     Direction.Right,
//     Direction.Right,
//   ]
// );

const zombieApocalypse = new ZombieApocalypse(
  5,
  [{ x: 0, y: 0 }],
  [
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 1 },
  ],
  [Direction.Down, Direction.Down, Direction.Right]
);

// const coordinates: Coordinate[] = [];

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     coordinates.push({ x: i, y: j });
//   }
// }

// const zombieApocalypse = new ZombieApocalypse(
//   2,
//   [{ x: 0, y: 0 }],
//   [
//     { x: 0, y: 0 },
//     { x: 1, y: 0 },
//     { x: 0, y: 1 },
//     { x: 1, y: 1 },
//   ],
//   [Direction.Up]
// );

zombieApocalypse.startInfection();

console.log(`Zombies score: ${zombieApocalypse.getZombiesScore()}`);
console.log("Zombies positions:");

zombieApocalypse
  .getZombiesCoordinates()
  .forEach((coordinate) => console.log(`(${coordinate.x},${coordinate.y})`));
