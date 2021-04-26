import * as React from "react";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="PageNotFound__container">
      <Logo />
      <div className="PageNotFound__error">404 error</div>
      <Footer />
    </div>
  );
}
