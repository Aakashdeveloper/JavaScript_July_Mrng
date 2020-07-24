RegExp
^$

var a = "hi"
a.match("^([a-z])$")
null
var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "H"
a.match("^([a-z])$")
null

//Only 2 small a-z
var a = "hi"
a.match("^([a-z]{2})$")

//Range between 2,8 small a-z
var a = "hi"
a.match("^([a-z]{2,8})$")

//Any number of small a-z
var a = "hi"
a.match("^([a-z]+)$")


//Any number of small a-zA-Z
var a = "hi"
a.match("^([a-zA-Z]+)$")


var phone = 86834787
phone.match("^([0-9]{10})$")
VM431:2 Uncaught TypeError: phone.match is not a function
    at <anonymous>:2:7


var phone = 86834787
phone.toString()
"86834787"
""+phone
"86834787"
phone+""
"86834787"


var phone = 86834787
phone.toString().match("^([0-9]{10})$")
null
var phone = 8683478700
phone.toString().match("^([0-9]{10})$")
(2) ["8683478700", "8683478700", index: 0, input: "8683478700", groups: undefined]


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "aa.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null