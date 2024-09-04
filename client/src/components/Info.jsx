import React from 'react'
import orderLogo from '../assets/order-svgrepo-com.svg'
import deliverLogo from '../assets/delivery-fast-svgrepo-com.svg'
import paymentLogo from '../assets/payment-method-mobile-bank-svgrepo-com.svg' 
const Info = () => {
  return (
    <div className='info'>
        <div className='info__center'>
            <h2>How it Works</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            </p>
        </div>
        <div className='row'>
            <div className='col-1'>
            <img src={orderLogo} alt="" />
            <h2>Order Now</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <div className='col-2'>
                <img src={deliverLogo} alt="" />
                <h2>Get Delivery</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <div className='col-3'>
                <img src={paymentLogo} alt="" />
                <h2>Payment</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
        </div>
    </div>
  )
}

export default Info