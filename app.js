const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//import routes post
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
const authRoute = require('./routes/auth');
app.use('/user', authRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// connect to mongo database
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true}, 
    () => {
    console.log("Connected to datase");
});

//how to we start listening to server
app.listen(port);