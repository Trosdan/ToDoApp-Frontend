import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const loged = localStorage.getItem('@user:Token');
  if (!loged && isPrivate) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  if (loged && !isPrivate) {
    return <Redirect to={{ pathname: '/home' }} />;
  }

  // if (firebase.auth().currentUser) {
  //   return <Redirect to="/home" />;
  // }
  // if (!firebase.auth().currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
