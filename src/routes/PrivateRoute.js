import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, exact, component: Component }) => {
  const isAuthorized = useSelector(state => state.auth.isAuthed)
  return (
    <Route path={path} exact={exact} render={() => {
      return (
        isAuthorized
          ? <Component />
          : <Redirect to='/login' />
      )
    }} />
  )
}
export default PrivateRoute
