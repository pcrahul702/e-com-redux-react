export default function loadProduct(value){
    return{
        type:"LOAD_PRODUCT",
        value
    }
}

export  function addToCart(value){
    return {
        type: "ADD_ITEM",
        value:value
    }
}

export function increment(value)  {
    return {
        type: "INCREMENT",
        value:value
    }
}
export function decrement(value)  {
    return {
        type: "DECREMENT",
        value:value
    }
}
