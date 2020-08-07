function human(name){
    this.name = name;
    this.city="NewYork"
}

function robot(name){
    this.name=name;
    this.legs = 2;
    this.color='red'

}

var john = new human('John');
var pepper = new robot('Pepper')

/////es5//////
human.prototype = new robot()
var john = new human('John');
undefined
john
human {name: "John", city: "NewYork"}
john.legs
2
john.color
"red"


robot.prototype = new human()