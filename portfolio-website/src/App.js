import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import InfoPage from './InfoPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <>
      <div className='app-page'>
        <Router>
          <div className="App">
            <Navbar />
            <div className='appContainer'>
              <Routes>
                <Route path="/InfoPage" element={<InfoPage />} />
                <Route path="/ProjectsPage" element={<ProjectsPage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
