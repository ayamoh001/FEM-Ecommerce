import React, { useState, useContext, useEffect } from 'react'
import Image from "next/image"
import classes from "@/styles/slider.module.css"
import contextData from "@/contexts/productContext"
import { Product } from '@/lib/types'

export const Slider = () => {

  const ctx = useContext(contextData)

  const [data, setData] = useState<Product>()
  const [isLandScape, setIsLandScape] = useState(false)
  const [counter, setCounter] = useState<number>(0);

  const counterHandler = (parameter: string | number) => {
    if (typeof parameter === "number") {
      setCounter(parameter)
      return
    }
    switch (parameter) {
      case "+":
        counter + 1 >= data!["images"].length ? setCounter(0) : setCounter((prev: number) => prev + 1)
        break;
      case "-":
        (counter - 1 < 0) ? setCounter(data!["images"].length - 1) : setCounter((prev: number) => prev - 1)
        break;
    }
  }

  useEffect(() => {
    // ctx.data.then(res=>{setData(res)})
    setData(ctx.products[0])
  }, []);

  return (
    <figure>

      <div className={classes.slider}>
        {data && <Image onClick={() => setIsLandScape(true)} className={classes.sliderImg} src={data["images"][counter]} layout="fill" priority alt="..." />}
        <button className={classes.nextBtn} onClick={() => counterHandler("+")}>
          <Image src="/images/icon-next.svg" alt="next" />
        </button>
        <button className={classes.prevBtn} onClick={() => counterHandler("-")}>
          <Image src="/images/icon-previous.svg" alt="prev" />
        </button>
      </div>
      <div className={classes.indicators}>
        {data && data["images"]?.map((obj: string, i: number) => {
          return <button className={[classes.indicatorBtn, counter == i && classes.active].join(" ")} onClick={() => counterHandler(i)} key={i}>
            <Image className={classes.indicatorImg} src={obj.slice(0, -4) + "-thumbnail.jpg"} alt="Slider indicator" />
          </button>
        })}
      </div>
      <div className={isLandScape ? classes.landScape : classes.hide}>
        <div className={classes.container}>
          <Image className={classes.closeBtn} onClick={() => setIsLandScape(false)} src="/images/icon-close.svg" alt="..." />
          <div className={classes.slider}>
            {data && <Image className={classes.sliderImg} src={data["images"][counter]} layout="fill" alt="..." />}
            <button className={classes.nextBtn} onClick={() => counterHandler("+")}>
              <img src="/images/icon-next.svg" alt="next" />
            </button>
            <button className={classes.prevBtn} onClick={() => counterHandler("-")}>
              <img src="/images/icon-previous.svg" alt="prev" />
            </button>
          </div>
          <div className={classes.indicators}>
            {data && data["images"]?.map((obj: string, i: number) => {
              return <button className={[classes.indicatorBtn, counter == i && classes.active].join(" ")} onClick={() => counterHandler(i)} key={i}>
                <Image className={classes.indicatorImg} src={obj.slice(0, -4) + "-thumbnail.jpg"} alt="..." />
              </button>
            })}
          </div>
        </div>
      </div>

    </figure>
  )
}
