class Rover {
  constructor(x, y, direction, obstacles) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacles = obstacles;
    this.moveActions = {
      NORTH: [0, 1],
      EAST: [1, 0],
      SOUTH: [0, -1],
      WEST: [-1, 0],
    };
    this.rotateActions = {
      NORTH: { L: "WEST", R: "EAST" },
      EAST: { L: "NORTH", R: "SOUTH" },
      SOUTH: { L: "EAST", R: "WEST" },
      WEST: { L: "SOUTH", R: "NORTH" },
    };
  }

  moveForward() {
    this.move("F");
  }

  moveBackward() {
    this.move("B");
  }

  rotateLeft() {
    this.rotate("L");
  }

  rotateRight() {
    this.rotate("R");
  }

  move(command) {
    let action = this.moveActions[this.direction];
    let multiplier = command === "B" ? -1 : 1;
    let [dx, dy] = action;
    let nextX = this.x + dx * multiplier;
    let nextY = this.y + dy * multiplier;

    if (this.isObstacle(nextX, nextY)) {
      console.log(
        `Stopped due to collision at (${this.x}, ${this.y}) ${this.direction}`,
      );
      return;
    }

    this.x = nextX;
    this.y = nextY;
  }

  rotate(command) {
    this.direction = this.rotateActions[this.direction][command];
  }

  executeCommands(commands) {
    const commandMap = {
      F: this.moveForward.bind(this),
      B: this.moveBackward.bind(this),
      L: this.rotateLeft.bind(this),
      R: this.rotateRight.bind(this),
    };

    for (let command of commands) {
      if (commandMap[command]) {
        commandMap[command]();
      } else {
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
