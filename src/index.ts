import * as yargs from "yargs";
import {
  ZombieApocalypse,
  Coordinate,
  Direction,
} from "../src/ZombieApocalypse";

require("source-map-support").install();

const argv = yargs
  .usage(
    "Usage: $0 -s [dimension] -d [directions to move] -z [zombies coordinates] -v [victims coordinates]"
  )
  .option("s", {
    number: true,
  })
  .option("d", {
    string: true,
  })
  .option("z", {
    array: true,
  })
  .option("v", {
    array: true,
  })
  .demandOption(["s", "d", "z", "v"]).argv;

const delimiter = ",";

const parseArrayCoordinates = (arg: string[]): Coordinate[] => {
  return arg.map((strCoordinate) => {
    const coordinate = strCoordinate.split(delimiter);
    return { x: Number(coordinate[0]), y: Number(coordinate[1]) };
  });
};

const zombiesCoordinates = parseArrayCoordinates(
  argv.z.map((str) => str.toString())
);

const victimsCoordinates = parseArrayCoordinates(
  argv.v.map((str) => str.toString())
);

const directions: Direction[] = argv.d
  ?.split("")
  .map((directionStr) => (<any>Direction)[directionStr]);

const zombieApocalypse = new ZombieApocalypse(
  argv.s,
  zombiesCoordinates,
  victimsCoordinates,
  directions
);

zombieApocalypse.startInfection();

console.log(`Zombies score: ${zombieApocalypse.getZombiesScore()}`);
console.log("Zombies positions:");

zombieApocalypse
  .getZombiesCoordinates()
  .forEach((coordinate) => console.log(`(${coordinate.x},${coordinate.y})`));
