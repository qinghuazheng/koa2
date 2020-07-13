import Koa from 'koa'
import bodyParser from 'koa-bodyParser'
import koajwt from 'koa-jwt'
import jwt from 'jsonwebtoken'
import router from './router'
import responseFormatter from './middleware/responseFormatter'
import Router from 'koa-router'

const secret = '12345678';

const app = new Koa()

app.use(bodyParser())

app.use(koajwt({secret,
    // passthrough:true
}).unless({
    path:[
        /^\/login/,
        /^\/user/
    ]
}))

app.use(responseFormatter)

const loginRouter = new Router();

loginRouter.get('/login',async(ctx)=>{

    ctx.body = '登录'
})

loginRouter.post('/login',async(ctx)=>{
    console.log(ctx.request.body);
    const {username} = ctx.request.body;
    // debugger;
    if(username){
        const token = jwt.sign({
            name:username
        },secret,{
            expiresIn:'2h'
        })
        return ctx.body = {
            code:200,
            token,
            msg:'登录成功'
        }
    }
})

app.use(loginRouter.routes());
app.use(router.routes());
app.use(router.allowedMethods());

// router.forEach(item=>{
//   app.use(item.routes()).use(item.allowedMethods())  
// })




export default app
