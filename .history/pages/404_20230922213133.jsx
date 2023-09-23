import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      history.push("/");
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [history]);

  return (
    <div className="wrapper">
      <h1 className="text-center">404</h1>
      <h2>Something is going wrong...</h2>
    </div>
  );
};

export default Error;
