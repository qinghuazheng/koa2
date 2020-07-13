import Router from 'koa-router'
import user from './user'
import goods from './goods'

// export default [user,goods]

const routes = [user,goods]

const router = new Router;
// 在router中use子路由
for(let route of routes){
    router.use(route.routes());
}

export default router;