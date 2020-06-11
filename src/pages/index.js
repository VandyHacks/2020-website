import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => (
  <div id="main">
    <Layout id='root'>
      <SEO title="Home" />
    </Layout>
  </div>
)

export default IndexPage
