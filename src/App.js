import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import NavLink from './Components/NavLink';

// Pages
import HomePage from './Containers/Home';
import AboutPage from './Containers/About';
import ProductPage from './Containers/Product';
import ContactPage from './Containers/Contact';
import MenuPage from './Containers/Menu';
import _404Page from './Containers/404';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <NavLink/>

          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about-us" component={AboutPage}/>
              <Route path="/contact-us" component={ContactPage}/>
              <Route path="/menu" component={MenuPage} />
              <Route path="/product/:itemid" component={ProductPage}/>
              <Route component={_404Page}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
