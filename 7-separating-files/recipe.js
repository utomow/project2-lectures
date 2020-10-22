
const MeasuringTools = require('./measuringTools')
const Ingredients = require('./ingredients')
const Bowls = require('./bowl')

// Do the recipe!
console.log("Let us begin!")

let someYeast = MeasuringTools.measure(Ingredients.yeast, 1 * MeasuringTools.TEASPOON)
let someWater = MeasuringTools.measure(Ingredients.water, 2.25 * MeasuringTools.CUP)
let someSugar = MeasuringTools.measure(Ingredients.sugar, 0.5 * MeasuringTools.TEASPOON)

let mixingBowl = Bowls.getBowl(4.5 * MeasuringTools.QUART)

Bowls.addToBowl(mixingBowl, someYeast)
Bowls.addToBowl(mixingBowl, someWater)
Bowls.addToBowl(mixingBowl, someSugar)

