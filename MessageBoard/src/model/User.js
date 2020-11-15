// User Model
const mongoose = require('../db/db')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, // 必须
        unique: true // 唯一不重复
    },
    password: String, 
    age: Number,
    city: String, 
    gender: {
        type: Number,
        default: 0 // 0保密，1男，2女
    }
}, {
    timestamps: true // 时间戳
})

const User = mongoose.model('user') // 数据库的users会将这个自动转换为复数形式

module.exports = User