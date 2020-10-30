


class myClass {
  constructor(name) {
    this.name = name
  }

  showName() {
    console.info(this.name)
  }


}

class myOtherClass {
  constructor(age) {
    this.age = age
  }
}

const array1 = [1,2, 3, 4, 5]
const array2 = ['a', 'b', 'c', 'd', 'e']


module.exports = {myClass : myClass, myOtherClass : myOtherClass, array1 : array1, array2: array2}