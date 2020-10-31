const Container = require("./container.js");
const Ingredient = require("./ingredient.js");

class Timer {
    constructor() {
        (this.remainingTime = 0),
            (this.running = false),
            (this.description = "Built in timer.");
    }

    setTimer(time) {
        console.log("Setting timer to " + time + " s.");
        this.remainingTime = time;
    }

    stopTimer() {
        console.log("Stop Timer");
        this.running = false;
    }

    isTimerUp() {
        if (this.running && this.remainingTime <= 0) {
            console.log("Ding! Ding! Ding!!!!");
            running = false;
            return true;
        } else {
            console.log("Timer is not up");
            return false;
        }
    }
}

class Oven extends Container {
    constructor(capacity) {
        console.log("\nFinding an oven with capacity of  " + capacity + " mL");
        super(capacity);
        this.temperature = 200;
        this.temperatureSetpoint = 0;
        this.contents = [];
        this.timer = new Timer();
        this.description = "Oven with the capacity of " + this.volume + " mL.";
    }

    setTemperature(temperature) {
        console.log("Set oven temperature to " + temperature + "C");
        this.temperatureSetpoint = temperature;
    }

    waitTemperature() {
        do {
            console.info(
                "Wait oven to reach temperature. Current temperature is " +
                this.temperature +
                " C."
            );
            this.temperature += 50;
            wait1S();
        } while (this.temperature < this.temperatureSetpoint);
        this.temperature = this.temperatureSetpoint
        console.info("Ding!!! Oven is ready. Oven temperature is " + this.temperature + " C.");
    }

    bake(time) {
        // this.add(someStuff);
        // console.log(this.contents)
        // console.log(this.contents[0].contents)
        this.timer.setTimer(time);
        do {
            console.info(
                "Waiting the timer to expire. Remaining time is " +
                this.timer.remainingTime +
                " minutes"
            );
            this.timer.remainingTime -= 5;
            wait1S();
        } while (this.timer.remainingTime > 0);
        this.timer.remainingTime = 0
        console.info("Ding! Ding! Ding!. Timer is expired. Remove the pan!!!");
        let newIngredient = new Ingredient()
        newIngredient.name = "Bread"
        newIngredient.volume = this.getContentsTotalVolume()
        newIngredient.weight = this.getContentsTotalWeight()
        newIngredient.description = "A loaf of bread baked to golden brown."
        newIngredient.form = "solid"
        this.contents.forEach((pan) => {
            newIngredient.name = "Bread"
            newIngredient.volume = pan.getContentsTotalVolume()
            newIngredient.weight = pan.getContentsTotalWeight()
            newIngredient.description = "A loaf of bread baked to golden brown."
            newIngredient.form = "solid"
                    pan.replaceContent(newIngredient);
            // element.contentsDescription = element.getContentsDescription()
        });
    }

    removeContent() {
        if (this.contents.length == 0) {
            console.warn("Nothing on " + this.description + " to remove.");
        } else {
            // console.log(this.contents[0])
            console.info(
                "Removing " +
                // this.contents[0].name +
                // " in " +
                this.contents[0].description +
                " from " +
                this.description
            );
            return this.contents.pop();
        }
    }

    add(someStuff) {
        console.log(
            "Adding " +
            someStuff.contents[0].name +
             " in the " +
             someStuff.description +
            " into " +
            this.description
        );
        this.contents.push(someStuff);
        // this.contentsDescription = this.getContentsDescription();
    }

    getContentsDescription() {
        if (this.contents.length == 0) {
            return "";
        } else {
            let contentsStr = [];
            this.contents.forEach((element) => {
                contentsStr.push(element.description);
            });
            return contentsStr.join(", ");
        }
    }
}

function wait1S() {
    let start = new Date();
    let end = new Date();
    do {
        end = new Date();
    } while (end - start < 1000);
}

module.exports = Oven;
