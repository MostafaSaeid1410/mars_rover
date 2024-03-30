# rover_mars

Mars Rover
Problem Description
You are part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. This project aims to develop an API that translates the commands sent from Earth to instructions understood by the rover.

Approach
This project is approached as any real-world requirement that would be shipped as part of a real product. It showcases how a problem is decomposed into smaller pieces and tackled systematically.

Part I: Command Execution
The rover is initialized with its current coordinates and direction upon touchdown on Mars. It is then given a command string, which is broken down into individual commands and executed. The valid commands include:

F: Move forward on the current heading.
B: Move backward on the current heading.
L: Rotate left by 90 degrees.
R: Rotate right by 90 degrees.
Example
An example command might be FLFFFRFLB. Once the full command string has been followed, the rover reports its current coordinates and heading.

Part II: Obstacle Detection
Previous missions have faced obstacles that caused damage to the rover. This part deals with detecting and avoiding obstacles. Obstacle coordinates are provided, and when the rover encounters an obstacle, it stops at the coordinate immediately before and reports its position, heading, and the fact that it stopped due to collision.

Part III: Safe Navigation
Given the rover's current position and heading, plus the known obstacles, this part calculates a command string for the rover that will safely move it to a given coordinate while avoiding all obstacles.

Usage
To use the Mars Rover API, follow these steps:

1-Initialize the rover with its starting coordinates and direction.
2-Provide a command string for the rover to execute.
3-Handle obstacle detection and safe navigation as required.
