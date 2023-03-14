import "./NavButton.css";

const NavButton = props => {
  return (
    <button type="button" className="NavButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default NavButton;