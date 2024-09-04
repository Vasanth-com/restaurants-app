import React from 'react'
import appstore from '../../assets/app_store.png';
import playstore from '../../assets/play_store.png'

const Appdownload = () => {
  return (
    <div className='app__download'>
        <div className='app__download-container'>
            <p className='app-content'>To Get 15% Discount Download The App</p>
            <p className='app-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className='online__platforms'>
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
            </div>
        </div>
        <img className='app__img' src="https://img.freepik.com/free-vector/mobile-inbox-concept-illustration_114360-4408.jpg?t=st=1724421007~exp=1724424607~hmac=e0a79e1e92f12416026c3f10a9fddd1f947d2553a5283d64d4bf69ae4bdb84d0&w=740" alt="" />

    </div>
  )
}

export default Appdownload
