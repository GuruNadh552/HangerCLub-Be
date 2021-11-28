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
app.use(morgan('tiny'));

//parse request to body - parser
app.use(express.urlencoded({urlencoded:false}));
app.use(express.json());


//main routes
app.use('/auth',require('./server/routes/auth-routes'))
app.use('/cart',require('./server/routes/cart-routes'))
app.use('/category',require('./server/routes/category-routes'))
app.use('/orders',require('./server/routes/orders-routes'))
app.use('/payment',require('./server/routes/payment-routes'))
app.use('/product',require('./server/routes/product-routes'))
app.use('/user',require('./server/routes/user-routes'))


app.listen(port,()=>{
    console.log(`${port} Server Running`);
})