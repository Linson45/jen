import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component,location, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
              <Component {...matchProps} />
            )}
        />
    );
};

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const getUser = JSON.parse(localStorage.getItem('currentUser'));
  let isLoggedIn = getUser && getUser.data ? getUser.data.token : null;
  let referrer = window.location.href;
  // referrer = referrer.replace( window.location.origin, '' );
  // if (isLoggedIn === null) {
  //   return <Redirect to={{
  //     pathname: "/",
  //     state: { referrer }
  //   }} />;
  // }
  
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Component {...matchProps} />
      )}
    />)
  // isLoggedIn ? 
  
  // ) : (
  //     <>loading...</>
  //   );
  
};

// Error Routes Layout

const ErrorRoute = (props) => {
  return (
    <Route
      {...props}
      render={matchProps => (
        <Component {...matchProps} />
      )}
    />
  );
};

export { 
    PublicRoute, 
    ErrorRoute, 
    PrivateRoute 
};
