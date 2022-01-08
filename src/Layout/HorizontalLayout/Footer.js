import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blueColor text-white py-3">
      <div className="container flexCenterBetween">
        <div className="text-sm font-light">&copy; 2021 MAAC</div>
        <div className="flexCenterBetween space-x-3">
          <i className="fa fa-facebook-squire"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
