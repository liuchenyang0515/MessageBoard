// 留言的controller

const Comment = require('../model/Comment')
// 创建留言
async function create(content, username) {
    // 保存到数据库
    const newComment = await Comment.create({
        content,
        username
    })
    return newComment
}

module.exports = {
    create
}