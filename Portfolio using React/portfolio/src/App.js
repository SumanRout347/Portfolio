import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Social/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
