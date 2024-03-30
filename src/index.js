// Import the Rover class from rover.js
const Rover = require("./rover");

// Create a new Rover instance with initial coordinates and direction
const rover = new Rover(4, 2, "EAST");

// Define the command string
const commandString = "FLFFFRFLB";

// Execute the commands for the rover
rover.executeCommands(commandString);
