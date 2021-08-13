import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from "./Products";

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          {/* <About />
          <Contact /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact" component={Contact}>
            </Route>
            <Route exact path="/products" component={Products}>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Main;
