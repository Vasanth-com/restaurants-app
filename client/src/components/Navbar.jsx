import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {StoreContext} from '../context/StoreContext'
const Navbar = () => {
    const [selectedNavbar , setSelectedNavbar] = useState('home');
    const {currentUser,setToken} = useContext(StoreContext)

    const navigate = useNavigate()

    const logout = () =>{
      localStorage.removeItem('token-auth')
      setToken('')
      navigate('/')
    }
  return (
    <div className='navbar'>
        <Link to='/'> 
        <h2>Tammy <span>Food</span></h2></Link>
      <nav>
        <ul>
            <li onClick={()=>setSelectedNavbar("home")}  className={selectedNavbar ==="home" ? "selected":""}><a href="#">Home</a></li>
            <li onClick={()=>setSelectedNavbar("about")} className={selectedNavbar === 'about' ? "selected":""}><a href="#about">About Us</a></li>
            <li onClick={()=>setSelectedNavbar("menu")} className={selectedNavbar === 'menu' ? "selected":""}><a href="#menu">Menu</a></li>
            <li onClick={()=>setSelectedNavbar("contact")} className={selectedNavbar=== 'contact' ? "selected":""}><Link to="/contactus">Contact Us</Link></li>
            <li onClick={()=>setSelectedNavbar("cart")} className={selectedNavbar === "cart" ? "selected":""}><Link to='/cart'>Cart</Link></li>
          {currentUser?.id ?
           <div className='navbar-profile'>
            <li><Link to='/' className='user__name'>{currentUser.name.slice(0,1)}</Link></li>
              <div className='navbar-profile-dropdown'>
                <li onClick={logout}>Logout</li>
              </div>
           </div>:
           <li><Link to='/login'>Login</Link></li>
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
