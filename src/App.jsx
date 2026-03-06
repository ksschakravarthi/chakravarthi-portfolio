import { ThemeProvider } from './context/ThemeContext';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemePanel from './components/ThemePanel';

export default function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <ThemePanel />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
