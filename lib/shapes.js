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
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
  }
}
class square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
  }
}
class triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="150,18 244,182 56,182" fill="${this.color}"></polygon>`;
  }
}

module.exports = { circle, square, triangle };
