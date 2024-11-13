import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import NotFound from './pages/NotFound/NotFound';
import Logements from './pages/Logements/Logements';

ReactDOM.render(
  <React.StrictMode>
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logements/:id" element={<Logements />} />
                <Route path="*" element={<Navigate replace to='/error' />} />
                <Route path="/error" element={<NotFound/>}/>
            </Routes>
                  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
