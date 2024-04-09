import React, { useContext, useState } from 'react'
import contextData from "@/contexts/productContext"
import classes from "@/styles/content.module.css"
import { caculateDiscount } from '@/helpers/calculatePrice'
import { Product } from '@/lib/types'
import { FaPlus, FaMinus } from "react-icons/fa"
import { BsCart3 } from "react-icons/bs"

export const Content = () => {
  const ctx = useContext(contextData)
  const product: Product = ctx.products[0]
  const [num, setNum] = useState(0)

  const numHandler = (parameter: string | number) => {
    if (typeof parameter === "number") {
      setNum(parameter)
      return
    }
    switch (parameter) {
      case "+":
        num + 1 >= product["images"].length ? setNum(0) : setNum((prev: number) => prev + 1)
        break;
      case "-":
        (num - 1 < 0) ? setNum(product["images"].length - 1) : setNum((prev: number) => prev - 1)
        break;
    }
  }

  const addToCart = (n: number) => {
    ctx.setQuantity(n)
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
            <p className={classes.price}><span>{product["price_unit"]}</span>{caculateDiscount(product["price"], product["discount"], num)}</p>
            <p className={classes.discount}>{product["discount"]}<span>{product["discount_unit"]}</span></p>
          </div>
          <div className={classes.originalPrice}><span>{product["price_unit"]}</span>{product["price"] * (num ? num : 1)}</div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.quantity}>
            <button className={classes.inc} onClick={() => numHandler("+")}>
              <FaPlus />
            </button>
            <div className={classes.count}>{num.toString()}</div>
            <button className={classes.dec} onClick={() => numHandler("-")}>
              <FaMinus />
            </button>
          </div>
          <button className={classes.addBtn} onClick={() => addToCart(num ? num : 1)}>
            <BsCart3 />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}