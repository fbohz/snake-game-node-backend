const mongoose = require('mongoose');

// score schema

const scoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: [true, 'missing score'],
    },
    user_name: {
        type: String,
        required: [true, 'missing user name'],
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score