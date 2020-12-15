export default {
    addToCar(context,payload){

        return new Promise((resolve,reject)=>{
          // 方法2.
          let oldproduct=context.state.carList.find(item=>{
            return item.id===payload.id
            // 如果条件成立，则将item加到oldproduct中
          })
          if(oldproduct){//已有商品，数量加一
            context.commit('recompose',oldproduct)
            resolve('加入购物车成功')
          }else{
            context.commit('addition',payload)
            resolve('加入购物车成功')
          }
          })
    }
}