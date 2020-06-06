import {
    ADD_GOODS
} from './mutioans-type'

export default {
    [ADD_GOODS](state,{goodsId,goodsName,smallImage,goodsPrice}){
      let shopCart=state.shopCart

      if(shopCart[goodsId]){
          shopCart[goodsId]['num']++
      }else{
          shopCart[goodsId]={
              'num':1,
              'id':goodsId,
              'name':goodsName,
              'small_image':smallImage,
              'price':goodsPrice
          }
      }
      state.shopCart={...shopCart}
    }
}