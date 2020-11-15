// 留言功能的路由

const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { create } = require('../controller/comment')
router.prefix('/comment')

// 创建留言
router.post('/create', loginCheck, async (ctx, next) => {
    // 获取留言信息
    const { content } = ctx.request.body
    const { username } = ctx.session.userInfo
    try {
        // 提交留言
        const newComment = await create(content, username)
        // 返回
        ctx.body = {
            errno: 0,
            data: newComment
        }
    } catch (ex) {
        console.error('创建留言失败', ex)
        ctx.body = {
            errno: -1,
            data: '创建留言失败'
        }
    }
})


module.exports = router