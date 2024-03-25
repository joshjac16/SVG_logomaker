const fs = require("fs");
const inquirer = require("inquirer");
const { circle, square, triangle } = require("./lib/shapes");

function validateInput(value) {
  if (answers.text.length > 0 && answers.text.length < 4) {
    return true;
  } else {
    console.log(
      "Invalid user text field detected! Please enter 1-3 Characters, no more and no less"
    );
    return;
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to (3) Characters:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "text-color",
    message: "Enter a TEXT COLOR keyword (OR a hexadecimal number):",
  },
  {
    type: "input",
    name: "shape",
    message: "Enter a SHAPE COLOR keyword (OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "pixel-image",
    message: "Choose which Pixel Image you would like?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
function init() {
  inquirer.prompt(questions).then((data) => {
    let user_shape;
	if (data.shape === "Square" ) {
		user_shape = new Square();
		
	}
	else if (data.shape === "Circle" ) {
		user_shape = new Circle();
		
	}
	else if (data.shape === "Triangle") {
		user_shape = new Triangle();
		
	}
	else {
		console.log("Invalid shape!");
	}
	user_shape.setColor(user_shape_color)
    writeToFile("logo.svg", data);
  });
}
