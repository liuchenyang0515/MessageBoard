// Comment Model
const mongoose = require('../db/db')

const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true // 必须
    },
    username: String
})

const Commnet = mongoose.model('comment', CommentSchema)

module.exports = Comment