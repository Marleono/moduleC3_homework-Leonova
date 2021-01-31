class electric {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}


class Tv extends electric {
  constructor (name, brand, power) {
    super(name, power);
    this.brand = brand;
    this.isPlugged = true;
  }
}

class Computer extends electric {
  constructor(name, brand, power, type) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
  }
}


const smallTv = new Tv("smallTv", "Sony", 5);


const homePC = new Computer("Table PC", "Intel", 120, "stationary");


smallTv.unplug();


homePC.plugIn();

console.log(homePC)
console.log(smallTv)