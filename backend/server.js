const express = require('express');
const connect_DB = require('./DB');
const cors = require("cors")

const route = require('./routes/data.routes');

const app = express();

app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
))

app.use('/api', route)

app.listen(5000, ()=>{
    connect_DB();
    console.log("server is running on 5000")
})