const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')


const mysql = require('mysql');
const conn = require('./config/db.js');
const playerRoute = require('./routes/players.js');
const app = express();



app.set('view engine', 'ejs');
app.use(expressLayouts);


app.use(methodOverride('_method'))



app.use(express.json());
app.use(express.urlencoded({
    extend: false
}));


app.use('/api', playerRoute);


app.listen(5000, () => console.log("Server running on port: " + 5000));