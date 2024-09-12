import SkillBar from './SkillBar';

const Competences = () => {
  const skillsFront = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'vue', level: 75 },
    { name: 'Nuxt', level: 70 },
  ];

  const skillsBack = [
    { name: 'Python', level: 70 },
    { name: 'PHP', level: 65 },
    { name: 'MySQL', level: 75 },
    { name: 'Node.js', level: 80 },
    { name: 'Symfony', level: 60 },
  ];

  return (
    <section id="competences" className="skills">
      <h2>Compétences</h2>
      <h3>Front-end</h3>
      {skillsFront.map(skill => (
        <SkillBar key={skill.name} skillName={skill.name} progress={skill.level} />
      ))}

      <p className="barre-spacer"></p>

      <h3>Back-end</h3>
      {skillsBack.map(skill => (
        <SkillBar key={skill.name} skillName={skill.name} progress={skill.level} />
      ))}
    </section>
  );
};
  
  export default Competences;