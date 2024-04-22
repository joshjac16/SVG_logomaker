// Importing necessary modules
const fs = require("fs");
const inquirer = require("inquirer");
const { circle, square, triangle } = require("./lib/shapes");
const svg = require("./lib/svg");

// Function to validate user input for text field
function validateInput(value) {
  if (value.length > 0 && value.length < 4) {
    return true;
  } else {
    console.log(
      "Invalid user text field detected! Please enter 1-3 Characters, no more and no less"
    );
    return;
  }
}

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to (3) Characters:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "text_color",
    message: "Enter a TEXT COLOR keyword (OR a hexadecimal number):",
  },
  {
    type: "input",
    name: "shape",
    message: "Enter a SHAPE COLOR keyword (OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "pixel_image",
    message: "Choose which Pixel Image you would like?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

// Function to write data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// Function to initialize the program
function init() {
  // Prompt user with questions
  inquirer
    .prompt(questions)
    .then((data) => {
      let user_shape;
      // Determine which shape the user selected
      if (data.pixel_image === "Square") {
        user_shape = new square();
      } else if (data.pixel_image === "Circle") {
        user_shape = new circle();
        console.log("User selected Circle shape");
      } else if (data.pixel_image === "Triangle") {
        user_shape = new triangle();
      } else {
        console.log("Invalid shape!");
      }
      // Set color for the selected shape
      user_shape.setColor(data.shape);
      return { user_shape, data };
    })
    .then(({ user_shape, data }) => {
      // Create an SVG logo with user's text and shape
      const svgLogo = new svg();
      svgLogo.setText(data.text, data.text_color);
      svgLogo.setShape(user_shape.render());
      return svgLogo.render();
    })
    .then((data) => {
      // Write SVG data to a file
      writeToFile("logo.svg", data);
    });
}

// Call the init function to start the program
init();
