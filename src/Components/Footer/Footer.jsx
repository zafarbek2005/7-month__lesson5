import { FaTiktok } from "react-icons/fa"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { BsWhatsapp } from "react-icons/bs"; 
import React from 'react'
import './Footer.scss'
import logo from './img/logo.svg'

const Footer = () => {

  return (
    <>
    <footer>
    <div className="footer__section conteiner">

        <div className="footer__logo">
            <img src= {logo} alt="" />
            <p>Lorem ipsum dolor sit amet,  <br />consectetur adipiscing elit,<br /> sed do eiusmod tempor <br /> incididunt ut labore et <br /> dolore magna aliqua.</p>
        </div>

        <div className="items">
            <h3>Contact us</h3>  <br />
            <p>
E: info@example.com  <br />P: +94 7670000000  <br />A: 123 Hospital rd, <br />Kalubowila, Dehiwela</p>
    
    
            </div>

        <div className="items">
            <h3>Useful links</h3> <br />

            <p>Shop All  <br />
Tempered Glass <br />
Back-coverbr <br />
About Us</p>
    
            </div>


    <div className="social__media">
        <p> <BsWhatsapp style={{fontSize:"24px"}} />   Whatsapp</p><br />
        <p> <BsFacebook style={{fontSize:"24px"}} />   Facebook</p> <br />
        <p> <AiOutlineInstagram  style={{fontSize:"24px"}}/>  Instargram</p> <br />
        <p> <FaTiktok  style={{fontSize:"24px"}}/> Tik Tok</p>
    </div>

    </div>




    </footer>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Footer