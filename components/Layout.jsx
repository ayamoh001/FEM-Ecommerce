import React,{useState,useEffect} from 'react'
import Header from "./Header"
import Data from "../contexts/productContext"



const Layout =({children}) => {
  var data = {
    id:"1",
    title:"Fall Limited Edition Sneakers",
    company:"Sneaker Company",
    description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price:"250.00",
    price_unit:"$",
    discount:"50",
    discount_unit:"%",
    available:"10",
    images:[
      '/images/image-product-1.jpg',
      '/images/image-product-2.jpg',
      '/images/image-product-3.jpg',
      '/images/image-product-4.jpg'
    ]
  }
  var [amount,setAmount]=useState(0)
  return (
      <Data.Provider value={{data,amount,setAmount}}>
        <Header/>
        <>{children}</>
      </Data.Provider>
  )
}

export default Layout