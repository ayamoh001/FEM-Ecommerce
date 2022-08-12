import React,{useContext,useState,useEffect} from 'react'
import Link from "next/link"
import Data from "../contexts/productContext"
import classes from "../styles/header.module.css"
import { caculateDiscount } from '../helpers/calculatePrice'



const Item = ({product,amount,setAmount}) =>{
	return (
		<div className={classes.cartItem}>
				<img src={product["images"][0]} alt="..." className={classes.itemImg}/>
				<div className={classes.itemText}>
					<h4>{product["title"]}</h4>
					<p>
						{product["price_unit"]}{caculateDiscount(product["price"],product["discount"])} x {amount}
						<span> {product["price_unit"]}{caculateDiscount(product["price"],product["discount"])* amount}</span>
					</p>
				</div>
				<button onClick={()=>setAmount(0)} className={classes.deleteBtn}>
					<img src="/images/icon-delete.svg" alt="delete" />
				</button>
		</div>
	)
}

const Header = () => {
	var test = useContext(Data)
	
	const [product,setProduct]=useState({})
	useEffect(() => {
		setProduct(test.data)
	});

	const [isShow,setIsShow] = useState(false)
	const toggleCart = (vl)=>{
		vl ? setIsShow(false) : setIsShow(true) 
	}

	const [menu,setMenu] = useState(false)
	const toggleMenu = (vl)=>{
		vl ? setMenu(false) : setMenu(true) 
	}

  return (
    <header>
			<div className={classes.container }>
				<div className={classes.header}>
					<button className={classes.bars} onClick={()=>toggleMenu(menu)}>
						<img src="/images/icon-menu.svg" alt="menu" />
					</button>
					<div className={classes.logoDiv}>
						<img className={classes.logo} src="/images/logo.svg" alt="logo" />
					</div>
					<nav className={[classes.nav ,menu ? "": classes.hide].join(" ")}>
						<button onClick={()=>setMenu(false)}>
							<img src="/images/icon-close.svg" alt="close" />
						</button>
						<ul>
							<li>
								<Link href="/"><a>Collections</a></Link>
							</li>
							<li>
								<Link href="/men"><a>Men</a></Link>
							</li>
							<li>
								<Link href="/women"><a>Women</a></Link>
							</li>
							<li>
								<Link href="/about"><a>About</a></Link>
							</li>
							<li>
								<Link href="/contact"><a>Contact</a></Link>
							</li>
						</ul>
					</nav>
					<button className={classes.cartBtn} onClick={()=>toggleCart(isShow)}>
						<div>
							<img src="/images/icon-cart.svg" alt="..." />
							<div className={test.amount ? classes.cartDot : classes.hide }>{test.amount ? test.amount : ""}</div>
						</div>
					</button>
					<div className={classes.profile}>
						<img className={classes.profileImg} src="/images/image-profile.png" alt="Profile Picture" />
					</div>
					
					<div className={isShow ? classes.cart : classes.hide}>
						<h4 className={classes.cartTitle}>Cart </h4>
						<div className={classes.cartBody}>
						{test.amount ? <Item product={product} amount={test.amount} setAmount={test.setAmount}/> : "Your Cart is empty"}
						{test.amount ? <button className={classes.chekoutBtn}>Checkout</button> : ''}
						</div>
					</div>
				</div>
			</div>
    </header>
  )
}

export default Header;