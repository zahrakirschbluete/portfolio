import logo from './logo.svg';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import SideNav from './components/SideNav';
import Nav from './components/Nav';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container-fluid p-0">
      <SideNav></SideNav>
      <Nav></Nav>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
