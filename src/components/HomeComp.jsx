import { Icon } from "@iconify/react";
import myImage from "../style/images/myImage.PNG"
import Resume from "../style/images/BhumikaAggarwal.pdf";
function HomeComp() {
  return (
    <div>
      <main className="main" id="about">
        <section className="home section" id="home">
          <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_social">
                <a
                  href="https://www.linkedin.com/in/bhumikaaggarwal/"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://github.com/bhumikaggarwal"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-github-alt"></i>
                </a>

                <a
                  href="https://leetcode.com/u/Aggarwal-Bhumika/"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="cib:leetcode" inline={true} />
                </a>
                
                <a
                  href="mailto:aggarwalbhumika99@gmail.com"
                  className="home_social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="ci:mail" inline={true} />
                </a>
              </div>

              <div className="home_img">
                <img
                  src={myImage}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    height: "300px",
                    width: "370px",
                    objectFit: "fill",
                  }}
                />
              </div>

              <div className="home_data">
                <h1 className="home_title">Hi, Bhumika here.</h1>
                <h3 className="home_subtitle">
                  <span className="type"> Front End</span> Developer
                </h3>

                <p className="home_description">
                I am a passionate front-end developer with experience in React, JavaScript, and Tailwind CSS.
                 I have a strong background in web development. My journey has also included roles in fiber engineering,
                  and I am now fully committed to a career in coding, with ongoing efforts in development. 
                  </p>
                <a
                  download=""
                  href={Resume}
                  className="button button--flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                  <i className="uil uil-file-download-alt button_icon"></i>
                </a>
              </div>
            </div>

            <div className="home_scroll">
              <a href="#skills" className="home_scroll-button button--flex">
                <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                <span className="home_scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeComp;
