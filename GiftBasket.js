import Gift from '/Gift';
import Rules from '/Rules';

function createSevenGifts() {
  const arrayOfGifts = [];
  for (let i = 0; i < 7; i++) {
    arrayOfGifts[i] = new Gift();
  }
  return arrayOfGifts;
  // note: I realize that although this correctly produces gifts, it is not providing gifts with properties. I don't have enough time to create gifts into an object of its own and then selecting random properties from it at the moment. :(
}

class GiftBasket {
  // GiftBasket receives an array of 7 gift objects and a season
  constructor(season, ...gifts) {
    this.season = season;
    this.gifts = gifts;
    this.rules;
  }

  whichRulesToUse() {
    const rules = {
      // empty object to store the rules
    }
    switch (this.season) {
      case 'spring':
      // only use perfect pairing, shape pairing, discount basket
        break;
      case 'summer':
      // only use perfect pairing, weight variety, shape variety, perfect pairing, shape pairing, discount basket
        break;
      case 'autumn':
      // only use perfect variety, weight variety, shape variety, discount basket
        break;
      case 'winter':
      // only use perfect variety, perfect pairing, discount basket
        break;
      default:
      console.log('none of the seasons match');
    }
    this.rules = rules;
    return rules;
  }

  // GiftBasket sorts the 7 Gift objects and decides which 5 to put in a basket.
  optimizeVariety(rules) {
    /* 
    After we have run whichRulesToUse, and that being passed in as an argument here, we want to sort our array of 7 gifts by weight and shape using array sort so our data is uniform.
    */
  }


  // When a new GiftBasket is created, it should return 5 optimal set of gifts in it.
}

export default GiftBasket;