import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import SideNav from './components/SideNav';
import Nav from './components/Nav';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="container-fluid p-0">
      <SideNav></SideNav>
      <Nav></Nav>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
