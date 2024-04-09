import React from 'react'
import context from "@/contexts/productContext"
import { Header } from "@/components/Header"



const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <context.Provider value={ }>
      <Header />
      <>{children}</>
    </context.Provider>
  )
}

export default Layout