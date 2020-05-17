import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import Col from "./collapsible"
import ScheduleItem from "./scheduleItem"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={'VandyHacks'} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      {/* Just here to test*/}
      <Col trigger='FAQ question' content='FAQ answer'/>
      <ScheduleItem times='4pm-5pm' title='Event' description='Details about event'/>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
