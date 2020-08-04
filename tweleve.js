array is  collection of homogenious or hetrogenious data type


var a = [1,2,3,4,5]
var b = ['vvv','ggr','bfg']
var c = [true,true,false,false,true]
var d =[3,33,"fb","ngf","bg",56,5,true,'bf']

var city =["Delhi","Mumbai","Paris","London"]

var city =["Delhi","Mumbai","Paris","London"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"Delhi"
city[city.length-1]
"London"
city.push('Amsterdam')
5
city
(5) ["Delhi", "Mumbai", "Paris", "London", "Amsterdam"]
city.push('Helsinki')
6
city
(6) ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
undefined
city.pop()
"Helsinki"
city
(5) ["Delhi", "Mumbai", "Paris", "London", "Amsterdam"]
city.pop()
"Amsterdam"

var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city.pop(3)

var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city.pop(3)
"Helsinki"
var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city.shift()
"Delhi"
var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city.unshift('Nice')
7
city
(7) ["Nice", "Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]

push > add in the end of the array
pop  > remove from the end of the array
shift > remove from the begining of the array
unshift> add in the begining of the array

/////////////////////
Slice
Splice
/////////////////////////
var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
undefined
city.slice(1)
(5) ["Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city
(6) ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city.slice(2,6)
(4) ["Paris", "London", "Amsterdam", "Helsinki"]
city.slice(2,5)
(3) ["Paris", "London", "Amsterdam"]
city
(6) ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
city.slice(-2)
(2) ["Amsterdam", "Helsinki"]

var city = ["Delhi", "Mumbai", "Paris", "London", "Amsterdam", "Helsinki"]
undefined
city.splice(3,0,'Nice','Venice')
[]
city
(8) ["Delhi", "Mumbai", "Paris", "Nice", "Venice", "London", "Amsterdam", "Helsinki"]0: "Delhi"1: "Mumbai"2: "Paris"3: "Nice"4: "Venice"5: "London"6: "Amsterdam"7: "Helsinki"length: 8__proto__: Array(0)
city.splice(4,1)
["Venice"]
city.splice(4,2,'Innsburg')
(2) ["London", "Amsterdam"]
city
(6) ["Delhi", "Mumbai", "Paris", "Nice", "Innsburg", "Helsinki"]

city.indexOf('Paris')
2
city.indexOf('Pune')
-1
city.indexOf('Delhi')
0
city.indexOf('Helsinki')
5
city.indexOf('Indore')
-1

//////////////////////////////////////
var a = ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var c = [4,5,6]
undefined
a.concat(b,c)
(9) ["a", "b", "c", 1, 2, 3, 4, 5, 6]

var city = ["Delhi", "Mumbai", "Paris", "Nice", "Innsburg", "Helsinki"]
city.sort()
(6) ["Delhi", "Helsinki", "Innsburg", "Mumbai", "Nice", "Paris"]
city
(6) ["Delhi", "Helsinki", "Innsburg", "Mumbai", "Nice", "Paris"]
var city = ["Delhi", "Mumbai", "Paris", "Nice", "Innsburg", "Helsinki"]
undefined
city.reverse()
(6) ["Helsinki", "Innsburg", "Nice", "Paris", "Mumbai", "Delhi"]
city.reverse().sort()
(6) ["Delhi", "Helsinki", "Innsburg", "Mumbai", "Nice", "Paris"]
city.reverse().sort()
(6) ["Delhi", "Helsinki", "Innsburg", "Mumbai", "Nice", "Paris"]
var city = ["Delhi", "Mumbai", "Paris", "Nice", "Innsburg", "Helsinki"]
undefined
city.reverse().sort()
(6) ["Delhi", "Helsinki", "Innsburg", "Mumbai", "Nice", "Paris"]
city.sort().reverse()
(6) ["Paris", "Nice", "Mumbai", "Innsburg", "Helsinki", "Delhi"]

var a = [10,20,30,40]
undefined
a.fill(100,3)
(4) [10, 20, 30, 100]
var a = [10,20,30,40]
undefined
a.fill(100,2)
(4) [10, 20, 100, 100]
var a = [10,20,30,40]
undefined
a.fill(100,1,2)
(4) [10, 100, 30, 40]


var color=["Red","yellow",['a','b',[1,2,3,['x','y'],'z'],4,'c'],'black','Brown']
undefined
color[1]
"yellow"
color[2]
(5) ["a", "b", Array(5), 4, "c"]
color[2][0]
"a"
color[2][2]
(5) [1, 2, 3, Array(2), "z"]
color[2][2][1]
2
color[2][2][3]
(2) ["x", "y"]
color[2][2][3][1]
"y"


var color=["Red","yellow",['a','b',[1,2,3,['x','y'],'z'],4,'c'],'black','Brown']
color.flat()
(9) ["Red", "yellow", "a", "b", Array(5), 4, "c", "black", "Brown"]
color.flat(2)
(13) ["Red", "yellow", "a", "b", 1, 2, 3, Array(2), "z", 4, "c", "black", "Brown"]
color.flat(3)
(14) ["Red", "yellow", "a", "b", 1, 2, 3, "x", "y", "z", 4, "c", "black", "Brown"]

var a  = 10
undefined
var b = [10]
undefined
Array.isArray(a)
false
Array.isArray(b)
true