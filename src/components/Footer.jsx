import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  let date = new Date();
  let currentYear = date.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}
export default Footer;
