For multiple condition we will use if else
for one condition and multiple output use switch
for only one condition go for ternonry 

var name = "John"

switch(name){
    case 'aakash':
        console.log("You are user")
        break;
    case 'John':
        console.log('You are super admin')
        break;
    case 'Eva':
        console.log("You are user")
        break;
    default:
        console.log("i Dont know")
}


var number = 10
switch(number%2){
    case 0:
        console.log("Number is even")
        break;
    case 1:
        console.log("Number is odd")
        break;
    default:
        console.log("Wrong inpt")
}