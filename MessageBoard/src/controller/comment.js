// 留言的controller

const { where } = require('../model/Comment')
const Comment = require('../model/Comment')


// 更新留言
async function update(_id, username, content) {
    const newData = await Comment.findByIdAndUpdate(
        { _id, username}, // 只能更新自己的留言
        { content },
        { new: true } // 返回更新之后的最新留言
    )
    return newData
}


// 删除留言
async function del(_id, username) {
    await Comment.remove({
        _id, 
        username // 只能删除自己的
    })
}


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
    getList,
    del,
    update
}