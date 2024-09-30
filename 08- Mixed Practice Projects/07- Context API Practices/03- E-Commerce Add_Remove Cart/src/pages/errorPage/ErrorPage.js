import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/sign-in");
    }, 3000);
  }, []);

  return (
    <div className="error-page main-page">
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
    </div>
  );
}
