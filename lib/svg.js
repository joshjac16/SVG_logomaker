class svg {
  constructor() {
    this.shape = "";
    this.text = "";
  }
  setText(text, color) {
    this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="55" text-anchor="middle" fill="${color}">${text}</text>`;
    
    console.log(this.text);
  }
  setShape(shape) {
    this.shape = shape;
  }
  render() {
    return `<svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${this.shape}
    ${this.text}
    </svg>`;
  }
}

module.exports = svg;
