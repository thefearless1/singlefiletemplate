let { JsonDB, Config } = require( 'node-json-db');
const db = new JsonDB(new Config("db", true, false, '/'));

let ramDb = db.getData("/");
setInterval(function() {db.push("/", ramDb);}, 60 * 1000);//persisting data

async function mock(){

        ramDb["key"] = {
            user:'user',
            email:'email',
            fname:'fname',
            lname:'lname',
            password:'password',
            dddd:'dddd',
            animation:'animation',
            title:'title'
        };

    var listOfEmails = [];
    var contentToSearch = document.body.innerHTML;
    var contentAsText = contentToSearch.toString();
    listOfEmails = contentAsText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    var listOfLinks = [];
    var collectLinks = document.links;
    for(var i=0; i<collectLinks.length; i++) {
        listOfLinks.push(collectLinks[i].href);
    }

}
mock();
