import React from "react";
import { Icon } from "@iconify/react";

function FooterComp() {
  return (
    <>
      <footer className="footer">
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">Bhumika Aggarwal</h1>
              <span className="footer_subtitle">Developer</span>
            </div>

            <ul className="footer_links">
              <li>
                <a href="#about" className="footer_link">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="footer_link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="footer_link">
                  Contact Me
                </a>
              </li>
            </ul>

            <div className="footer_socials">
              <a
                href="https://www.linkedin.com/in/bhumikaaggarwal/"
                target="_blank"
                className="footer_social"
                rel="noreferrer"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/bhumikaggarwal"
                target="_blank"
                className="footer_social"
                rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="aggarwalbhumika99@gmail.com.com"
                target="_blank"
                className="footer_social"
                rel="noreferrer"
              >
                <Icon icon="ci:mail" inline={true} />
              </a>
            </div>
          </div>

          <p className="footer_copy">
            &#169; Bhumika Aggarwal. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default FooterComp;
