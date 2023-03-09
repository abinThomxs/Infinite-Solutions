const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName:{
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
    },
    rate:{
        type: Number,
        required: [true, 'Image is required'],
    },
    consultants:{
        type: Array,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Services', serviceSchema);