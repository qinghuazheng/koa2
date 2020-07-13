
// 引入数据库中的集合
import {Goods} from '../model'

class GoodsController {
    static async getAllGoods(ctx){
        const res = await Goods.find({});
        console.log(res);
        return res
    }
    static async createOneGoods(){
        throw new Error('cssgae')
        // const goods = new Goods;
        // goods.name='mac book';
        // goods.descripition = 'mac 笔记本开发必备';
        // goods.price = 12000;
        // goods.save();
    }
}
export default GoodsController