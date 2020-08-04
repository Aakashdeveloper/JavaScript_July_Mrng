////IFFI/////
/*function hi(){
    console.log("Hii TO IFFI")
}

console.log(hi())
*/
 
(function(){
    console.log("Hii TO IFFI")
}())

//////////Generator function///////
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

looping(5)
VM196:3 0
VM196:3 1
VM196:3 2
VM196:3 3
VM196:3 4


function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}
undefined
looping(3)
looping {<suspended>}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}