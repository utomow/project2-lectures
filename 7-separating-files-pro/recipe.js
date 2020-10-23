
const { TEASPOON, CUP, QUART, measure } = require('./measuringTools')

const Ingredients = require('./ingredients')
const Bowl = require('./bowl')

// Do the recipe!
console.log("Let us begin!")

let someYeast = measure(Ingredients.yeast, 1 * TEASPOON)
let someWater = measure(Ingredients.water, 2.25 * CUP)
let someSugar = measure(Ingredients.sugar, 0.5 * TEASPOON)

let mixingBowl = new Bowl(4.5 * QUART)
mixingBowl.add(someYeast)
mixingBowl.add(someWater)
mixingBowl.add(someSugar)

