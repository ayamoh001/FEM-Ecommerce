import Head from "next/head"
import { Slider } from "@/components/Slider"
import { Content } from "@/components/Content"

const Product = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>
      <main className="container main">
        <Slider />
        <Content />
      </main>
    </>
  )
}

export default Product
