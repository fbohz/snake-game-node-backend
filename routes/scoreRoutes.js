const express = require('express')
const router = express.Router()

const {
    getAllScores,
    createScore
} = require('../controllers/scoreController')

router.route('/').get(getAllScores).post(createScore)

module.exports = router