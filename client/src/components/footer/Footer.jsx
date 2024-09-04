import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
        <div className="footer__container">
            <article>
            <div className='footer__header'>
           
           <p> <span className='footer__icon'><MdEmail/></span>info@youremail.com</p>
           </div>
            <hr />
            <div>
            <p> <span className='footer__icon'><FaPhoneAlt/></span>+880 321 655 9985</p>     
            </div>
            </article>
            <section>
            <div className='colum-1'>
                <h2>Tammy <span style={{color:"yellow"}}>Food</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <ul>
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaYoutube/></li>
                </ul>
        </div>
        <div className='colum-2'>   
            <h2>Quick link</h2>
            <ul>
                <li>About us</li>
                <li>Menu</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className='colum-3'>
            <h2>News Letter</h2>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <div>
            <input type="email" placeholder='Your Email Address' />
            <span><IoSend/></span>
            </div>
        </div>
        <hr />

            </section>
        </div>
        <p className='copyright'>	&#169; Copyright 2024. Tammy <span style={{color:'yellow'}}>Food</span>. All Right Reserved.</p>
    </footer>

  )
}

export default Footer
