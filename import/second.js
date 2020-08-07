//var dbObj = require('./first');
import dbObj from './first'

console.log(dbObj.users)
console.log(dbObj.dbquery.insert('student',{name:'John',city:'Delhi'}))


