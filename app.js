const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
// initialize our express app
const app = express();



// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://product:password123@ds263791.mlab.com:63791/productstutorial';
//'mongodb://shibinragh1:password123@ds147391.mlab.com:47391/ask-questions'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);










let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});