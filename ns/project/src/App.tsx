import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Conversation } from './pages/Conversation';
import { DocumentView } from './pages/DocumentView';
import { NGODirectory } from './pages/NGODirectory';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        <Header />
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conversation" element={<Conversation />} />
            <Route path="/document/:documentId" element={<DocumentView />} />
            <Route path="/ngo" element={<NGODirectory />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;