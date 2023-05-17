import classes from "./Layout.module.css";
import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
