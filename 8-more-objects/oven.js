class Timer {
  constructor() {
    this.remainingTime = 0,
    this.running = false,
    this.description = "Built in timer."
  }

  setTimer(time) {
    console.log("Setting timer to " + time + " s.")
    this.remainingTime = time;
  }

  startTimer() {
    if (this.remainingTime > 0) {
      console.log("Start Timer on ");
      this.running = true;
    } else {
      console.log("Set time first.");
    }
  }

  stopTimer() {
    console.log("Stop Timer")
    this.running = false;
  }

  isTimerUp() {
    if (this.running && this.remainingTime <= 0) {
      console.log("Ding! Ding! Ding!!!!")
      running = false;
      return true;
    }
    else {
      console.log("Timer is not up");
      return false;
    }
  }

}

class Oven {
  constructor(capacity) {
    console.log("\nFinding an oven with capacity of  " + capacity + "mL")
    this.capacity = capacity,
    this.temperature = 200,
    this.temperatureSetpoint = 0,
    this.contents = [],
    this.timer = new Timer()
    this.description = "Oven with the capacity of " + this. capacity + "mL."
    this.contentsDescription = this.getContentsDescription()
  }

  setTemperature(temperature) {
    console.log("Set oven temperature to " + temperature + "C");
    this.temperatureSetpoint = temperature;
  }

  waitTemperature() {
    do {
      console.info("Wait oven to reach temperature. Current temperature is " + this.temperature + "C.")
      this.temperature += 20;
      wait1S();
    } while (this.temperature < this.temperatureSetpoint)
    console.info("Ding!!! Oven is ready.")
  }

  bake(someStuff, time) {
    this.add(someStuff);
    // console.log(this.contents)
    // console.log(this.contents[0].contents)
    this.timer.setTimer(time)
    do {
      console.info("Waiting the timer to expire. Remaining time is " + this.timer.remainingTime + " minutes")
      this.timer.remainingTime--;
      wait1S();
    } while (this.timer.remainingTime > 0)
    console.info("Ding! Ding! Ding!. Timer is expired. Remove the pan!!!")
    this.contents.forEach(element => {
      element.contents = [{bread: "bread", description: "loaf of bread"}]
      // element.contentsDescription = element.getContentsDescription()
    });
  }

  removeContent() {
    if (this.contents.length == 0) {
      console.warn("Nothing on " + this.description + " to remove.")
    } else {
      // console.log(this.contents[0])
      console.info("Removing " + this.contents[0].getContentsDescription() + " in " + this.getContentsDescription() + " from " + this.description)
      return this.contents.pop()
    }
  }

  // isTemperatureReached() {
  //   console.log("Checking if oven is at set temperature");
  //   if (this.temperature == this.temperatureSetpoint) {
  //     console.log("Oven temeperature is at set temperature")
  //     return true;
  //   } else {
  //     console.log("Oven temperature has not reached set temperature")
  //     return false;
  //   }
  // }

  add(someStuff) {
    console.log("Adding " + someStuff.getContentsDescription() + " in the " + someStuff.description + " into " + this.description)
    this.contents.push(someStuff);
    // this.contentsDescription = this.getContentsDescription();
  }

  getContentsDescription() {
    if (this.contents.length == 0) {
      return "";
    } else {
      let contentsStr = []
      this.contents.forEach(element => {
        contentsStr.push(element.description)
      });
      return contentsStr.join(', ')
    }
  }

}

function wait1S() {
  let start = new Date()
  let end = new (Date)
  do {
    end = new Date();
  } while ((end-start) < 1000)
}

module.exports = Oven