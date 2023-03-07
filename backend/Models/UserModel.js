const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
    userType:{
        type: String,
        default: 'user',
    },
    location:{
        type: String,
        default: 'Calicut'
    },
    serviceNo:{
        type: Number,
        default: 0,
    },
    reviewNo:{
        type: Number,
        default: 0,
    },
    phone:{
        type: Number,
        default: 0000000000,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    }
});

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.statics.login = async function(email, password) {
   const user = await this.findOne({ email });
   if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
        return user;
    }
    throw Error('Incorrect Password');
   }
   throw Error('Incorrect Email');
};

module.exports = mongoose.model('Users', userSchema);