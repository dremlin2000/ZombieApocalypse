import { ZombieApocalypse, Direction } from "../src/ZombieApocalypse";
import { expect } from "chai";
import "mocha";

describe("ZombieApocalypse", () => {
  it("should infect acording to the rules. Simple Test 1.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      2,
      [{ x: 0, y: 0 }],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
      ],
      [Direction.Up]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(2).to.equal(zombieApocalypse.getZombiesScore());
    expect([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 1 },
    ]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });

  it("should infect acording to the rules. Simple Test 2.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      2,
      [{ x: 0, y: 0 }],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
      ],
      [Direction.Up, Direction.Left]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(4).to.equal(zombieApocalypse.getZombiesScore());
    expect([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 1 },
    ]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });

  it("should infect acording to the rules. Simple Test 3.", () => {
    //Arrange
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

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(3).to.equal(zombieApocalypse.getZombiesScore());
    expect([
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 3, y: 1 },
      { x: 4, y: 3 },
    ]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });

  it("should infect acording to the rules. Ailo's test.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      4,
      [{ x: 2, y: 1 }],
      [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 3, y: 1 },
      ],
      [
        Direction.Down,
        Direction.Left,
        Direction.Up,
        Direction.Up,
        Direction.Right,
        Direction.Right,
      ]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(3).to.equal(zombieApocalypse.getZombiesScore());
    expect([
      { x: 3, y: 0 },
      { x: 2, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: 0 },
    ]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });
});
