var express=require('express');
// const notes = require('./controllers/product.controller.js');
const connect = require('./models/connection.js');
const crud = require('./routes/web.js');

var app=express();
app.set('view engine', 'ejs');

app.set("view options", {layout: false});

app.use(express.urlencoded({ extended: true }))

app.use('/', crud);

var server = app.listen(3000);