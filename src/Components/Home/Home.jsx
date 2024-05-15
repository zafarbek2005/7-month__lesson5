import React from 'react'
import './Home.scss'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'
import { useGetProductsQuery } from '../../context/Product'

const Home = () => {
  let {data,isLoading,isError} = useGetProductsQuery()
  
  return (
   <>
 
    {isLoading ? <div className="loader"></div> :<></>}
  



      <Hero/>
      <Product data={data?.products}/>


  
   
   </>
  )
}

export default Home