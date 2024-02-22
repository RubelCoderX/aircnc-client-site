import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import Loader from "../components/Shared/Loader/Loader";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
