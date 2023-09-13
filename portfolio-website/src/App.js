import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import Navbar from './Navbar';
import InfoPage from './InfoPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


function App() {
  return (
    <Router> {/* Wrap your app in the Router */}
      <div className="App">
        <Navbar />
        <Switch> {/* Use Switch to render only one Route at a time */}
          <Route path="/InfoPage" component={InfoPage} />
          <Route path="/ProjectsPage" component={ProjectsPage} />
          <Route path="/ContactPage" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;