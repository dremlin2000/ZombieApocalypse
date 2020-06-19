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
      [Direction.U]
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
      [Direction.U, Direction.L]
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
      [Direction.D, Direction.D, Direction.R]
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

  it("should infect acording to the rules. Simple Test 4.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      1,
      [{ x: 0, y: 0 }],
      [{ x: 0, y: 0 }],
      [Direction.U, Direction.D, Direction.L, Direction.R]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(1).to.equal(zombieApocalypse.getZombiesScore());
    expect([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });

  it("should infect acording to the rules. Simple Test 5.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      3,
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 1, y: 2 },
        { x: 2, y: 2 },
        { x: 2, y: 1 },
      ],
      [{ x: 1, y: 1 }],
      [Direction.U, Direction.D, Direction.L, Direction.R]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(1).to.equal(zombieApocalypse.getZombiesScore());
    expect([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });

  it("should infect acording to the rules when zombie moves around but cannot reach any victim.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      5,
      [{ x: 2, y: 2 }],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 0, y: 4 },

        { x: 1, y: 4 },
        { x: 2, y: 4 },
        { x: 3, y: 4 },
        { x: 4, y: 4 },

        { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 4, y: 3 },
      ],
      [
        Direction.D,
        Direction.L,
        Direction.U,
        Direction.U,
        Direction.R,
        Direction.R,
        Direction.D,
        Direction.D,
      ]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(0).to.equal(zombieApocalypse.getZombiesScore());
    expect([{ x: 3, y: 3 }]).to.have.deep.members(
      zombieApocalypse.getZombiesCoordinates()
    );
  });

  it("should infect acording to the rules when no victims", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      5,
      [{ x: 0, y: 0 }],
      [],
      [Direction.U, Direction.D, Direction.L, Direction.R]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(0).to.equal(zombieApocalypse.getZombiesScore());
    expect([{ x: 0, y: 0 }]).to.have.deep.members(
      zombieApocalypse.getZombiesCoordinates()
    );
  });

  it("should infect acording to the rules when no zombies.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      5,
      [],
      [{ x: 3, y: 4 }],
      [Direction.U, Direction.D, Direction.L, Direction.R]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(0).to.equal(zombieApocalypse.getZombiesScore());
    expect([]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
  });

  it("should infect acording to the rules when no zombies and victims.", () => {
    //Arrange
    const zombieApocalypse = new ZombieApocalypse(
      5,
      [],
      [],
      [Direction.U, Direction.D, Direction.L, Direction.R]
    );

    //Act
    zombieApocalypse.startInfection();

    //Assert
    expect(0).to.equal(zombieApocalypse.getZombiesScore());
    expect([]).to.have.deep.members(zombieApocalypse.getZombiesCoordinates());
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
        Direction.D,
        Direction.L,
        Direction.U,
        Direction.U,
        Direction.R,
        Direction.R,
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
