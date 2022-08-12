import React,{useContext,useState,useEffect} from 'react'
import Data from "../contexts/productContext"
import { caculateDiscount } from '../helpers/calculatePrice'
import classes from "../styles/content.module.css"



export const Content = () => {
  var test= useContext(Data)

  const [product,setProduct]=useState({})
  useEffect(() => {
    setProduct(test.data)
  });


  const [num,setNum] = useState(0)
  const numHandler=(obj)=>{
      if(obj==="+"){
          if(num+1 > product["available"]){
            setNum(num)
          }else{
            setNum((prev)=>prev+1)
          }
      }else if(obj==="-"){
        if(num-1 < 0){
            setNum(0)
          }else{
            setNum((prev)=>prev-1)
          }
      }
  }
  const addToCart=(n)=>{
    test.setAmount(n)
  }
  return (
    <div className={classes.content}>
      <div className={classes.text}>
          <h4 className={classes.company}>{product["company"]}</h4>
          <h1 className={classes.title}>{product["title"]}</h1>
          <p className={classes.description}>{product["description"]}</p>
      </div>
      <div className={classes.cta}>
          <div className={classes.prices}>
              <div className={classes.afterDiscount}>
                  <p className={classes.price}><span>{product["price_unit"]}</span>{caculateDiscount(product["price"],product["discount"],num)}</p>
                  <p className={classes.discount}>{product["discount"]}<span>{product["discount_unit"]}</span></p>
              </div>
              <div className={classes.originalPrice}><span>{product["price_unit"]}</span>{parseFloat(product["price"] * (num ? num : 1)).toFixed(2)}</div>
          </div>
          <div className={classes.buttons}>
              <div className={classes.amount}>
                  <button className={classes.inc} onClick={()=>numHandler("+")}>
                    <img src="/images/icon-plus.svg" alt="increase" />
                  </button>
                  <div className={classes.count}>{num.toString()}</div>
                  <button className={classes.dec}  onClick={()=>numHandler("-")}>
                  <img src="/images/icon-minus.svg" alt="decrease" />
                  </button>
              </div>
              <button className={classes.addBtn} onClick={()=>addToCart(num ? num : 1)}>
                  <img src="/images/icon-cart.svg" alt="add to cart" />  
                  <span>Add to cart</span>
              </button>
          </div>
          

      </div>
    </div>
  )
}