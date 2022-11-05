import React from 'react'
import { Navigate } from "react-router-dom";

function Layout({ children, user }) {
    if (!user) {
        return <Navigate to="/login" />;
      } else {
        return children;
      }
    };

export default Layout