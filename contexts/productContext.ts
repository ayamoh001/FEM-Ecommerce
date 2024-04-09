import { createContext } from "react"

const contextData = createContext({
  products: [{
    id: 1,
    title: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.00,
    price_unit: "$",
    discount: 50,
    discount_unit: "%",
    available: 10,
    images: [
      '/images/image-product-1.jpg',
      '/images/image-product-2.jpg',
      '/images/image-product-3.jpg',
      '/images/image-product-4.jpg'
    ]
  }],
  amount: 0,
  setQuantity: "",
})

export default contextData