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
    {/* <a id="mlh-trust-badge"
       style={{display:'block',maxWidth:'100px',minWidth:'60px',position:'fixed',right:'50px',top:'0',width:'10%',zIndex:'10000'}}
       href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'//"https://mlh.io/seasons/na-2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
       target="_blank">
         <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg"
              alt="Major League Hacking 2021 Hackathon Season"
              style={{width:'100%'}}/></a> */}
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <Layout id='root' />
  </div>
)

export default IndexPage
