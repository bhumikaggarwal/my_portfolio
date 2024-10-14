import { useState } from "react";
import { Icon } from "@iconify/react";
function Skills() {
  const [skill1, setSkill1] = useState(true);
  const [skill2, setSkill2] = useState(true);
  const [skill3, setSkill3] = useState(false);

  const click1 = () => {
    setSkill1(!skill1);
  };
  const click2 = () => {
    setSkill2(!skill2);
  };
  const click3 = () => {
    setSkill3(!skill3);
  };

  return (
    <section className="skills section" id="skills">
      <h1 className="section_title">Skills</h1>
      <span className="section_subtitle">My Technical Skills</span>
      <div className="skills_container container grid">

        <div className="skill skills_content skills_open">
          <div className="skills_header" onClick={click1}>
            <i className="uil uil-arrow skills_icon"></i>

            <div>
              <h1 className="skills_title">Languages</h1>
              <span className="skills_subtitle">
                Languages that I have picked up over the years
              </span>
            </div>

            {skill1 && <i className="uil uil-angle-down skills_arrow"></i>}
            {!skill1 && <i className="uil uil-angle-up skills_arrow"></i>}
          </div>

          {skill1 && (
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="fa6-brands:java"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Java</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="akar-icons:python-fill"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Python</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}

              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="akar-icons:html-fill"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">HTML</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="akar-icons:css-fill"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">CSS</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="tabler:brand-javascript"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">JavaScript</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="bxl:c-plus-plus"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">C++</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}
            </div>
          )}
        </div>
        <div className="skill skills_content">
          <div className="skills_header" onClick={click2}>
            <i className="uil uil-brackets-curly skills_icon"></i>

            <div>
              <h1 className="skills_title">Libraries & Frameworks</h1>
              <span className="skills_subtitle">
                Libraries and Frameworks that I have learned
              </span>
            </div>

            {!skill2 && <i className="uil uil-angle-down skills_arrow"></i>}
            {skill2 && <i className="uil uil-angle-up skills_arrow"></i>}
          </div>
          {skill2 && (
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="akar-icons:react-fill"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">React.js</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="fa-brands:node"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Node.js</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="logos:express"
                    width="30"
                    height="30"
                    inline={true}
                    style={{ background: "white" }}
                  />
                  <h3 className="skills_name">Express.js</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="logos:django"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Django</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}
              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="akar-icons:vue-fill"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Vue.js</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}
              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="vscode-icons:file-type-appscript"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Bootstrap</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}
            </div>
          )}
        </div>

        <div className="skill skills_content">
          <div className="skills_header" onClick={click3}>
            <i className="uil uil-wrench skills_icon"></i>

            <div>
              <h1 className="skills_title">Database & Other Tools</h1>
              <span className="skills_subtitle">
                Tools that I know and use on a daily basis
              </span>
            </div>

            {!skill3 && <i className="uil uil-angle-down skills_arrow"></i>}
            {skill3 && <i className="uil uil-angle-up skills_arrow"></i>}
          </div>
          {skill3 && (
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <Icon icon="bi:git" width="30" height="30" inline={true} />
                  <h3 className="skills_name">Git</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="akar-icons:github-fill"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">GitHub</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="cib:firebase"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Firebase</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}

              <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="bxl:mongodb"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">SQL</h3>
                </div>
                <div className="skills_bar"></div>
              </div>

              {/* <div className="skills_data">
                <div className="skills_titles">
                  <Icon
                    icon="ci:adobe-xd"
                    width="30"
                    height="30"
                    inline={true}
                  />
                  <h3 className="skills_name">Adobe XD</h3>
                </div>
                <div className="skills_bar"></div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
