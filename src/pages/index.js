import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">About</span>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
