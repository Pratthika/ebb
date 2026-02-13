import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route {...rest} render={({ location }) => (
      isLoggedIn ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
    )} />
  );
};

export default ProtectedRoute;
