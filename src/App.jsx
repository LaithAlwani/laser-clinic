import "./App.css";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="about">
          <About />
        </div>
        <div className="services" id="services">
          <Services />
        </div>
        <div className="contact" id="contact">
          <Contact />
        </div>
      </Layout>
    </div>
  );
}

export default App;
