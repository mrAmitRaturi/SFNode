const express = require('express');
const nforce = require('nforce');
const app = express();

app.use(express.json());

const org = nforce.createConnection({
    clientId: '19023MVG9ZL0ppGP5UrD_ed1F5Xwrexb3ZDwmYbF9xeWq5Tveq7SPJGQ1t9AlWKy15WbRpKDOot7R7RVr_57AFNuu',
    clientSecret: '36926536348185178011902',
    redirectUri: 'http://localhost:3000/oauth/_callback',
    apiVersion: 'v43.0',
    environment: 'production',
    mode: 'single'
});


app.get('/', (req, res) => {
    //clsres.send('Hello World')
    let query = 'SELECT Id, Name FROM Account LIMIT 2';
    org.query({query: query}, (err, resp) => {
        if(!err) {
            res.send(resp);
        }
    })
})


org.authenticate({
    username: '***********',
    password: '***********'
}, (err, res) => {
    if(!err) {
        console.log('connected');
        // var acc = nforce.createSObject('Account');
        // acc.set('Name', 'User Name');
        // acc.set('Phone', '800-555-2345');
        // acc.set('SLA__c', 'Gold');

        // org.insert({ sobject: acc}, function(err, resp){
        //     if(!err) console.log('It worked!');
        // });

        // let query = 'SELECT Id, Name FROM Account LIMIT 2';
        // org.query({query: query}, (err, res) => {
        //     if(!err) {
        //         res.records.map((v) => {
        //             console.log(v);
        //         })
        //     }
        // });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listing on port ${port}`);
})


