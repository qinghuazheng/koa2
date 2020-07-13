import mongoose from './../dbHelper'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number
}, { collection: 'User'})  // 需要加上collection指定表名，不然查出的数据是[]，mongoose的梗

export default mongoose.model('User', UserSchema)


