const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
// middleware
app.use(cors())
app.use(express())

const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ekpsx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db("appointment").collection("available_times");
        // api 
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
    } finally { }
}
run().catch(console.dir)

// Check in the browser http://localhost:5000
app.get('/', (req, res) => {
    res.send('doctor portal running')
})
// check in the terminal "nodemon index.js"
app.listen(port, () => {
    console.log(`doctor uncle running ${port}`)
})