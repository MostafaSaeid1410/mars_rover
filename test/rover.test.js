// Import the Rover class
const Rover = require("../src/rover");

describe("Rover", () => {
  // Define obstacles
  const obstacles = [
    [1, 4],
    [3, 5],
    [7, 4],
  ];

  describe("Initialization", () => {
    test("should initialize with correct coordinates and direction", () => {
      const rover = new Rover(4, 2, "EAST", obstacles);
      expect(rover.x).toBe(4);
      expect(rover.y).toBe(2);
      expect(rover.direction).toBe("EAST");
    });
  });

  describe("Movement", () => {
    test("should move forward correctly facing EAST", () => {
      const rover = new Rover(4, 2, "EAST", obstacles);
      rover.moveForward();
      expect(rover.x).toBe(5);
      expect(rover.y).toBe(2);
      expect(rover.direction).toBe("EAST");
    });

    test("should move forward correctly facing NORTH", () => {
      const rover = new Rover(4, 2, "NORTH", obstacles);
      rover.moveForward();
      expect(rover.x).toBe(4);
      expect(rover.y).toBe(3);
    });

    // Add similar tests for moving forward in other directions

    test("should move backward correctly facing EAST", () => {
      const rover = new Rover(4, 2, "EAST", obstacles);
      rover.moveBackward();
      expect(rover.x).toBe(3);
      expect(rover.y).toBe(2);
    });

    // Add similar tests for moving backward in other directions
  });

  describe("Rotation", () => {
    test("should rotate left correctly from EAST", () => {
      const rover = new Rover(4, 2, "EAST", obstacles);
      rover.rotateLeft();
      expect(rover.direction).toBe("NORTH");
    });

    test("should rotate left correctly from SOUTH", () => {
      const rover = new Rover(4, 2, "SOUTH", obstacles);
      rover.rotateLeft();
      expect(rover.direction).toBe("EAST");
    });

    // Add similar tests for rotating left from other directions

    test("should rotate right correctly from EAST", () => {
      const rover = new Rover(4, 2, "EAST", obstacles);
      rover.rotateRight();
      expect(rover.direction).toBe("SOUTH");
    });

    test("should rotate right correctly from NORTH", () => {
      const rover = new Rover(4, 2, "NORTH", obstacles);
      rover.rotateRight();
      expect(rover.direction).toBe("EAST");
    });

    // Add similar tests for rotating right from other directions
  });

  describe("Command Execution", () => {
    test("should execute command string correctly", () => {
      const rover = new Rover(4, 2, "EAST", obstacles);
      rover.executeCommands("FLFFFRFLB");
      expect(rover.x).toBe(6);
      expect(rover.y).toBe(4);
      expect(rover.direction).toBe("NORTH");
    });
  });

  describe("Edge Cases", () => {
    test("should handle collision with obstacles when moving forward", () => {
      const rover = new Rover(3, 4, "NORTH", obstacles);
      rover.moveForward();
      expect(rover.x).toBe(3);
      expect(rover.y).toBe(4);
    });

    test("should handle collision with obstacles when moving backward", () => {
      const rover = new Rover(3, 4, "NORTH", obstacles);
      rover.moveBackward();
      expect(rover.x).toBe(3);
      expect(rover.y).toBe(3);
    });
  });
});
