import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills/Skills';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import MailchimpForm from './components/MailchimpForm';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';


import "bootstrap-icons/font/bootstrap-icons.css";

import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/ >
      <Skills />
      <Technologies />
      <Projects/>
      <About />
      <Contact/>
      <MailchimpForm />
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default App;
