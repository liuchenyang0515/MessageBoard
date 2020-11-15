// user controller
const User = require('../model/User')

// 注册
async function register( userInfo = {} ) {
    // 插入数据库
    const newUser = await User.create(userInfo)
    console.log("newUser插入数据库:" + newUser)
    // 返回注册的用户信息
    return newUser
}

module.exports = {
    register
}