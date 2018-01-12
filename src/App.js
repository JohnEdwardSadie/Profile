import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header.jsx';
import Navigation from './Components/Navigation.jsx';
import Footer from './Components/Footer.jsx';
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
