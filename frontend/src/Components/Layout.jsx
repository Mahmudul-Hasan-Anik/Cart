import React, { useEffect } from "react";
import Header from './Header'


const Layout = ({ title = "title", className, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <Header/>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;