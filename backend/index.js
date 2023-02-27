const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.listen(4000, () => {
    console.log('server running on port 4000')
});

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/jwt',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('mongodb connected successfully');
}).catch((err) => {
    console.log(err.message);
})

app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true,
}))

app.use(express.json());