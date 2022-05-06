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
  const [sendEmailVerification, sending, errors] =
    useSendEmailVerification(auth);
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <EmailVerification />
      // <div>
      //   <h1 className="text-4xl text-red-500">Email is not verified</h1>
      //   <button
      //     className="bg-yellow-500 px-5"
      //     onClick={async () => {
      //       await sendEmailVerification();
      //     }}
      //   >
      //     Send verification email again
      //   </button>
      // </div>
    );
  }
  return children;
};

export default RequireAuth;
