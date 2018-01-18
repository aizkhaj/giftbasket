
class Gift {
  // each new Gift has a property of shape and weight.
  constructor() {
    this.shape = ['square', 'rectangle', 'circle', 'oval', 'triangle'];
    this.weight = [50, 100, 150, 200, 250];
  }

  assignShape() {
    const shape = this.shape;
    const randomShape = shape[Math.floor(Math.random()*shape.length)];
    return randomShape;
  }

  assignWeight() {
    const weight = this.weight;
    const randomWeight = weight[Math.floor(Math.random()*weight.length)];
    this.weight = randomWeight;
    return randomWeight;
  }
}

export default Gift;

// my thought process was that I'd create a class to produce a new Gift with its properties. However, due to constraints, I was not able to create the functions to properly inject random shape or weights into a "this.properties" object in the constructor. This is incorrect