class Rover {
  constructor(x, y, direction, obstacles) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacles = obstacles;
  }

  moveForward() {
    let nextX = this.x;
    let nextY = this.y;

    switch (this.direction) {
      case "NORTH":
        nextY++;
        break;
      case "EAST":
        nextX++;
        break;
      case "SOUTH":
        nextY--;
        break;
      case "WEST":
        nextX--;
        break;
    }

    if (this.isObstacle(nextX, nextY)) {
      console.log(
        `Stopped due to collision at (${this.x}, ${this.y}) ${this.direction}`,
      );
      return;
    }

    this.x = nextX;
    this.y = nextY;
  }

  moveBackward() {
    let nextX = this.x;
    let nextY = this.y;

    switch (this.direction) {
      case "NORTH":
        nextY--;
        break;
      case "EAST":
        nextX--;
        break;
      case "SOUTH":
        nextY++;
        break;
      case "WEST":
        nextX++;
        break;
    }

    if (this.isObstacle(nextX, nextY)) {
      console.log(
        `Stopped due to collision at (${this.x}, ${this.y}) ${this.direction}`,
      );
      return;
    }

    this.x = nextX;
    this.y = nextY;
  }

  rotateLeft() {
    switch (this.direction) {
      case "NORTH":
        this.direction = "WEST";
        break;
      case "EAST":
        this.direction = "NORTH";
        break;
      case "SOUTH":
        this.direction = "EAST";
        break;
      case "WEST":
        this.direction = "SOUTH";
        break;
    }
  }

  rotateRight() {
    switch (this.direction) {
      case "NORTH":
        this.direction = "EAST";
        break;
      case "EAST":
        this.direction = "SOUTH";
        break;
      case "SOUTH":
        this.direction = "WEST";
        break;
      case "WEST":
        this.direction = "NORTH";
        break;
    }
  }

  executeCommands(commands) {
    for (let command of commands) {
      switch (command) {
        case "F":
          this.moveForward();
          break;
        case "B":
          this.moveBackward();
          break;
        case "L":
          this.rotateLeft();
          break;
        case "R":
          this.rotateRight();
          break;
        default:
          console.log(`Invalid command: ${command}`);
      }
    }
    console.log(`Final position: (${this.x}, ${this.y}) ${this.direction}`);
  }

  isObstacle(x, y) {
    for (let obstacle of this.obstacles) {
      if (obstacle[0] === x && obstacle[1] === y) {
        return true;
      }
    }
    return false;
  }
}

// Example usage
const obstacles = [
  [1, 4],
  [3, 5],
  [7, 4],
];
module.exports = Rover;
