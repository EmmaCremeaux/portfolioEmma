import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail'; // Importation de ProjectDetail
import Contact from './components/Contact';
import Competences from './components/Competences';
import './App.css'; // pour le style

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <nav className={`navBar ${scrolled ? 'navBarScrolled' : ''}`}>
                <a className="navLink" href="#home">Accueil</a>
                <a className="navLink" href="#about">À propos</a>
                <a className="navLink" href="#competences">Compétences</a>
                <a className="navLink" href="#projects">Projets</a>
                <a className="navLink" href="#contact">Contact</a>
              </nav>
              <Home />
              <About />
              <Competences />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
