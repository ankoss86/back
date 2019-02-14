const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

//imports
const keys = require('./keys');

//dataBase
const mongoose = require('mongoose');
const Users = require('./routes/Users');

app.use('/users', Users)
//connect to dataBase
mongoose
    .connect(keys.mongoUrl, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log('started on port: ' + port)
})