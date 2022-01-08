import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './Layout/HorizontalLayout/index'
import AuthMiddleware from './routes/middleware/AuthMiddleware'
import { authProtectedRoutes } from './routes/routes'
import './Styles/App.scss'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authProtectedRoutes.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              Layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              protected={route.protected}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
