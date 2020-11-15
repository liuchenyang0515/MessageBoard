const router = require('koa-router')()
const { register } = require('../controller/user')

router.prefix('/users')

router.post('/register', async (ctx, next) => {
  // 获取注册信息（前端post过来的）
  const userInfo = ctx.request.body
  console.log(userInfo)
  // 提交注册
  try {
    const newUser = await register(userInfo) // 调用controller
    // 成功
    ctx.body = {
      errno: 0,
      data: newUser
    }
  } catch (ex) {
    // 失败
    console.error('注册失败', ex)
    ctx.body = {
      errno: -1,
      message: '注册失败'
    }
  }
})

module.exports = router
