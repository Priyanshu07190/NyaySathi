import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { Header } from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './pages/AuthPage';
import { Home } from './pages/Home';
import { Conversation } from './pages/Conversation';
import { DocumentView } from './pages/DocumentView';
import { NGODirectory } from './pages/NGODirectory';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">NyaySathi लोड हो रहा है...</p>
        </div>
      </div>
    );
  }

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        {user && <Header />}
        <main className={user ? "pb-20" : ""}>
          <Routes>
            <Route 
              path="/auth" 
              element={
                <ProtectedRoute requireAuth={false}>
                  <AuthPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/conversation" 
              element={
                <ProtectedRoute>
                  <Conversation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/document/:documentId" 
              element={
                <ProtectedRoute>
                  <DocumentView />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ngo" 
              element={
                <ProtectedRoute>
                  <NGODirectory />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;