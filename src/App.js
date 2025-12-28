import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Courses from './components/Courses';
import Projects from './components/Projects';
import PaperNews from './components/PaperNews';
import Contact from './components/Contact';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <div className={styles.container}>
      <LanguageProvider>
        <Router>
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/papers" element={<PaperNews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
