import React, { useContext, useState, useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'
import contextData from "@/contexts/productContext"
import classes from "@/styles/header.module.css"
import { caculateDiscount } from '@/helpers/calculatePrice'
import { BsCart3 } from 'react-icons/bs';


const Item = ({ product, quantity, setQuantity }: { product: any, quantity: number, setQuantity: (a: number) => void }) => {
	return (
		<div className={classes.cartItem}>
			<Image src={product["images"][0]} alt={product["images"][0]} className={classes.itemImg} />
			<div className={classes.itemText}>
				<h4>{product["title"]}</h4>
				<p>
					{product["price_unit"]}{caculateDiscount(product["price"], product["discount"])} x {quantity}
					<span> {product["price_unit"]}{caculateDiscount(product["price"], product["discount"]) * quantity}</span>
				</p>
			</div>
			<button onClick={() => setQuantity(0)} className={classes.deleteBtn}>
				<Image src="/images/icon-delete.svg" alt="delete" />
			</button>
		</div>
	)
}

export const Header = () => {
	const ctx = useContext(contextData)

	const product = ctx.products[0]

	const [isOpen, setIsOpen] = useState(false)
	const [menu, setMenu] = useState(false)

	return (
		<header>
			<div className={classes.container}>
				<div className={classes.header}>
					<button className={classes.bars} onClick={() => setMenu(!menu)}>
						<Image src="/images/icon-menu.svg" alt="menu" />
					</button>
					<div className={classes.logoDiv}>
						<Image className={classes.logo} src="/images/logo.svg" alt="logo" />
					</div>
					<nav className={[classes.nav, menu ? "" : classes.hide].join(" ")}>
						<button onClick={() => setMenu(false)}>
							<Image src="/images/icon-close.svg" alt="close" />
						</button>
						<ul>
							<li>
								<Link href="/">Collections</Link>
							</li>
							<li>
								<Link href="/men">Men</Link>
							</li>
							<li>
								<Link href="/women">Women</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
					<button className={classes.cartBtn} onClick={() => setIsOpen(!isOpen)}>
						<div>
							<BsCart3 />
							<div className={ctx.quantity ? classes.cartDot : classes.hide}>{ctx.quantity ? ctx.quantity : ""}</div>
						</div>
					</button>
					<div className={classes.profile}>
						<Image className={classes.profileImg} src="/images/image-profile.png" alt="Profile Picture" />
					</div>

					<div className={isOpen ? classes.cart : classes.hide}>
						<h4 className={classes.cartTitle}>Cart </h4>
						<div className={classes.cartBody}>
							{ctx.quantity ? <Item product={product} quantity={ctx.quantity} setQuantity={ctx.setQuantity} /> : "Your Cart is empty"}
							{ctx.quantity ? <button className={classes.chekoutBtn}>Checkout</button> : ''}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
