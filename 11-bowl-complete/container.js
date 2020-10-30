class Container {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.contents = [];
  }

  addContent(someStuff) {
    this.contents.push(someStuff)
  }
  
  removeContent() {
    let returnedContent = this.content;
    this.contents = [];
    return(returnedContent)
  }

  getContentsTotalWeight() {
    let totalWeight = 0;
    this.contents.forEach(element => {
      totalWeight += element.weight
    });
    return totalWeight;
  }

  getContentsTotalVolume() {
    let totalVolume = 0;
    this.contents.forEach(element => {
      totalVolume += element.volume
    });
    return totalVolume;
  }

  getContentsDensity() {
    return (this.getContentsTotalWeight / this.getContentsTotalVolume)
  }
  
  replaceContent(newContent) {
    this.contents = [ newContent ]
  }
}

module.exports = Container


