import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
// Other Layout related Component
// const homeNav = [
//   {
//     name: '',
//   },
// ]

const Layout = ({ children, location, protected: protect }) => {
  console.log(`Layout ~ protect`, protect)
  const capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  useEffect(() => {
    let currentPage = capitalizeFirstLetter(location.pathname)
    document.title = `${currentPage + ' |'} MAAC Project`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Navbar protect={protect} />
        <div style={{ backgroundColor: protect ? '#e5e5e5' : '' }}>
          <div className="main-content min-vh-100 container">{children}</div>
        </div>
        {!protect ? <Footer /> : ''}
      </div>
    </React.Fragment>
  )
}

export default withRouter(Layout)
