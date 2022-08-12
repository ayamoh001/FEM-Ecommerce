import React,{useState,useContext,useEffect} from 'react'
import Image from "next/image"
import Data from "../contexts/productContext"
import classes from "../styles/slider.module.css"

export const Images = () => {

  var test = useContext(Data)
  var [data,setData] = useState("")
  useEffect(() => {
    // test.data.then(res=>{setData(res)})
    setData(test.data)
  });

  const [landScape,setLandScape] = useState(false)

  var [counter,setCounter] = useState(0);
  const counterHandler=(obj)=>{
    if(obj==="+"){
      if(counter+1>=data["images"].length){
        setCounter(0)
      }else{
        setCounter((prev)=>prev+1)
      }
    }else if(obj==="-"){
      if(counter-1<0){
        setCounter(data["images"].length-1)
      }else{
        setCounter((prev)=>prev-1)
      }
    }else{
      setCounter(obj)
    }
  }
  return (
    <figure className={classes.figure}>
        
        <div className={classes.slider}>
            {data && <Image onClick={()=>setLandScape(true)} className={classes.sliderImg} src={data["images"][counter]} layout="fill" priority alt="..."/>}
            <button className={classes.nextBtn} onClick={()=>counterHandler("+")}>
              <img src="/images/icon-next.svg" alt="next" />
            </button>
            <button className={classes.prevBtn} onClick={()=>counterHandler("-")}>
              <img src="/images/icon-previous.svg" alt="prev" />
            </button>
        </div>
        <div className={classes.indicators}>
            {data["images"]?.map((obj,i)=>{
                return  <button className={[classes.indicatorBtn, counter==i && classes.active].join(" ")}  onClick={()=>counterHandler(i)} key={i}>
                          <Image className={classes.indicatorImg} src={obj.slice(0,-4)+"-thumbnail.jpg"} width="100%" height="100%" alt="..."/>
                        </button>
            })}
        </div>
        <div className={landScape ? classes.landScape : classes.hide}>
            <div className={classes.container}>
                <img className={classes.closeBtn} onClick={()=>setLandScape(false)} src="/images/icon-close.svg" alt="..." />
                <div className={classes.slider}>
                  {data && <Image className={classes.sliderImg} src={data["images"][counter]} layout="fill"/>}
                  <button className={classes.nextBtn} onClick={()=>counterHandler("+")}>
                    <img src="/images/icon-next.svg" alt="next" />
                  </button>
                  <button className={classes.prevBtn} onClick={()=>counterHandler("-")}>
                    <img src="/images/icon-previous.svg" alt="prev" />
                  </button>
                </div>
                <div className={classes.indicators}>
                    {data["images"]?.map((obj,i)=>{
                        return  <button className={[classes.indicatorBtn, counter==i && classes.active].join(" ")}  onClick={()=>counterHandler(i)} key={i}>
                                  <Image className={classes.indicatorImg} src={obj.slice(0,-4)+"-thumbnail.jpg"} width="100%" height="100%" />
                                </button>
                    })}
                </div>
            </div>
        </div>
        
    </figure>
  )
}
