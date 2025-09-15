import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pipeline from './pages/Pipeline';
import Tracking from './pages/Tracking';
import Resources from './pages/Resources';
import AssetDocument from './pages/AssetDocument';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/asset" element={<AssetDocument />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;