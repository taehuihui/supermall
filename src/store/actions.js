export default {
    addToCar(context,payload){
        // state.carList.push(payload)
        // 这里需要判断，数组中是否已有此商品
        
        // 方法1.
        // let oldproduct=null
        // for (const item of context.state.carList) {
        //     if(item.id===payload.id){
        //       oldproduct=item
        //     }
        // }

        return new Promise((resolve,reject)=>{
          // 方法2.
          let oldproduct=context.state.carList.find(item=>{
            return item.id===payload.id
            // 如果条件成立，则将item加到oldproduct中
          })
          if(oldproduct){
          //   getters.recompose(oldproduct)❌
          // oldproduct.count+=1❌，因为仍然无法跟踪
            context.commit('recompose',oldproduct)
            resolve('加入购物车成功')
          }else{
          //   getters.addition(payload)❌
            context.commit('addition',payload)
            resolve('加入购物车成功')
          }
          })
        
        // let index = context.state.carList.indexOf(payload)//indexOf不行吧❌
        // if(index!==-1){
        //     // 说明已存在
        //     context.state.carList[index].count+=1
        // }else{
        //     payload.count=1
        //     context.state.carList.push(payload)
        // }
      }
}