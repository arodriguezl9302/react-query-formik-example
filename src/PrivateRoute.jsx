import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isTokenValid } from "./verifyToken";

function PrivateRoute() {
  console.log(isTokenValid());
  const isAuthenticated = isTokenValid();

  return !isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}

export default PrivateRoute;
