import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import stripeLogo from '../../assets/stripe_logo.png'
import razorLogo from '../../assets/razorpay_logo.png'
import { useSelector } from 'react-redux'
import axios from 'axios'
const PlaceOrder = () => {
  const {loading,foods,error} = useSelector(state => state.foodItems)
  const {cartItems,token,url} = useContext(StoreContext)
  const [method , setMethod] = useState('')
  const [data,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    city:"",
    street:"",
    country:"",
    zipcode:"",
    state:""
  })
const navigate = useNavigate()

  const handleOnChange = (e) =>{
    let {name,value} =  e.target.value;
    setData(prev=>({...prev,[name]:value}))
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


useEffect(()=>{
  if(!token){
    navigate('/cart')
  }else if(totalCartAmount() === 0){
      navigate('/cart')
  }
},[token])



  return (
    <div className='placeorder'>
        <div className='placeorder__container'>
                <h2>Delivery Details</h2>
                <form className='delivery__form'>
                    <div className='input__fields'>
                            <input type="text" name='firstname' onChange={handleOnChange} value={data.firstname} placeholder='First name' />
                            <input type="text" name='lastname' onChange={handleOnChange} value={data.lastname} placeholder='Last name' />
                    </div>
                    <div className='input__fields'>
                        <input type="email" name='email' onChange={handleOnChange} value={data.email} placeholder='Email Address'  />
                        <input type="text" name='phone' onChange={handleOnChange} value={data.phone} placeholder='Phone number' />
                    </div>
                    <div className='input__fields'>
                            <input type="text" name='street' onChange={handleOnChange} value={data.street} placeholder='Street' className='street'/>
                    </div>
                    <div className='input__fields'>
                            <input type="text" name='city' onChange={handleOnChange} value={data.city} placeholder='City' />
                            <input type="text" name='state' onChange={handleOnChange} value={data.state} placeholder='State' />
                    </div>
                    <div className="input__fields">
                        <input type="text" name='country' onChange={handleOnChange} value={data.country} placeholder='Country' />
                        <input type="text" name='zipcode' onChange={handleOnChange} value={data.zipcode} placeholder='zipcode' />
                    </div>
                    <button className='placeOrder__btn type1' type='submit'></button>
                </form>
        </div>

        <div className='payment__details'>
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
          </div>

          <div className="payment__method">
              <h2 >Payment Method</h2>
              <div className='payment__content'>
                  <div onClick={()=>setMethod('stripe')} className='payment__inner'>
                      <p className={`pay_p ${method === 'stripe' ? 'bg__color':""}` }></p>
                      <img className='payment__logos' src={stripeLogo} alt="" />
                  </div>
                  <div onClick={()=>setMethod('razor')} className='payment__inner'>
                      <p className={`pay_p ${method === 'razor' ? 'bg__color':""}`} ></p>
                      <img className='payment__logos' src={razorLogo} alt="" />
                  </div>
                  <div onClick={()=>setMethod('cash')} className='payment__inner'>
                      <p className={`pay_p ${method === 'cash' ? 'bg__color':""}`}></p>
                      <p className='cash__on'>CASH ON DELIVERY</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder
