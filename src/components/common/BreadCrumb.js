import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const BreadCrumb = ({ history, text, title }) => {
  console.log(`BreadCrumb ~ history`, history)
  //   const classes = useStyles()
  return (
    <React.Fragment>
      <div className={'flex items-center font-light italic'}>
        <Link to={''} className="hover:text-gray-600">
          {title}
        </Link>
        <i className="bx bx-chevron-right text-xl mt-1 font-light"></i>
        <div>{text}</div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(BreadCrumb)
