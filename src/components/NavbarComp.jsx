import { useContext } from "react";
import AppContext from "../context/AppContext";

function NavbarComp() {
  const { toogle, setToogle, theme, setTheme } = useContext(AppContext);
  function showMenu() {
    setToogle(!toogle);
  }
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }

    setTheme("light-theme");
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#about" className="nav_logo">
         Bhumika Aggarwal
        </a>

        <div
          className={"nav_menu " + (toogle ? "show-menu" : "")}
          id="nav-menu"
        >
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#about" className="nav_link ">
                <i className="uil uil-estate nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#experience" className="nav_link">
                <i className="uil uil-graduation-cap nav_icon"></i> Experience
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav-icon nav_icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={showMenu}
            id="nav-close"
          ></i>
        </div>

        <div className="nav_btns">
          <i
            className={
              "uil uil-moon change-theme " +
              (theme === "light-theme" ? "" : "uil-sun")
            }
            onClick={changeTheme}
            id="theme-button"
          ></i>

          <div className="nav_toggle" onClick={showMenu} id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarComp;
