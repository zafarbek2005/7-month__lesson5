import { CiDeliveryTruck } from "react-icons/ci"; 
import React from 'react'
import './homeb.scss'
import bgimg from './img/bdimg.svg'
import blue__cart from './img/blue.svg'
import fura from './img/fura.svg'
import fura1 from './img/fura1.svg'
import fura2 from './img/fura2.svg'

const Home__bottom = () => {
  return (
   <>
   <div className="home__bottom  conteiner">
    <div className="txt__bottom">
                    <div className="line"></div>
                    <h4>about us</h4>
                    <h3>If you’re looking for a Premium Quality <br />
            Tempered Glass or Back-cover for <br />
            your Device </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <img className="down" src={bgimg} alt="img" />
    </div>
   </div>

    <div className="relative__cart conteiner">

            <div className="absolute_cart">
                    <h3>Shop Premium  <br />
            Tempered Glass in wholesale <br /> Price !</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  <br /> <br /> <br /> <br />

            LKR : 299
            </p>

            <button>Shop Tempered Glass </button>
                    

                </div>

    <div className="blue_cart">
        <img src= {blue__cart} alt="" />
    </div>
    
    </div>

<div className="delivery__cart">
    
    <div className="cart">
       <img src= {fura} alt="" />
       <h3>Fast Delivery</h3>
       <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
    </div>

    <div className="cart">
       <img src= {fura1} alt="" />
       <h3>Cheap Price</h3>
       <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
    </div>

    <div className="cart">
       <img src= {fura2} alt="" />
       <h3>Premium Quality</h3>
       <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
    </div>

</div>








   
   
   </>
  )
}

export default Home__bottom