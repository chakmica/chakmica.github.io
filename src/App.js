import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Page from "./components/Page/Page";
import Project from "./components/Project/Project";
import Popup from "./components/Popup/Popup";
import { ReactComponent as Moon } from "./moon.svg";
import profpic from "./web_prof_pic_small.jpg";
import website_logo from "./website_logo.svg";
import milk_logo from "./project_images/cow.jpg";
import digit_logo from "./project_images/digit_logo.jpg";
import contactpic from "./contact_photo.jpg";
import phone from "./phone_icon.svg";
import email from "./email_icon.svg";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isSelectedProject, setSelectedProject] = useState();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const navClickHandler = (selector) => {
    if (selector === 0) {
      scrollToSection(about);
    }
    if (selector === 1) {
      scrollToSection(projects);
    }
    if (selector === 2) {
      scrollToSection(contact);
    }
  };

  const emailClickHandler = () => {
    navigator.clipboard.writeText("chakmica@gmail.com");
  };

  const phoneClickHandler = () => {
    navigator.clipboard.writeText("6087192325");
  };

  const siteClickHandler = () => {
    if (isPopupVisible) {
      setPopupVisible(false);
    }
  };

  const projectClickHandler = (selectedProject) => {
    if (!isPopupVisible) {
      setSelectedProject(selectedProject);
      setPopupVisible(true);
    }
  };

  return (
    <div className={`body${isPopupVisible ? "-no-scroll" : ""}`}>
      <div className={`popup${!isPopupVisible ? "-invisible" : "-visible"}`}>
        <Popup selected={isSelectedProject} />
      </div>
      <div
        onClick={siteClickHandler}
        className={`site${isPopupVisible ? "-blur" : ""}`}
      >
        <div className="home">
          <div className="header">
            <Moon className="logo" />
            <div className="name">
              <h1 className="name1">M</h1>
              <h1 className="name1">i</h1>
              <h1 className="name1">c</h1>
              <h1 className="name1">a</h1>
              <h1 className="name1">_</h1>
              <h1 className="name2">C</h1>
              <h1 className="name2">h</h1>
              <h1 className="name2">a</h1>
              <h1 className="name2">k</h1>
              <h1 className="name2">r</h1>
              <h1 className="name2">a</h1>
              <h1 className="name2">b</h1>
              <h1 className="name2">o</h1>
              <h1 className="name2">r</h1>
              <h1 className="name2">t</h1>
              <h1 className="name2">y</h1>
              <h1 className="name2">_</h1>
              {/* <h1 className="name1">Mica_</h1>
            <h1 className="name2">Chakraborty_</h1> */}
            </div>
          </div>
          <NavBar onNavButtonClick={navClickHandler} />
        </div>
        <div>
          <Page section={about} title="ABOUT">
            {/* <button><img src={up_arrow} alt="UP" /></button> */}
            <img className="profpic" src={profpic} alt=""></img>
            <p className="text">
              <span className="highlight">Hi, I'm Mica.</span>
              <br></br>I'm a recent UW-Madison Computer Science graduate looking
              for software development positions. I have experience with Java,
              C/C++, Python, and Javascript. My interests are in AI and
              Algorithm Design. Outside of programming, I enjoy chess, drawing,
              and video games.
            </p>
            <div className="relevant-courses">
              <h4>
                <span className="relevant-courses-header">
                  Relevant Courses: <br></br>
                </span>
                CS 577 - Algorithms<br></br>CS 542 - Software Security<br></br>
                CS 538 - Programming Languages<br></br>CS 540 - Artificial
                Intelligence<br></br>Math 341 - Linear Algebra
              </h4>
            </div>
          </Page>
          <Page section={projects} title="PROJECTS">
            <div className="projects">
              <Project
                onClick={projectClickHandler}
                banner={website_logo}
                projectNumber={0}
              />
              <Project
                onClick={projectClickHandler}
                banner={milk_logo}
                projectNumber={1}
              />
              <Project
                onClick={projectClickHandler}
                banner={digit_logo}
                projectNumber={2}
              />
            </div>
          </Page>
          <Page section={contact} title="CONTACT">
            <div className="contact">
              <img className="contact-pic" src={contactpic} alt=""></img>
              <div className="contact-info">
                <div className="contact-email">
                  <img
                    className="contact-email-icon"
                    src={email}
                    alt="email: "
                    onClick={emailClickHandler}
                  ></img>
                  <p className="contact-email-info" onClick={emailClickHandler}>
                    chakmica@gmail.com
                  </p>
                </div>
                <div className="contact-phone">
                  <img
                    className="contact-phone-icon"
                    src={phone}
                    alt="phone: "
                    onClick={phoneClickHandler}
                  ></img>
                  <h4
                    className="contact-phone-info"
                    onClick={phoneClickHandler}
                  >
                    (608) 719-2325
                  </h4>
                </div>
              </div>
            </div>
          </Page>
          <div className="bottom-filler"></div>
        </div>
        <div className="footer">
          <p>&#169; 2023 Mica Chakraborty - Made with React</p>
        </div>
      </div>
    </div>
  );
}

export default App;
