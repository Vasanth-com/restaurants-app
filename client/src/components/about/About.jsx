import React from 'react'

function About() {
  return (
    <div className='about' id='about'>
        <img className='about__img' src="https://img.freepik.com/premium-vector/take-away-semi-flat-illustrations-other-styles_1238412-46.jpg?w=740" alt="" />
        <div className='about__container'>
            <button className='btn_1'>Our Target</button>
            <p className='about__content'>We Earn Your Trust and are Diligent in Your Case</p>
            <p className='about__desc'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting. </p>
            <p className='about__desc'>
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            <button className='order-btn'>Order Now</button>
        </div>      
    </div>
  )
}

export default About
