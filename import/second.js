var dbObj = require('./first');

console.log(dbObj.users)
console.log(dbObj.dbquery.insert('student',{name:'John',city:'Delhi'}))


