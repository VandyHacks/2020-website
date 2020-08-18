import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as styles from './index.module.css'

const IndexPage = () => (
  <div id={styles.main}>
    <Layout id='root'>
      <SEO title="Home" />
    </Layout>
  </div>
)

export default IndexPage
