import React from 'react'

const Button = ({ className, onClick, children }) => {
  return (
    <React.Fragment>
      <button className={`${className}`} onClick={onClick}>
        {children}
      </button>
    </React.Fragment>
  )
}

export default Button
