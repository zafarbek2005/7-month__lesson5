import React from 'react'
import './Home.scss'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'
import { useGetProductsQuery } from '../../context/Product'
import Home__bottom from '../Home__bottom/Home__bottom'

const Home = () => {
  let {data,isLoading,isError} = useGetProductsQuery()
  console.log(isError);
  return (
   <>
 
   <div className=" conteiner">
      {isLoading ? <div className="loader"></div> : <></>}
   </div>
  


    
      <Hero/>
      <Product data={data?.products}/>
      <Home__bottom/>


  
   
   </>
  )
}

export default Home