import Router from 'koa-router'
import GoodsController from '../controller/goodsController'

const router = new Router()

router.prefix('/goods')

router.get('/', function (ctx, next) {
    const content = '我心永恒';
    return content;
})
router.get('/getGoods',GoodsController.getAllGoods)
router.get('/save',GoodsController.createOneGoods)

export default router