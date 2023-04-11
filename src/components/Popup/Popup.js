import noise_banner from "../../project_images/noise_banner.jpg";
import genre_banner from "../../project_images/genre_banner.jpg";
import website_banner from "../../project_images/website_banner.jpg";
import milk_banner from "../../project_images/milk_banner.png";
import digit_banner from "../../project_images/digit_banner.jpg";
import github from "../../github-mark.svg";
import "./Popup.css";

const Popup = (props) => {
  if (props.selected === 4) {
    return (
      <div className="popup">
        <h1 className="popup-header">Noise Tree</h1>
        <div className="popup-content">
          <img className="popup-image" src={noise_banner} alt=""></img>
          <div className="popup-text">
            <p className="popup-summary">
              Coded a{" "}
              <a
                className="project-url"
                href="https://noise-tree-2d1b0.web.app/"
              >
                web app
              </a>{" "}
              to discover related artists using the Spotify API.
            </p>
            <ul className="popup-features">
              <li className="popup-feature">
                Developed front-end using React and Bootstrap, allowing the user
                to grow and refresh graph nodes to discover new music artists.
              </li>
              <li className="popup-feature">
                Integrated the Spotify API to fetch and display artist data
              </li>
              <li className="popup-feature">
                Used Firebase cloud functions to securely call Spotify API from
                app.
              </li>
            </ul>
            <div className="popup-links">
              <a href="https://github.com/chakmica">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.selected === 3) {
    return (
      <div className="popup">
        <h1 className="popup-header">Genre Matcher</h1>
        <div className="popup-content">
          <img className="popup-image" src={genre_banner} alt=""></img>
          <div className="popup-text">
            <p className="popup-summary">
              Coded a web app to match a searched artist to their genre using
              Flask.
            </p>
            <ul className="popup-features">
              <li className="popup-feature">
                Wrote a Selenium automation script to retrieve genre and image
                info from wikipedia.
              </li>
              <li className="popup-feature">
                Passed data between files using session variables and JSON
                objects.
              </li>
              <li className="popup-feature">
                Dynamically updated and displayed searched artist info with
                javascript.
              </li>
            </ul>
            <div className="popup-links">
              <a href="https://github.com/chakmica/genre_match">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.selected === 2) {
    return (
      <div className="popup">
        <h1 className="popup-header">Personal Website</h1>
        <div className="popup-content">
          <img className="popup-image" src={website_banner} alt=""></img>
          <div className="popup-text">
            <p className="popup-summary">
              Coded a personal website using React and CSS.
            </p>
            <ul className="popup-features">
              <li className="popup-feature">
                Tracked and updated state to conditionally render popups.
              </li>
              <li className="popup-feature">
                Used media queries to create a responsive page design.
              </li>
              <li className="popup-feature">
                Used dynamic inline styling to select popup CSS.
              </li>
            </ul>
            <div className="popup-links">
              <a href="https://github.com/chakmica/chakmica.github.io/tree/master">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.selected === 1) {
    return (
      <div className="popup">
        <h1 className="popup-header">Digit Classifier</h1>
        <div className="popup-content">
          <img className="popup-image" src={digit_banner} alt=""></img>
          <div className="popup-text">
            <p className="popup-summary">
              Coded a neural network to classify digits based on MNIST data set
              in Java.
            </p>
            <ul className="popup-features">
              <li className="popup-feature">
                Model distinguished between digits '5' and '8'.
              </li>
              <li className="popup-feature">
                Model used 784 input units with 1 hidden layer with 28 hidden
                units
              </li>
              <li className="popup-feature">
                Model had &gt;90% accuracy on training set.
              </li>
            </ul>
            <div className="popup-links">
              <a href="https://github.com/chakmica">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.selected === 0) {
    return (
      <div className="popup">
        <h1 className="popup-header">Milk Manager</h1>
        <div className="popup-content">
          <img className="popup-image" src={milk_banner} alt=""></img>
          <div className="popup-text">
            <p className="popup-summary">
              Coded a desktop UI to manage cow farms using JavaFX.
            </p>
            <ul className="popup-features">
              <li className="popup-feature">
                Loaded and output farm report text files.
              </li>
              <li className="popup-feature">
                Implemented ability to view, edit, and delete existing reports.
              </li>
              <li className="popup-feature">
                Displayed graph of annual milk contribution of a specified farm.
              </li>
            </ul>
            <div className="popup-links">
              <a href="https://github.com/chakmica">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Popup;
