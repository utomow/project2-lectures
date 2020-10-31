const { array1 } = require("./exportTest");
const Class = require("./exportTest")

console.log(module)
// console.log("myClass = " + myClass)
let obj1 = new Class.myClass('Jo')
let obj2 = new Class.myOtherClass(52)
let myarray = Class.array1;

console.log(Class)
// console.log(obj1)
// console.log(obj2)
// console.log(array1)

let materials = {
    Yeast : {name: "Yeast", density: 1.2, description: "Granulated yeast"},
    Water : {name: "Water", density: 1, description: "Plain water"},
    Sugar : {name: "Sugar", density: 1.28, description: "Granulated Sugar"}
}

console.log(materials)

let someMaterial = materials.Yeast

console.log(someMaterial)
// console.log('array 1 = ' + array1)
// console.log('array 2 = ' + array2)