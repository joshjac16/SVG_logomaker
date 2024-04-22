// Define a class for generating SVG images
class svg {
  constructor() {
    // Initialize properties for shape and text
    this.shape = "";
    this.text = "";
  }

  // Method to set text to be rendered on the SVG image
  setText(text, color) {
    // Set text with specified content and color
    this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="55" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  // Method to set shape to be rendered on the SVG image
  setShape(shape) {
    this.shape = shape;
  }

  // Method to render the SVG image
  render() {
    return `<svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${this.shape}
    ${this.text}
    </svg>`;
  }
}

// Export the svg class to be accessible from other modules
module.exports = svg;
