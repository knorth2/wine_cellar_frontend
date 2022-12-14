import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer-left">
        <Link to="/faq">
        <p id="faq">FAQ</p>
        </Link>
        <p>
          Site created by{" "}
          <a
            href="https://www.linkedin.com/in/kayci-north/"
            target="_blank"
            rel="noreferrer"
          >
            Kayci North
          </a>
        </p>
        <p>
          See what else I'm working on:{" "}
          <a href="https://github.com/knorth2" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
      <div className="footer-right">
        {props.user ? (
          <Link to="/">
            <button onClick={() => props.logout()}>Logout</button>
          </Link>
        ) : null}
      </div>
    </footer>
  );
}

export default Footer;
