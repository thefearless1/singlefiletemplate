let { JsonDB, Config } = require( 'node-json-db');
const db = new JsonDB(new Config("db", true, false, '/'));

let ramDb = db.getData("/");

async function mock(){

        ramDb["key"] = {
            user:'user'+i,
            email:'email',
            fname:'fname',
            lname:'lname',
            password:'password',
            dddd:'dddd',
            animation:'animation',
            title:'title'
        };

}
mock();
setInterval(function() {
    console.log('triggered');
     db.push("/test", ramDb);
     console.log('finished');
}, 60 * 1000);