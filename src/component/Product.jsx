import React, { useEffect } from "react";
import loadProduct, { addToCart ,increment } from "../service/Action";
import addItem from "../service/Action"; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Product = () => {
    useEffect(() => {
  onclickhandler ("electronics");

    }, []);
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const dispatch = useDispatch();
  const {cart , Products} = useSelector((state) => state);

  const onclickhandler = async (category) => {
    // console.log(category);
    const data = await loadApi(category);
    dispatch(loadProduct(data));
  };
 
  const loadApi = async (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const resp = await fetch(url);
    const data = resp.json();
    // console.log(data);
    return data;
  };
  const onclickhandlerAdditem=(item,e)=>{
    
    item = {...item,quantity:1}
    

        if(cart.map((cartItem)=>{return cartItem.id}).includes(item.id)){
            dispatch(increment(item.id))
        }
        else{
            dispatch(addToCart(item))
        }




        // e.target.innerText="Added"
        // e.target.disabled=true
       
        
    
    
  }
  
  return (
    <>
      <div className="container">
        <div className="container btn-group my-5 ">
          {categories.map((category) => {
            return (
              <button
                className="btn btn-secondary mx-3"
                onClick={() => {
                  onclickhandler(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="row">
            {Products.map((item) => {
                return (
                    <div className="col-4 my-2">
                        <div className="card text-center">
                            <img src={item.image} className="card-img-top  m-auto my-2" style={{height:"200px",width:"200px"}} alt="..." />
                            <div className="card-body">     
                                <h5 className="card-title">{item.title}</h5>
                                {/* <p className="card-text" style={{height:"200px"}}>{item.description}</p>  */}
                                <p className="card-text">${item.price}</p>
                                <p className="card-text">{item.category}</p>
                                <button className="btn btn-primary" onClick={(e)=>{
                                    onclickhandlerAdditem(item,e)
                                }}>Add to cart</button>
                                </div>
                                </div>
                                </div>
                                );
            })}
            </div>
      </div>
    </>
  );
};

export default Product;
