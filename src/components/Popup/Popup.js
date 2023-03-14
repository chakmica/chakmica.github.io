import website_banner from "../../project_images/website_banner.jpg";
import milk_banner from "../../project_images/milk_banner.png";
import digit_banner from "../../project_images/digit_banner.jpg";
import github from "../../github-mark.svg";
import "./Popup.css";

const Popup = (props) => {
  if (props.selected === 0) {
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
              <a href="https://github.com/chakmica">
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

  if (props.selected === 2) {
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
};

export default Popup;
