import styles from './App.module.css';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <BasicInfo />
        <Experience />
        <Education />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
