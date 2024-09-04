import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact_us_2">
    <div className="responsive-container-block big-container">
      <div className="blueBG">
      </div>
      <div className="responsive-container-block container">
        <form className="form-box">
          <div className="container-block form-wrapper">
            <p className="text-blk contactus-head">
              Get in Touch
            </p>
            <p className="text-blk contactus-subhead">
              If any query contact us
            </p>
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                <p className="text-blk input-title">
                  FIRST NAME
                </p>
                <input className="contact__input" id="ijowk" name="FirstName" placeholder="Please enter first name..."/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">
                  LAST NAME
                </p>
                <input className="contact__input" id="indfi" name="Last Name" placeholder="Please enter last name..."/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">
                  EMAIL
                </p>
                <input className="contact__input" id="ipmgh" name="Email" placeholder="Please enter email..."/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">
                  PHONE NUMBER
                </p>
                <input className="contact__input" id="imgis" name="PhoneNumber" placeholder="Please enter phone number..."/>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                <p className="text-blk input-title">
                  WHAT DO YOU HAVE IN MIND
                </p>
                <textarea className="textinput" id="i5vyy" placeholder="Please enter query..."></textarea>
              </div>
            </div>
            <button className="submit-btn">
              Submit
            </button>
          </div>
                    <div className='social__media-links'>
                        <a className='social__links-contact' href="#">
                            <FaTwitter/>
                        </a>
                        <a  className='social__links-contact'href="#">
                            <FaGoogle/>
                        </a>
                        <a className='social__links-contact' href="#">
                            <FaFacebook/>
                        </a>
                        <a className='social__links-contact' href="#">
                            <FaInstagram/>
                        </a>
                   </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ContactUs
