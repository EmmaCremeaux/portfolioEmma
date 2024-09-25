import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const projectData = {
  'gyb-estimate': {
    title: 'Gyb Estimate',
    images: ['../../public/images/gyb/Acceuil.png', '../../public/images/gyb/chiffrage.png', '../../public/images/gyb/resultat.png'],
    description: "Le projet consistait à créer un site interne à Grow Your Business pour leur permettre de générer des chiffrages (devis) pour leurs clients, de façon automatique avec l'API OpenAI et de stocker tout ceci dans une base de données. Ce site devait être codé en utilisant Nuxt.js, qui est un framework basé notamment sur Vue.js et Node.js. Je devais respecter la maquette du designer créée sur Figma.",
  },
  'bingo-de-traverse': {
    title: 'Bingo De Traverse',
    images: ['../../public/images/bingoDeTraverse/Acceuil.png', '../../public/images/bingoDeTraverse/image2.png'],
    description: 'Description de Bingo De Traverse...',
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const navigate = useNavigate();

  // État pour gérer l'image affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour naviguer à gauche
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
  };

  // Fonction pour naviguer à droite
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="project-detail">
      {project ? (
        <>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          
          {/* Carrousel des images avec boutons de navigation */}
          <div className="image-carousel">
            <button className="slider-button left" onClick={handlePrevImage}>&lt;</button>
            <img src={project.images[currentImageIndex]} alt={project.title} className="project-detail-image" />
            <button className="slider-button right" onClick={handleNextImage}>&gt;</button>
          </div>
          
          {/* Bouton pour revenir à la section des projets */}
          <button className="back-button" onClick={() => navigate('/')}>
            Retour à l'accueil
          </button>
        </>
      ) : (
        <p>Projet non trouvé.</p>
      )}
    </div>
  );
};

export default ProjectDetail;
