import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <div className="about"></div>
          <div className="services" id="services">
            <Services />
          </div>
          <div className="contact" id="contact">
            <Contact />
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
