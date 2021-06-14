import React from 'react';
import PropTypes from 'prop-types';

import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    console.log(rest.location.pathname)
    //esto se va a grabar cada vez que cambie el path
    localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route {...rest}
      component={ (props) => (
        (isAuthenticated)
        ? (<Component {...props}/>)
        : (<Redirect to="/login"/>)
     
      )}
    />
      
  )
}
 
PrivateRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}

export default PrivateRoute
