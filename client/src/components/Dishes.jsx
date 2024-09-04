import React, { useContext, useEffect, useState } from 'react'
import { foodData } from '../assets/data';

import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { fetchFoods } from '../redux/actions/foodactions';
import { StoreContext } from '../context/StoreContext';


const Dishes = () => {
    const [pageSelected,setSelectedNavbar] = useState(1);

    const dispatch = useDispatch()
    const {loading,foods,error} = useSelector(state => state.foodItems)
    const {addToCart,cartItems,removeFromCart} = useContext(StoreContext);
   
   
    useEffect(()=>{
        dispatch(fetchFoods())
    },[dispatch])


  return (
    <div className='dishes' id='menu'>
        <div className="dishes__center">
                <h2>Our Delicious Dish</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
        </div>
      { loading ? "Loading": 
        <div className="container">
        {
            foods?.map((item,idx)=>(
                
                <div key={idx} className="dishes__card">
                <img src={item.image} alt="" />
                <div className='card__content'>
                    <h3 className='dish__title'>{item.title}</h3>
                    <p className='card__desc'>{item.description}</p>
                    {Array(Math.floor(item.rating)).fill().map((_,i)=>(<p style={{display:'inline-block'}}>🌟</p>))}
                    <div className="bottom__content">
                        <p>$ {item.price}</p>
                        <div className='icons'>
                                <span className='icon-1'  onClick={()=>addToCart(item._id)}><FaCartArrowDown/></span>
                                <span className='icon-2'><FaShareAlt/></span>
                        </div>
                    </div>
                </div>
        </div>
            ))
        }
        </div>}
        <div className="pagination">
        </div>
    </div>
  )
}

export default Dishes
