for
while
do while
for of
/////////////////////
for in (objects)
//////////after Funtion////
map
filter

////////////////////////////////////////////////
for(i=0;i<5;i++){
    console.log(i)
}
0
VM603:2 1
VM603:2 2
VM603:2 3
VM603:2 4

var city = ["Delhi", "Helsinki", "Innsburg", "Mumbai", "Nice", "Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
VM608:3 Delhi
VM608:3 Helsinki
VM608:3 Innsburg
VM608:3 Mumbai
VM608:3 Nice
VM608:3 Paris

var city = ["Delhi", "Helsinki", "Innsburg",[1,2,3], "Mumbai", "Nice", "Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
VM627:3 Helsinki
VM627:3 Innsburg
VM627:3 (3) [1, 2, 3]
VM627:3 Mumbai
VM627:3 Nice
VM627:3 Paris

var city = ["Delhi", "Helsinki", "Innsburg",[1,2,3], "Mumbai", "Nice", "Paris"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

Delhi
Helsinki
Innsburg
1
2
3
Mumbai
Nice
Paris


////////////////WHILE///////////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}


////////////////DO WHILE///////////////////
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)


//////////////////////////////
        For of
////////////////////////////
var colors= ["Red","Yellow","Blue","Green"]
for(abc of colors){
    console.log(abc)
}


var colors= ["Red","Yellow",[1,2,3],"Blue","Green"]
for(abc of colors){
    if(Array.isArray(abc)){
        for(test of abc){
            console.log(test)
        }
    }
    console.log(abc)
}