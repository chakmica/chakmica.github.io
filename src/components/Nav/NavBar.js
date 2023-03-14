import NavButton from "./NavButton";
import "./NavBar.css"

const NavBar = (props) => {

    const aboutClickHandler = () => {
        props.onNavButtonClick(0);
    }

    const projectsClickHandler = () => {
        props.onNavButtonClick(1);
    }

    const contactClickHandler = () => {
        props.onNavButtonClick(2);
    }

  return (
    <div className="NavBar">
      <NavButton onClick={aboutClickHandler}>About</NavButton>
      <NavButton onClick={projectsClickHandler}>Projects</NavButton>
      <NavButton onClick={contactClickHandler}>Contact</NavButton>
    </div>
  );
};

export default NavBar;
