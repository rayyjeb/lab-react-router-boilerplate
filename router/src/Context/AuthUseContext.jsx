import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PrivateAuthRout = ({ children }) => {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default PrivateAuthRout;
