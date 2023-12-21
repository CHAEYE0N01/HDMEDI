import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Pharmacy from './pages/Pharmacy';
import Medicine1 from './pages/Medicine1';
import Medicine2 from './pages/Medicine2';
import Medicine3 from './pages/Medicine3';
import Medicine4 from './pages/Medicine4';
import Medicine5 from './pages/Medicine5';
import Medicine6 from './pages/Medicine6';
import Medicine7 from './pages/Medicine7';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<User/>}/>
          <Route path = "/Pharmacy" element = {<Pharmacy/>}/>
          <Route path="/Pharmacy/Medicine1" element = {<Medicine1/>}/>
          <Route path="/Pharmacy/Medicine2" element = {<Medicine2/>}/>
          <Route path="/Pharmacy/Medicine3" element = {<Medicine3/>}/>
          <Route path="/Pharmacy/Medicine4" element = {<Medicine4/>}/>
          <Route path="/Pharmacy/Medicine5" element = {<Medicine5/>}/>
          <Route path="/Pharmacy/Medicine6" element = {<Medicine6/>}/>
          <Route path="/Pharmacy/Medicine7" element = {<Medicine7/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;