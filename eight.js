if(condition){
    //do something
}else{
    //do something
}

var a = 849798
if(a%2===0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a = 21
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 849798
if(a%2===0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM130:4 Number 849798 is even
undefined

var a = 84979
if(a%2===0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM134:6 Number 84979 is odd
undefined

var a = 21
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}
VM140:6 Number 21 is divisible by 3
undefined

var a = 31
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}
VM145:9 Number 31 is odd



var a = 18
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 18
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0 || a%5===0){
    if(a%3===0){
        console.log(`Number ${a} is divisible by 3`)
    }else{
        console.log(`Number ${a} is divisible by 5`)
    }
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 18
if(a%2===0){
    console.log(`Number ${a} is even`)
}
if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}

Number 18 is even
Number 18 is divisible by 3



////////ternonry
var a = 10
a>10?"Hiii":"Biee"
"Biee"

var a = 10
a==10?"Hiii":"Biee"
"Hiii"

var a = 10
a==10?a+1:a-1
"Hiii"


var a = 10
a>10?a+1:a-1?"First":"Second"
"First"

var a = 10
a==10?a+1:a-1?"First":"Second"
11