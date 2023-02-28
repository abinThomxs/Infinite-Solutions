const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/AuthRoutes');
const cookieParser = require('cookie-parser');

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/InfiniteSolutions',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('mongodb connected successfully');
}).catch((err) => {
    console.log(err.message);
})

app.use(cors())

app.use(cookieParser());
app.use(express.json());
app.use('/', authRoutes);

app.listen(4000, () => {
    console.log('server running on port 4000')
});