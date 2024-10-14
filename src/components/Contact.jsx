import React from "react";
import { Icon } from "@iconify/react";
function Contact() {
  return (
    <section className="contact section" id="contact">
      <h1 className="section_title">Contact Me</h1>
      <span className="section_subtitle">
        Want to connect? My inbox is always open!
      </span>

      <div className="contact_container container ">
        <div style={{ width: "100%" }}>
          <div
            className="icon_flex"
            style={{
              display: "flex",
            }}
          >
            <a
              href="mailto:aggarwalbhumika99@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact_first"
            >
              <div className="contact_info">
                <i className="uil uil-envelope-alt contact_icon"></i>
                <div>
                  <h3 className="contact_title">Email</h3>
                  <span className="contact_subtitle">
                    aggarwalbhumika99@gmail.com
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bhumikaaggarwal/"
              target="_blank"
              rel="noreferrer"
              className="link_spacing"
            >
              <div className="contact_info">
                <Icon
                  icon="akar-icons:linkedin-fill"
                  width="30"
                  height="30"
                  inline={true}
                  className="contact_icon"
                />
                <div>
                  <h3 className="contact_title">Linkedin</h3>
                  <span className="contact_subtitle">Connect With Me</span>
                </div>
              </div>
            </a>
          </div>
          <div style={{ display: "flex" }} className="icon_flex">
            <div className="contact_info contact_first">
              <Icon
                icon="bi:phone"
                width="30"
                height="30"
                inline={true}
                className="contact_icon"
              />
              <div>
                <h3 className="contact_title">Phone</h3>
                <span className="contact_subtitle">+91 8810568413</span>
              </div>
            </div>

            <div className="contact_info link_spacing">
              <i className="uil uil-location-point contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* <form
          action="https://formspree.io/f/xyyozeaq"
          className="contact_form grid"
          id="contact-form"
          method="POST"
        >
          <div id="alert" className="alert_style"></div>
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input
                type="text"
                name="name"
                className="contact_input"
                id="name"
                required
              />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact_input"
                id="email"
                required
              />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="subject" className="contact_label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="contact_input"
              id="subject"
              required
            />
          </div>
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">
              Message
            </label>
            <textarea
              name="message"
              id=""
              cols="0"
              rows="7"
              className="contact_input message"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button-flex">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}

export default Contact;
