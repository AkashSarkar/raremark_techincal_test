import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PublicRoute = ({ path, component: Component }) => {
  const isAuthorized = useSelector(state => state.auth.isAuthed)
  return (
    <Route path={path} render={() => {
      return (
        isAuthorized
          ? <Redirect to='/' />
          : <Component />
      )
    }} />
  )
}
export default PublicRoute;
