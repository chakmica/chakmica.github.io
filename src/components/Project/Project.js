import "./Project.css";

const Project = (props) => {
  const projectClickHandler = () => {
    props.onClick(props.projectNumber);
  }

  return (
    <div className="project">
      <img onClick={projectClickHandler} src={props.banner} alt=""></img>
    </div>
  );
};

export default Project;
