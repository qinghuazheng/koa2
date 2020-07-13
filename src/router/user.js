import Router from 'koa-router'
import UserController from './../controller/userController'

const router = new Router()

router.prefix('/user')

router
    .get('/', function (ctx, next) {
       return 'Hello World!';
      })
    .get('/getUser', UserController.getAllUser)
    .get('/getUserById', UserController.getUserById)
    .post('/saveUser',UserController.saveUser)
    .delete('/deleteUser',UserController.deleteUser)
export default router