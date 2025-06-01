import React from 'react';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThesisManager } from './pages/ThesisManager';
import { Research } from './pages/Research';
import { Advisement } from './pages/Advisement';
import { Scheduler } from './pages/Scheduler';
import { Funding } from './pages/Funding';
import { Community } from './pages/Community';
import { Documents } from './pages/Documents';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/connexion" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="these" element={<ThesisManager />} />
              <Route path="recherche" element={<Research />} />
              <Route path="conseil" element={<Advisement />} />
              <Route path="calendrier" element={<Scheduler />} />
              <Route path="financement" element={<Funding />} />
              <Route path="communaute" element={<Community />} />
              <Route path="documents" element={<Documents />} />
              <Route path="parametres" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;