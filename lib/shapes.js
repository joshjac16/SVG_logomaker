class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" height="100" width="100" fill="${this.color}">
    </circle>`;
  }
}
class square extends Shape {
  render() {
    return `<rect x="90" height="120" width="120" fill="${this.color}"></rect>`;
  }
}
class triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}"></polygon>`;
  }
}

module.exports = { circle, square, triangle };
