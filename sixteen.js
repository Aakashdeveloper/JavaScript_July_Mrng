Map
> help to iterate over the array and play logic
> Map always return same length of array as input array


Filter
> Helt to filter out the value
> output of filter may or may not be of same length
> Only return those value for which output is true

var a = [3,6,8,3,5,6,9]
a.map((data) => {console.log(data)})

a.map((data) => {return(data*2)})

a.map((data) => {return(data*2)})
(7) [6, 12, 16, 6, 10, 12, 18]


var a = [3,6,8,3,5,6,9]
a.filter((data) => { return data>5})
[6, 8, 6, 9]


var a = [3,6,8,3,5,6,9]
a.map((data) => { return data>5})
[false, true, true, false, false, true, true]


var a = [0,1,2,3]
a.map((data) => { return data*2})
(4) [0, 2, 4, 6]
a.filter((data) => { return data*2})
(3) [1, 2, 3]