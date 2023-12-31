const express = require('express')
const { MongoClient } = require('mongodb');
const getrefcode = require('./routes/getrefcode');
const cors = require('cors');
const app = express()
const port = 3000

app.use(express.json())
app.use(cors({ origin: '*' }));
// setting up database
const uri = 'mongodb+srv://dreamcolor:cch9szwd26@cluster0.ywsn7md.mongodb.net/';
const client = new MongoClient(uri);
const database = client.db('dreamcolor');

// Get request
app.get('/', (req, res) => res.send('OK'))
app.get('/getinvite', (req, res) => {
    res.send({ success: true, invite: 'kkmdme' })
})

// Post request
app.post('/payment', (req, res) => {
    const { paytm, phone, id } = req.body
})
app.post('/savedata', (req, res) => {
    const { paytm, phone, id, pass, invite } = req.body
});
app.post('/getrefcode', async (req, res) => getrefcode(req, res, database));



client.connect(err => {
    if (err) { console.error(err); return false; }
    app.listen(port, () => {
        console.log("listening for requests");
    })
});
