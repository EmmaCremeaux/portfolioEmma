/* eslint-disable react/prop-types */

export default function ProjectCell(props) {
  return (
    <div className="project-cell">
      <h3 className="project-title">{props.title}</h3>
      <img src={props.imageSrc} alt={props.title} className="project-image" /> 
    </div>
  );
};
