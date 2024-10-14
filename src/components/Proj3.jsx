import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/img4.PNG";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";
function Proj1() {
  return (
    // <div className="proj-cont" id="project4">
    //   <div className="card-cont">
    //     <div className="left">
    //       <p className="number">04</p>
    //       <div className="media_img">
    //         <img src={Img1} alt="" />
    //       </div>
    //       <h2
    //         style={{
    //           paddingLeft: "10px",
    //           top: "-30%",
    //           position: "relative",
    //           textDecoration: "underline",
    //           color: "#e4dcdc",
    //         }}
    //       >
    //         Github Finder
    //       </h2>
    //       <p className="project-para">
    //         A web app where you can search github users by their name. User can
    //         show all the public repos of any user. Github API is used is this
    //         project
    //       </p>
    //       <div className="icons_div">
    //         <div className="proj_icons">
    //           <a
    //             href="https://github.com/ankit2404/github-finder"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <Icon
    //               icon="akar-icons:github-fill"
    //               height="25"
    //               width="25"
    //               style={{ color: "#e4dcdc" }}
    //             />
    //           </a>
    //         </div>
    //         <div
    //           className="proj_icons"
    //           style={{ left: "20px", position: "relative" }}
    //         >
    //           <a
    //             href="https://github-finder-fawn-tau.vercel.app/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <Icon
    //               icon="ci:external-link"
    //               height="25"
    //               width="25"
    //               style={{ color: "#e4dcdc" }}
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="right">
    //       <img src={Img1} alt="" />
    //       <a href="#project3">
    //         <Icon
    //           icon="bi:arrow-up-square"
    //           className="proj-icon"
    //           height="30"
    //           width="30"
    //           style={{ color: "var(--title-color)" }}
    //         />
    //       </a>
    //     </div>
    //   </div>
    //   <div></div>
    // </div>
    <div className={`${classes["start_div"]}`}>
      <div className={`${classes["content_div"]} ${classes["opposite_div"]}`}>
        <div className={`${classes["content_des"]}`}>
          <h3 className={`${classes["slider_header"]}`}>Github Finder</h3>

          <p className={`${classes["slider_para"]}`}>
            A web app where you can search github users by their name. User can
            show all the public repos of any user. Github API is used is this
            project
          </p>
          <div>
            <a href="https://git-hub-finder-lilac-psi.vercel.app/" target="blank">
              <button
                className={`${classes["btn"]} ${classes["btn-primary"]}`}
                type="button"
              >
                <Icon
                  icon="ci:external-link"
                  height="30"
                  width="30"
                  style={{ color: "#e4dcdc" }}
                />
              </button>
            </a>
            <a
              href="https://github.com/bhumikaggarwal/git-hub-finder"
              target="blank"
              className={`${classes["second_link"]}`}
            >
              <button
                className={`${classes["btn"]} ${classes["btn-primary"]}`}
                type="button"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  height="25"
                  width="25"
                  style={{ color: "#e4dcdc" }}
                />
              </button>
            </a>
          </div>
        </div>
        <img
          src={Img1}
          alt="Proj1"
          className={`${classes["swiper_image_class"]}`}
        />
      </div>
    </div>
  );
}

export default Proj1;
