import React from "react";
import "../style/Proj.css";
import Img1 from "../style/images/img5.PNG";
import { Icon } from "@iconify/react";
import classes from "../style/project.module.css";
// function Proj4() {
//   return (
//     <div className="proj-cont" id="project1">
//       <div className="card-cont">
//         <div className="left">
//           <p className="number">01</p>
//           <div className="media_img">
//             <img src={Img1} alt="" />
//           </div>
//           <h2
//             style={{
//               paddingLeft: "10px",
//               top: "-30%",
//               position: "relative",
//               textDecoration: "underline",
//               color: "#e4dcdc",
//             }}
//           >
//             AngelShop
//           </h2>
//           <p className="project-para">
//             A web app with full authentication functionality using jwt. Used
//             Pypal api for payment.Used NodeMailer for sending email. It have
//             Complete admin side to manage user, orders, products. It has
//             beautiful UI with completely responsive for mobile and tablets
//           </p>
//           <div className="icons_div">
//             <div className="proj_icons">
//               <a
//                 href="https://github.com/ankit2404/Ecommerce"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Icon
//                   icon="akar-icons:github-fill"
//                   height="25"
//                   width="25"
//                   style={{ color: "#e4dcdc" }}
//                 />
//               </a>
//             </div>
//             <div
//               className="proj_icons"
//               style={{ left: "20px", position: "relative" }}
//             >
//               <a
//                 href="https://angelshopapp.herokuapp.com/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Icon
//                   icon="ci:external-link"
//                   height="25"
//                   width="25"
//                   style={{ color: "#e4dcdc" }}
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="right">
//           <img src={Img1} alt="" />
//           <a href="#project1">
//             <Icon
//               icon="bi:arrow-down-square"
//               className="proj-icon"
//               height="30"
//               width="30"
//               style={{ color: "var(--title-color)" }}
//             />
//           </a>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default Proj4;

const Proj4 = () => {
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
          <h3 className={`${classes["slider_header"]}`}>AngelShop</h3>

          <p className={`${classes["slider_para"]}`}>
            A web app with full authentication functionality using jwt. Used
            Pypal api for payment.Used NodeMailer for sending email. It have
            Complete admin side to manage user, orders, products. It has
            beautiful UI with completely responsive for mobile and tablets
          </p>
          <div>
            <a href="https://defiant-bandanna-hare.cyclic.app/" target="blank">
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
              href="https://github.com/ankit2404/Ecommerce"
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
};

export default Proj4;
