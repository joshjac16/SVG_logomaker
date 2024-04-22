// Define a base class for shapes
class Shape {
  // Initialize color property
  constructor() {
    this.color = "";
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}
// Define a class for rendering circles, extends Shape class
class circle extends Shape {
  // Method to render a circle with the specified color
  render() {
    return `<circle cx="150" cy="100" r="80" height="100" width="100" fill="${this.color}"></circle>`;
  }
}

// Define a class for rendering squares, extends Shape class
class square extends Shape {
  render() {
    // Method to render a square with the specified color
    return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
  }
}

// Define a class for rendering triangles, extends Shape class
class triangle extends Shape {
  // Method to render a triangle with the specified color
  render() {
    return `<polygon height="100%" width="100%" points="150,18 244,182 56,182" fill="${this.color}"></polygon>`;
  }
}

// Export the classes to be accessible from other modules
module.exports = { circle, square, triangle };
