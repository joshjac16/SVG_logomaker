//
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
//The classes below renders chosen shape with the users color input 
class circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" height="100" width="100" fill="${this.color}"></circle>`;
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
