const {volumeUnit, weightUnit} = require("./units.js")
const Material = require("./material")


class Ingredient extends Material {
  constructor(material, amount, unit) {
    // console.log(unit)
    super(material); 
    this.volume = this.normalizeVolume(amount, unit)
    this.weight = this.normalizeWeight(amount, unit)
    this.state = this.setState()
  }

  setState(unit) {
    volumeUnit.forEach(volUnit => {
      console.log("the unit in construtor = " + unit)
      if (volUnit.unit === unit) {
        return "liquid"
      } else {
        return "solid"
      }
    })
  }

  isVolumeUnit(unit) {
    console.log(unit)
    volumeUnit.forEach(volUnit => {
      if (volUnit.unit === unit) {
        return true;
      }
      return false;
    })
  }

  normalizeVolume(amount, unit) {
    if (this.isVolumeUnit()) {
      this.volume = amount * this.unit.conversionFactor;
    } else {
      this.volume = (amount * this.unit.conversionFactor) / this.material.density;
    }
  }

  normalizeWeight(amount, init) {
    if (this.isVolumeUnit()) {
      this.weight = amount * this.unit.conversionFactor * this.material.density;
    } else {
      this.weight = amount * this.unit. conversionFactor;
    }
  }


  calculateContentsDensity() {
    return weight/volume
  }
}

module.exports = Ingredient
