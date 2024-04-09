import '@/styles/globals.css'
import Layout from "@/components/Layout"
import React from 'react'


function App({
  Component,
  pageProps
}: {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>

}

export default App
