import mongoose from '../dbHelper'
const Schema = mongoose.Schema;
// 定义一个schema 每个schema都会映射一张数据表，并定义表中的字段构成
const GoodsSchema = new Schema({
    name:String,
    descripition:String,
    price:Number
},{collection:'Goods'});
// 创建一个模型model，将schema转换成一个model
export default mongoose.model('Goods',GoodsSchema);
