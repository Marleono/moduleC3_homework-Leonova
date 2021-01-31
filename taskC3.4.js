function electric(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}


electric.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};


electric.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};


function Tv(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isPlugged = true;
}

Tv.prototype = new electric();


function Computer(name, brand, power, type) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

Computer.prototype = new electric();


const smallTv = new Tv("smallTv", "Sony", 5);


const homePC = new Computer("Table PC", "Intel", 120, "stationary");

smallTv.unplug();


homePC.plugIn();


console.log(homePC)
console.log(smallTv)