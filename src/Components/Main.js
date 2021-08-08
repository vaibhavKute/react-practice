import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import About from "./About";
import Brand from "./Brand";
import Client from "./Client";
import Contact from "./Contact";

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <About />
        <Brand />
        <Client />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
