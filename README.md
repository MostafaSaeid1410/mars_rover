# Mars Rover

The Mars Rover project simulates remotely controlled vehicles exploring the surface of Mars. It includes an API to translate commands sent from Earth into instructions understood by the rover.

- Problem Description
  When the rover lands on Mars, it is initialized with its current coordinates and the direction it is facing. Commands sent to the rover include moving forward, moving backward, rotating left, and rotating right. The rover must report its final coordinates and heading after executing a series of commands.

- Approach
  The problem is tackled by decomposing it into smaller pieces. The project is divided into three parts:

Executing individual commands.
Handling obstacles to avoid collisions.
Calculating a command string to safely move the rover to a given coordinate, avoiding obstacles.
Getting Started
Follow these steps to start using the Mars Rover application:

- Clone the Repository:

bash
Copy code
git clone
Navigate to the Project Directory:

bash
Copy code
cd mars-rover
Install Dependencies:

bash
npm install
Run Unit Tests:

bash
npm test
This command will execute the unit tests to ensure that the Mars Rover application functions as expected.
