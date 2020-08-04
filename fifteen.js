var a = 10
var b = 20
a+b
//////
functions
///////
functions
method
arrow
IFFI
generator

---------------
function add(a,b){
    return a+b
}

add(2,6)
8
add(2,62)
64
add('a','jjjj')
"ajjjj"

function isEven(userInput){
    var output;
    if(userInput%2==0){
        output =  `Number ${userInput} is even`
    }else{
        output = `Number ${userInput} is odd`
    }
    return output
}

isEven(5)
"Number 5 is odd"
isEven(4)
"Number 4 is even"

///////////////////Method/////////////
var isEven = function(userInput){
    var output;
    if(userInput%2==0){
        output =  `Number ${userInput} is even`
    }else{
        output = `Number ${userInput} is odd`
    }
    return output
}

isEven(5)
"Number 5 is odd"


////////Es6>>> Arrow Function////
var add = (a,b) => {return a+b}
add(1,2)
3