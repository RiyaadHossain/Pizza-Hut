import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';

const LogIn = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from);
  }
  return <div></div>;
};

export default LogIn;
