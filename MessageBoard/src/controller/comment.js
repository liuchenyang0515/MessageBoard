// 留言的controller

const { where } = require('../model/Comment')
const Comment = require('../model/Comment')

// 获取留言列表
async function getList(username = '') {
    const whereOpt = {}
    if(username) {
        whereOpt.username = username
    }
    const list = Comment.find(whereOpt).sort({_id: -1})
    return list
}


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
    create,
    getList
}