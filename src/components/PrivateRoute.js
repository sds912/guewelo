import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLoaded, isEmpty, fixPath } from "react-redux-firebase";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Navigate
            to='/'
            replace={true}
          />
        )
      }
    />
  );
};
export default PrivateRoute;