import React from "react"
import { Helmet } from 'react-helmet'
import ScrollLock from 'react-scrolllock'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as styles from './index.module.css'

const IndexPage = () => (
  <div id={styles.main}>
    {/* <Helmet>
      <meta name='viewport' content='width=1024' />
    </Helmet> */}
    {/* <ScrollLock active='true' /> */}
    <SEO title="Home" />
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <Layout id='root' />
  </div>
)

export default IndexPage
