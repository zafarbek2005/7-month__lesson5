import React from 'react'
import './hero.scss'
import Phone__img from './img/phone.svg'

const Hero = () => {
  return (
   <>
   
   <div className="hero conteiner">
    <div className="hero__txt">
        <h4>Mobile</h4>
        <h3>Backcover </h3>
        <h3>Tempered Glass</h3>
        <button id='btn-1'>Shop all !</button>


    </div>

    <div className="hero__img">
        <img src= {Phone__img} alt="" />
    </div>


   </div>
   
   
   
   </>
  )
}

export default Hero