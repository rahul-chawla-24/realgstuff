const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    districts: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'District'
        }
    ]
}, {
    timestamps: true
});


const State = mongoose.model('State', stateSchema);

module.exports = State;