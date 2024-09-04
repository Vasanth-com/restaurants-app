import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiXMark } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantityItem } from '../redux/actions/cartActions';
import { StoreContext } from '../context/StoreContext';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Cart() {
  const {addToCart,removeFromCart,cartItems} = useContext(StoreContext)
  const {loading,foods,error} = useSelector(state => state.foodItems)
  const handleUpdateQuantity = (e,itemId) =>{
    const quantity = parseInt(e.target.value,10);
    updateQuantityItem(quantity,itemId)
    // totalCartAmount()
  }
      const totalCartAmount = () =>{
        let totalAmount =0;
        for(let item in cartItems){
                if(cartItems[item] > 0){
                let itemInfo = foods.find((food)=>food._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }
    

  return (
    <div className='cart__page'>
      <div className="cart__items">
            <div className="cart__item-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />

           {
            foods.map((item,idx)=>{
              if(cartItems[item._id] > 0){
                return (
                  <div>
                  <div className="cart__item-title cart__item-item">
                      <img src={item.image} alt="" />
                      <p>{item.title}</p>
                      <p>${item.price}</p>
                      <p className='quantity'>
                      <span className='minus' onClick={()=>removeFromCart(item._id)}><FaMinus/></span>
                      <p>{cartItems[item._id]}</p>
                      <span className='plus' onClick={()=>addToCart(item._id)}><FaPlus/></span>
                      </p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p onClick={()=>removeFromCart(item._id)} className='cross'><HiXMark/></p>
                  </div>
              </div>
                )
              }
            })
           } 
           
      </div>

      <div className="cart__bottom">
          <div className="cart__total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart__totals-details">
                <p>Sub Total</p>
                <p>${totalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart__totals-details">
                <p>Shipping fee</p>
                <p>${totalCartAmount() === 0 ? 0:4}</p>
              </div>
              <hr />
              <div className="cart__totals-details">
                <p>Total</p>
                <p>$ {totalCartAmount() === 0 ? 0: totalCartAmount() + 4}</p>
              </div>
            </div>
            <Link to='/placeorder' className='checkout__btn'>Proceed to Checkout</Link>
            <Link className='links' to='/'><FaArrowLeft style={{marginRight:"10px"}}/>Back to Shop</Link>
          </div>
      </div>
    </div>
  )
}

export default Cart
