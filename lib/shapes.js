class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
class square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}
class triangle extends Shape{
    render(){
        return `<polygon points="160,10 265,190 50,190" fill="${this.color}" />`
    }
}

module.exports = {circle, square, triangle}