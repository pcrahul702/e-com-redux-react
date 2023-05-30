import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../service/Action";
import { useState,useEffect } from "react";
const Cart = () => {
 useEffect(() => {
    
 }, [])
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  
 
//   const handleaddq=(item)=>{
   
//     dispatch(increment(item.id)) 
//   }
  return (
    <>
      <div className="container text-center my-5 bg-primary">
        <h1>Total Item :{cart.length}</h1>
      </div>
      <div className="container  bg-dark d-flex align-items-center flex-column  ">
        {cart.map((item) => {
          return (
            <div className="card  " style={{width:"600px",height:"100px"}}>
              <div className="card-body d-flex justify-content-around align-items-center">
              <img src={item.image} className="card-img-top" alt="..." style={{width:"100px",height:"80px"}} / >
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <div className="btn-group mx-1 ">
                    <button className="btn btn-primary " onClick={()=> 
                     dispatch(increment(item.id))}>+</button>
                    <button className="btn btn-secondary" style={{color:"white"}}>{item.quantity}</button>
                    <button className="btn btn-primary" onClick={()=>dispatch(decrement(item.id))}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
