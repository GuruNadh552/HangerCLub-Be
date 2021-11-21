const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()


dotenv.config({path:'config.env'})
const port = process.env.PORT || 8000;

//dbConnection 
const dbConnection = require('./server/database/connection');

dbConnection();

//for printing the logs
app.use(morgan('tiny'))

//parse request to body - parser
app.use(express.urlencoded({urlencoded:false}))
app.use(express.json());

app.use('/',require('./server/routes/router'))

app.use('/auth',require('./server/routes/auth-routes'))

app.listen(port,()=>{
    console.log(`${port} Server Running`);
})