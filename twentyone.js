var firstname = "Sara"
var lastname = "Zoe"

var sayhi={
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}


console.log(sayhi.greet())

/////////////////////////////////////
Constructor
///////////////////////////
var bob = new Object();
bob.age = 10
bob.city="new york"
bob.setAge= function(newAge){
    this.age = newAge
}
ƒ (newAge){
    this.age = newAge
}
bob.age
10
bob.city
"new york"
bob.setAge(3)
undefined
bob
{age: 3, city: "new york", setAge: ƒ}

var tony = new Object();
tony.age = 10
tony.city="new york"
tony.setAge= function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10
bob.city="new york"
bob.setAge= function(newAge){
    this.age = newAge
}
----------------------------------------

let createAge = function(newAge){
    this.age = newAge
}

var tony = new Object();
tony.age = 10
tony.city="new york"
tony.setAge= createAge

var bob = new Object();
bob.age = 10
bob.city="new york"
bob.setAge= createAge