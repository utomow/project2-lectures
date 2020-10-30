
const { TEASPOON, CUP, QUART, measure } = require('./measuringTools')

const Ingredients = require('./ingredients')
const Bowl = require('./bowl')
const WorkingSurface = require('./workingSurface')
const Pan = require('./pan')
const Oven = require('./oven')

// Do the recipe!
console.log("Let us begin!\n")

let someYeast = measure(Ingredients.yeast, 1 * TEASPOON)
let someWater = measure(Ingredients.water, 2.25 * CUP)
let someSugar = measure(Ingredients.sugar, 0.5 * TEASPOON)

let mixingBowl = new Bowl(4.5 * QUART)
mixingBowl.add(someYeast)
mixingBowl.add(someWater)
mixingBowl.add(someSugar)
mixingBowl.mixContent()

let marbleTop = new WorkingSurface(100, 80)
marbleTop.putFlour();
marbleTop.add(mixingBowl.removeContent())
marbleTop.kneadContent()

let greaseBowl = new Bowl(4.5 * QUART)
greaseBowl.grease();
greaseBowl.add(marbleTop.removeContent())
greaseBowl.coverContent();
greaseBowl.punchContent();

marbleTop.add(greaseBowl.removeContent())
marbleTop.divideContent();

let bakingPan1 = new Pan(2 * QUART)
bakingPan1.grease();
bakingPan1.add(marbleTop.removeContent())
bakingPan1.shapeContent();

let bakingPan2 = new Pan(2 * QUART)
bakingPan2.grease();
bakingPan2.add(marbleTop.removeContent())
bakingPan2.shapeContent();
// console.log(bakingPan1, bakingPan2)

let bakingOven = new Oven(200 * QUART)
bakingOven.setTemperature(400)
bakingOven.waitTemperature()

bakingOven.bake(bakingPan1,10)
marbleTop.add(bakingOven.removeContent().removeContent())
console.info("\n")






