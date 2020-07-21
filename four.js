
slice(start,end)
substring(start,end)
substr(start,length)

var city = "Paris"
undefined
city.slice(1)
"aris"
city.substring(1)
"aris"
city.substr(1)
"aris"

var city = "Amsterdam"
undefined
city.slice(2,5)
"ste"
city.slice(2,6)
"ster"
city.slice(1,6)
"mster"
city.substring(1,6)
"mster"
city.substr(1,6)
"msterd"

slice()
    >a(-2) > It will give 2 letter from end


var city = "Amsterdam"
undefined
city.slice(-2)
"am"
city.slice(-1)
"m"
city.slice(-2,1)
""
city.slice(1,-2)
"msterd"
city.slice(2,-3)
"ster"
city.slice(-2,-3)
""
city.slice(-3,-2)
"d"
city.slice(-4,-2)
"rd"
city.slice(-5,-2)
"erd"


var city = "Amsterdam"
undefined
city.substring(-1)
"Amsterdam"
city.substring(-2)
"Amsterdam"
city.substring(-2,1)
"A"
city.substring(-2,2)
"Am"
city.substring(-9,2)
"Am"
city.substring(1,-2)
"A"
city.substring(-2,-2)
""
city.substring(-3,-2)
""


var city = "Amsterdam"
undefined
city.substr(-1)
"m"
city.substr(-2)
"am"
city.substr(-2,1)
"a"
city.substr(-2,3)
"am"
city.substr(-3,3)
"dam"
city.substr(-4,3)
"rda"
city.substr(3,-2)
""
city.substr(-3,-2)
""