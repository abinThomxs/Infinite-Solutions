const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    subName:{
        type: String,
        required: [true, 'Service level is required'],
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
    },
    image:{
        type: String,
        required: [true, 'Image is required'],
    },
    rate:{
        type: Number,
        required: [true, 'Image is required'],
    },
    consultants:{
        type: Array,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Services', serviceSchema);