
class Rules {
  constructor(season) {
    // rules takes an input of season and determines which rules to use.
    this.season = season;
    this.rules = {};
  }

  // this class would be used to define the different rules. e.g.:

  perfectVariety(gifts) {
    // five gifts with different weights and shape;
    // func takes in array of gifts.
    // iterate through array using array.every() to see if all of them have different weight and shape.
    // if true for both weight and shape, then create a basket using this rule.
  }

}

export default Rules;