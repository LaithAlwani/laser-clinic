import "./App.css";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Layout>
        
        <div className="about section" id="about">
          <About />
        </div>
        <div className="services section" id="services">
          <Services />
        </div>
        <div className="contact section" id="contact">
          <Contact />
        </div>
      </Layout>
    </div>
  );
}

export default App;
