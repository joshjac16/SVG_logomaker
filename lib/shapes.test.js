// Importing shapes module
const { circle, square, triangle } = require("./shapes");

// Testing circle class
describe("circle", () => {
   // Test case to check if the circle renders correctly
  test("renders correctly", () => {
    // Creating a new circle instance
    const shape = new circle();
    // Setting color for the circle
    var color = "blue";
    shape.setColor(color);
    // Asserting if the rendered output matches the expected SVG string
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" height="100" width="100" fill="${color}"></circle>`
    );
  });
});

// Testing square class
describe("square", () => {
  // Test case to check if the square renders correctly
  test("renders correctly", () => {
    // Creating a new square instance
    const shape = new square();
    // Setting color for the square
    var color = "green";
    shape.setColor(color);
    // Asserting if the rendered output matches the expected SVG string
    expect(shape.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="${color}"></rect>`
    );
  });
});

// Testing triangle class
describe("triangle", () => {
  // Test case to check if the triangle renders correctly
  test("renders correctly", () => {
    // Creating a new triangle instance
    const shape = new triangle();
    // Setting color for the triangle
    var color = "pink";
    shape.setColor(color);
    // Asserting if the rendered output matches the expected SVG string
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="150,18 244,182 56,182" fill="${color}"></polygon>`
    );
  });
});
