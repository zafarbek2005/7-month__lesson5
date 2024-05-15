import React from 'react';
import './Product.scss';


const Product = ({ data }) => {
  
  let products = data?.slice(0,8).map(e => (
    <div key={e.id} className="wrapper ">
      <div className="wrapper__card">
        <button> $ {e.price}</button>
        <img src={e.thumbnail} alt= "img" />
        <p>{e.title}</p>
      </div>
    </div>
  )); 


  return (
    <>
    <div className="up"> 
    <div className="wrapper conteiner">
    {products}
    </div>
   </div>
  
    </>
  );
};

export default Product;
