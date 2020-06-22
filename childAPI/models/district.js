const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "State"
    }
}, {
    timestamps: true
});


const District = mongoose.model('District', districtSchema);

module.exports = District;