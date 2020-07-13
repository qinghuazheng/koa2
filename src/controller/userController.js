import { User } from './../model'

class UserController {
    static async getAllUser(ctx) {
        const res = await User.find({});
        return res
    }
    static saveUser(ctx) {
        let {username, age} = ctx.request.body;
        return User.create({name:username,age:age});
    }
    static deleteUser(ctx) {
        console.log(ctx.request.body);
        let {_id} = ctx.request.body;
        return User.deleteOne({_id:_id},(error)=>{
            if (error) {
                console.error(error);
            } else {
                console.error("用户删除成功")
            }
        });
    }
    static async getUserById(ctx) {
        // post body传参方式
        // const id = ctx.request.body.id
        // const res = await User.findById(id)

        // get 获取url问号后的参数，例：XXXX?id=123  通过ctx.request.query(或者ctx.query)得到{id: '123'}
        const id = ctx.query.id
        const res = await User.findById(id)
        return res
    }
}

export default UserController
