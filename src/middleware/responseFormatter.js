/**
 * 响应结果格式化
 * 在app.use(router)之前调用
 */

let responseHandler = {
    handleSuccess(data,ctx){
        ctx.body = {
            code:0,
            data
        }
    },
    handleError(err,ctx){
        let msg = '服务器错误';
        if(typeof err === 'string'){
            msg = err
        }else if(err && err.message){
            msg = err.message
        }
        ctx.body = {
            code: 500,
            msg
        }
    }
}


const responseFormatter = async (ctx, next) => {
    /**
     * 调用下一个中间件，等待执行完成后，执行后面的代码
     * 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。
     * 当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。
     */
    try{
        const data = await next();
        responseHandler.handleSuccess(data,ctx);
    }catch(error){
        if(error.status === 401){
            ctx.status = 401;
            ctx.body = {
                code:-1,
                message:error.message
            }
        }else{
            responseHandler.handleError(error,ctx);
        }
       
    }

}

export default responseFormatter
