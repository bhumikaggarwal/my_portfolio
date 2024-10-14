import React from "react";
import "../style/Proj.css";
import codechef from "../style/images/codechef.jpg";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";

const Proj5 = () => {
  return (
    <div className={`${classes["start_div"]}`}>
      <div className={`${classes["content_div"]} ${classes["opposite_div"]}`}>
        <div className={`${classes["content_des"]}`}>
          <h3 className={`${classes["slider_header"]}`}>Codechef Clone</h3>

          <p className={`${classes["slider_para"]}`}>
            A web app where the user can solve data structure and algorithms
            projects based on category. Automated testing of participant
            solutions with instant feedback. User can run the java code on the
            server and also able to submit the code on the server
          </p>
          <div>
            <a
              href="https://github.com/ankit2404/Codechef-Clone"
              target="blank"
            >
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
              href="https://github.com/ankit2404/Codechef-Clone"
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
          src={codechef}
          alt="Proj1"
          className={`${classes["swiper_image_class"]}`}
        />
      </div>
    </div>
  );
};

export default Proj5;
