
import { Link } from 'react-router-dom'; // Importation de Link
import ProjectCell from './ProjectCell';

const Projects = () => {
  const projectData = [
    {
      id: 'gyb-estimate',
      title: 'Gyb Estimate',
      imageSrc: '../../public/images/gyb/Acceuil.png',
    },
    {
      id: 'bingo-de-traverse',
      title: 'Bingo De Traverse',
      imageSrc: '../../public/images/bingoDeTraverse/Acceuil.png',
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>Projets</h2>
      <div className="projects">
        {projectData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectCell imageSrc={project.imageSrc} title={project.title} />
          </Link>
        ))}
      </div>
      {/* Boutons de navigation */}
      <button className="slider-button left" onClick={() => document.querySelector('.projects').scrollBy({ left: -300, behavior: 'smooth' })}>‹</button>
      <button className="slider-button right" onClick={() => document.querySelector('.projects').scrollBy({ left: 300, behavior: 'smooth' })}>›</button>
    </div>
  );
};

export default Projects;
