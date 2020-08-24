import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as styles from './index.module.css'

const IndexPage = () => (
  <div id={styles.main}>
    <SEO title="Home" />
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <Layout id='root' />
  </div>
)

export default IndexPage
