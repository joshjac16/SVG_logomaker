const { circle, square, triangle } = require("./shapes");

describe("circle", () => {
  test("renders correctly", () => {
    const shape = new circle();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" height="100" width="100" fill="${color}"></circle>`
    );
  });
});

describe("square", () => {
  test("renders correctly", () => {
    const shape = new square();
    var color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="${color}"></rect>`
    );
  });
});

describe("triangle", () => {
  test("renders correctly", () => {
    const shape = new triangle();
    var color = "pink";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="150,18 244,182 56,182" fill="${color}"></polygon>`
    );
  });
});
