import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Header from './Components/Header.jsx';
import HomePage from './Components/HomePage.jsx';
import Navigation from './Components/Navigation.jsx';
import Footer from './Components/Footer.jsx';
import Resume from './Components/Resume.jsx';
import Portfolio from './Components/Portfolio.jsx';
import SayHi from './Components/SayHi.jsx';
import ViewBox from './Components/ViewBox.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navigation />
          <ViewBox />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
