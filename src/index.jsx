import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import NotFound from './pages/404/404';
import Logements from './pages/Logements/Logements';

ReactDOM.render(
  <React.StrictMode>
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Logements" element={<Logements />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
                  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
