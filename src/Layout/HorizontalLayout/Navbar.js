import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../../assets/images/SR Logo Black.png'
import { ReactComponent as ShoppingIcon } from '../../assets/images/svg/shopping-cart.svg'
import Button from '../../components/common/Button'
const homeNavItems = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Resources',
    path: '/resources',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
]
const stateMentPage = [
  {
    name: 'Overview',
    path: '/Overview',
  },
  {
    name: 'Case Summary',
    path: '/Overview',
  },
  {
    name: 'Recruitment',
    path: '/Overview',
  },
  {
    name: 'Budgeting',
    path: '/Overview',
  },
  {
    name: 'Revenue',
    path: '/Overview',
  },
  {
    name: 'Financial Statements',
    path: '/financial-statement',
  },
]
const Navbar = ({ location, protect }) => {
  const navStyleHelper = path => {
    const location1 = location.pathname
    const [, name] = location1.split('/')
    if (location1 === path || `/${name}` === path) {
      return 'text-yellow-400 border-b-4 border-yellow-400'
    }
    return 'text-navItem'
  }
  // console.log(`Navbar ~ navStyleHelper`, navStyleHelper('/'))
  return (
    <React.Fragment>
      <div className="shadow-sm">
        <div className="container flex justify-between items-center">
          <div className="">
            <Link to="/home">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-12 h-24 transition-all duration-100">
            {!protect ? (
              <React.Fragment>
                {homeNavItems.map((data, idx) => (
                  <div
                    className={`navItems ${navStyleHelper(
                      data.path
                    )} flexCenter h-full`}
                    key={idx}
                  >
                    <Link to={data.path} className="navLinks">
                      <span className="text-sm">{data.name}</span>
                    </Link>
                  </div>
                ))}
                <div className="flexCenter space-x-2">
                  <div>
                    <ShoppingIcon />
                  </div>
                  <Button className={'btnFil'} onClick={() => {}}>
                    Log in
                  </Button>
                  <Button className={'btnOutline'} onClick={() => {}}>
                    Registration
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              stateMentPage.map((data, idx) => (
                <div
                  className={`navItems ${navStyleHelper(
                    data.path
                  )} flexCenter h-full`}
                  key={idx}
                >
                  <Link to={data.path} className="navLinks">
                    <span className="text-sm">{data.name}</span>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Navbar)
