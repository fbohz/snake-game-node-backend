const Score = require('../models/scoreModel')

// route handlers

exports.getAllScores = async (req, res) => {
    try {
        const scores = await Score.find().sort({score: -1}).limit(5)

        res.status(200).json({
            status: 'success',
            results: scores.length,
            scores
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.createScore = async (req, res) => {
    try {
        const newScore = await Score.create(req.body)
        res.status(201).json({
            data: {
                score: newScore
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })

    }
}