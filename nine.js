Date()
"Fri Jul 24 2020 06:16:13 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDate()
24
a.getFullYear()
2020
a.getDay()
5
a.setDate(24/5/2020)
1593478116767



switch(new Date().getDay()){
    case 1:
        console.log("Today is monday")
        break;
    case 2:
        console.log("Today is tuesday")
        break;
    case 5:
        console.log("Today is friday")
        break;
    default:
        console.log("Invalid Input")
}
VM376:9 Today is friday