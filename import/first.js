import React from 'react';

var dbObj = {}

dbObj.users = [
    {
        name:'Alvin',
        role:'Admin'
    },
    {
        name:'Bhumika',
        role:'Super Admin'
    }
]

dbObj.dbquery = {
    find:(table) => { return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name,city VALUES (${data.name},${data.city})`}
}

//module.exports = dbObj;
export default dbObj;