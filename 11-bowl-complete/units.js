class Unit {
  constructor(unit, conversionFactor) {
    this.unit = unit;
    this.conversionFactor = conversionFactor;
  }
}

let mL = new Unit("mL", )

let volumeWeight = [ 
  { let mL = new Unit("mL",1) },
  { let L = new Unit("L",1000) }
  // { unit: "CUP", conversionFactor: 450},
  // { unit: "fluid Oz.", conversionFactor: 200}
];

exports.weightUnit =  [
  { unit: "g", conversionFactor: 1},
  { unit: "kg", conversionFactor: 1000},
  { unit: "lb", conversionFactor: 220},
  { unit: "oz", conversionFactor: 10}
]


