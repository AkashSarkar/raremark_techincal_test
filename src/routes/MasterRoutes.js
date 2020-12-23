import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('../features/home/Home'));
// const Login = lazy(() => import('../features/auth/Login'));
// const Register = lazy(() => import('../features/auth/Register'));
const PropertyList = lazy(() => import('../features/properties/PropertyList'));


const MasterRoutes = () => (
  <React.Suspense fallback={<span>Loading...</span>}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/properties' component={PropertyList} />
      {/* <PublicRoute path='/login' component={Login} /> */}
      {/* <PublicRoute path='/register' component={Register} /> */}
    </Switch>
  </React.Suspense>
);
export default MasterRoutes;
