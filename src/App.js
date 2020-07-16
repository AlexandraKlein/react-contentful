import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleArticle from "./pages/SingleArticle";
import "./pages/main.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Blog/:slug" component={SingleArticle} />
          <Route exact path="/Contact" component={Contact} />
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
