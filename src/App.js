// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TwitterxFootball from './photoquiz';
import A1 from './pages/LevelPages/A1';
import A2 from './pages/LevelPages/A2';
import B1 from './pages/LevelPages/B1';
import B2 from './pages/LevelPages/B2';
import C1 from './pages/LevelPages/C1';
import C2 from './pages/LevelPages/C2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TwitterxFootball />} />
        <Route path="/a1" element={<A1 />} />
        <Route path="/a2" element={<A2 />} />
        <Route path="/b1" element={<B1 />} />
        <Route path="/b2" element={<B2 />} />
        <Route path="/c1" element={<C1 />} />
        <Route path="/c2" element={<C2 />} />
      </Routes>
    </Router>
  );
};

export default App;