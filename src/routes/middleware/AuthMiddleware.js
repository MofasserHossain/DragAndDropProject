import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthMiddleware = ({
  component: Component,
  Layout,
  isAuthProtected,
  protected: protect,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthProtected) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
      return (
        <Layout protected={protect}>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

export default AuthMiddleware
