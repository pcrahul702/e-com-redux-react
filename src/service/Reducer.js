export const initialState = {
    cart: [],
    Products: [],
}

export default function Reducer (store=initialState, action) {
    
    switch(action.type){
        case "ADD_ITEM":
            
            return{
                ...store,
                cart:[...store.cart,action.value]
                

            }
            case "DEL_TO_CART":
                return{
                    ...store,
                    cart:[...store.cart,action.value]
                }
                case "LOAD_PRODUCT":
                    return{
                        ...store,
                        Products:action.value
                    }
                    case "INCREMENT":
                           store.cart.forEach((item)=>{
                            if(item.id==action.value){
                                item.quantity+=1
                                console.log(store.cart)
                            }
                        })
                    //  case "DECREMENT":
                    //        store.cart.forEach((item)=>{
                    //         if(item.id==action.value){
                    //             item.quantity-=1
                    //             // console.log(store.cart)
                    //         }
                    //         // if(item.quantity==0){
                    //         //     store.cart=store.cart.filter((item)=>{return item.id!=action.value})
                    //         // }
                    //     })
                                    
        default:
            return store;
    }
    
  
}

