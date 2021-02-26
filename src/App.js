import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideNav from "./components/SideNav";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
}

function App() {
  const [setRef, visible] = useOnScreen({ threshold: 1 });

  return (
    <div className="container-fluid p-0">
      {visible ? null : <SideNav></SideNav>}
      <Nav></Nav>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <div ref={setRef}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
