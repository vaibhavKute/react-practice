import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Products";
import Crud from "./Crud";
import AddDevice from "./AddDevice";
import EditDevice from "./EditDevice";

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
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route exact path="/crud" component={Crud}></Route>
            <Route exact path="/add-device" component={AddDevice}></Route>
            <Route exact path="/edit-device/:id" component={EditDevice}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Main;
