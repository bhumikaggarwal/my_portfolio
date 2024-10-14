import React from "react";

function Qualification() {
  return (
    <section className="qualification section" id="experience">
      <h2 className="section_title">Work Experience</h2>
      <span className="section_subtitle">My Work Experience</span>

      <div className="qualification_container container">
        <div className="qualification_sections">
          <div
            className="qualification_content qualification_active"
            data-content
            id="education"
          >
            {/* first one */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Amdocs</h3>
                <span className="qualification_subtitle">
                 Fibre Engineer
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jan 2024 - Mar 2024
                </div>
              </div>
              <div>
                <span className="qualification_circle"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            {/* second one */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_circle"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Webs Utility</h3>
                <span className="qualification_subtitle">
                  Software Developer
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  October 2024 - present
                </div>
              </div>
            </div>

            {/* third one */}
           

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
