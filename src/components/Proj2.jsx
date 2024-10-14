import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/Img3.PNG";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";
function Proj1() {
  return (
    <div className={`${classes["start_div"]}`}>
      <div className={`${classes["content_div"]}`}>
        <img
          src={Img1}
          alt="Proj1"
          className={`${classes["swiper_image_class"]}`}
        />

        <div
          className={`${classes["content_des"]}`}
          style={{ marginLeft: "5%" }}
        >
          <h3 className={`${classes["slider_header"]}`}>House Marketplace</h3>

          <p className={`${classes["slider_para"]}`}>
            A web app with full google authentication. User can send mail
            directly to the house owner using web app. User can add their house
            for rent or sale
          </p>
          <div>
            <a
              href="https://house-market-place-xi.vercel.app/"
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
              href="https://github.com/bhumikaggarwal/house_market_place"
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
      </div>
    </div>
  );
}

export default Proj1;
