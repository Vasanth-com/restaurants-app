import React from "react";
import bg from '../../assets/burger.png'
import { FaRegPlayCircle } from "react-icons/fa";
import Info from "../Info";
import Dishes from "../Dishes";
import About from "../about/About";
import Appdownload from "../appdownload/Appdownload";
const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__right">
          <button className="btn_1">Food Delivery</button>
          <p className="home__right-content">
            Discover Your Favourite Food and <span>Test Forever</span>
          </p>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Loren ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="btns">
            <button className="btn">Get Started</button>
            <p className='home__right-btn'><span className="icon"><FaRegPlayCircle className='play__icon'/></span> 
            <span>More Information</span></p>
            
          </div>
        </div>
        <img className="img__back" src={bg} alt="" />
      </div>
      <div className="information">
      <Info/>
      </div>
     <div className="foods">
     <Dishes/>
     </div>
      <div className="about__page">
      <About/>
      </div>
     <div className="app__info">
     <Appdownload/>
     </div>
    </div>
  );
};

export default Home;
