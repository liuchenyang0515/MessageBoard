// 留言功能的路由

const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { create, getList } = require('../controller/comment')
router.prefix('/comment')

// 获取留言列表
router.get('/list', loginCheck, async (ctx, next) => {
    // 获取filterType: 1查看全部  2仅看自己
    let { filterType } = ctx.query
    filterType = parseInt(filterType) || 1

    // 获取当前用户名
    let username = ''
    if (filterType === 2) {
        username = ctx.session.userInfo.username
    }

    // 获取留言列表
    const list = await getList(username)
    ctx.body = {
        errno: 0,
        data: list
    }
}) 

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