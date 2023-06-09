import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingtoRedirect = () => {
  const [count, setCount] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className="">
      <p>Redirecting you in {count} seconds</p>
    </div>
  );
};

export default LoadingtoRedirect;
