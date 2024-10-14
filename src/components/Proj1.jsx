import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/img1.PNG";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";
function Proj1() {
  return (
    // <div className={`${classes["start_div"]}`}>
    //   <div className={`${classes["content_div"]} ${classes["opposite_div"]}`}>
    //     <div className={`${classes["content_des"]}`}>
    //       <h3 className={`${classes["slider_header"]}`}>Natours</h3>

    //       <p className={`${classes["slider_para"]}`}>
    //         A web app with full authentication functionality using jwt. Used
    //         stripe api for payment added webhooks to avoid adding tour without
    //         payment. User can update username, photo, email, and password. User
    //         can see all your bought tours at the same place
    //       </p>
    //       <div>
    //         <a href="https://natours-ankit.herokuapp.com/" target="blank">
    //           <button
    //             className={`${classes["btn"]} ${classes["btn-primary"]}`}
    //             type="button"
    //           >
    //             <Icon
    //               icon="ci:external-link"
    //               height="30"
    //               width="30"
    //               style={{ color: "#e4dcdc" }}
    //             />
    //           </button>
    //         </a>
    //         <a
    //           href="https://github.com/ankit2404/natours"
    //           target="blank"
    //           className={`${classes["second_link"]}`}
    //         >
    //           <button
    //             className={`${classes["btn"]} ${classes["btn-primary"]}`}
    //             type="button"
    //           >
    //             <Icon
    //               icon="akar-icons:github-fill"
    //               height="25"
    //               width="25"
    //               style={{ color: "#e4dcdc" }}
    //             />
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //     <img
    //       src={Img1}
    //       alt="Proj1"
    //       className={`${classes["swiper_image_class"]}`}
    //     />
    //   </div>
    // </div>

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
          <h3 className={`${classes["slider_header"]}`}>Natours</h3>

          <p className={`${classes["slider_para"]}`}>
            A web app with full authentication functionality using jwt.
            Integration with payment gateways to process online payments. User
            can update username, photo, email, and password. Visual
            representation of tour guide locations using map API.
          </p>
          <div>
            <a
              href="https://odd-ruby-harp-seal-boot.cyclic.app/"
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
              href="https://github.com/ankit2404/natours"
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
