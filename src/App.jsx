import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'; // Your landing page component
import Dashboard from './components/Dashboard'; // The page you want to redirect to after login
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
