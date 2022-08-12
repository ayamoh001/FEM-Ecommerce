import {Images} from "../components/Images.jsx"
import {Content} from "../components/Content.jsx"
import Head from "next/head"


const Product = () => {
  
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>
      <main className="container main">
        <Images />
        <Content />
      </main>
    </>
  )
}

export default Product
