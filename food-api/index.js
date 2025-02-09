const express = require('express');
const cors = require('cors')
const connect = require('./connection');
const user = require('./routes/user')
const app = express();
connect();
app.use(cors())
app.use(user)
app.listen(3000, (err)=> {
    if(err){
        console.log("problem....")
    } else {
        console.log("Server is running on 3000...")
    }
})