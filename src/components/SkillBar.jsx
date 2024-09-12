/* eslint-disable react/prop-types */
const SkillBar = ({ skillName, progress }) => {
  return (
    <div className="skill">
      <span className="skill-name">{skillName}</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
