import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { EmailVerification } from "../EmailVerification/EmailVerification";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  // Conditional return
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return <EmailVerification />;
  }
  return children;
};

export default RequireAuth;
