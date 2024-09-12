// App.jsx
import { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Competences from './components/Competences';
import './App.css'; // pour le style

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div className="App">
      <nav className={`navBar ${scrolled ? 'navBarScrolled' : ''}`}>
        <a className="navLink" href="#home">Accueil</a>
        <a className="navLink" href="#about">À propos</a>
        <a className="navLink" href="#competences">Compétences</a>
        <a className="navLink" href="#projects">Projets</a>
        <a className="navLink" href="#contact">Contact</a>
      </nav>

      <Home />
      <About />
      <Competences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
