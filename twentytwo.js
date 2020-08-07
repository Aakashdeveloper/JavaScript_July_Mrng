//es5//
function language(name,country){
    this.name = name;
    this.country = country;
    this.add = (a,b) => {return a+b}
}

var Hindi = new language('Hinid','India')
undefined
Hindi
language {name: "Hinid", country: "India"}
Hindi.name
"Hinid"
Hindi.country
"India"


//es6///

class langauge1{
    constructor(name,country){
        this.name = name;
        this.country = country
    }

    add(a,b){
        return a+b
    }
}

var English = new language('English','India')