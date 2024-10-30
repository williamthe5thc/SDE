// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './context/GlobalContext';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer';

// Page Imports
import HomePage from './pages/home/home-page';
import SalsaPage from './pages/dance-styles/salsa/salsa-page';
import BachataPage from './pages/dance-styles/bachata/bachata-page';
import MerenguePage from './pages/dance-styles/merengue/merengue-page';
import WaltzPage from './pages/dance-styles/waltz/waltz-page';
import ChaChaPage from './pages/dance-styles/cha-cha/cha-cha-page';
import FoxtrotPage from './pages/dance-styles/foxtrot/foxtrot-page';
import RumbaPage from './pages/dance-styles/rumba/rumba-page';
import EastCoastSwingPage from './pages/dance-styles/east-coast-swing/east-coast-swing-page';
import WestCoastSwingPage from './pages/dance-styles/west-coast-swing/west-coast-swing-page';
import CountrySwingPage from './pages/dance-styles/country-swing/country-swing-page';
import TwoStepPage from './pages/dance-styles/two-step/two-step-page';
import LineDancingPage from './pages/dance-styles/line-dancing/line-dancing-page';

// Other Main Section Pages
import EventsPage from './pages/events/events-page';
import LearningPathways from './pages/learning-pathways/learning-pathways';

function App() {
  return (
    <HelmetProvider>
      <GlobalContextProvider>
        <Router basename="/SDE">
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/learning-pathways" element={<LearningPathways />} />
                
                {/* Dance Style Routes */}
                <Route path="/dance-styles/salsa" element={<SalsaPage />} />
                <Route path="/dance-styles/bachata" element={<BachataPage />} />
                <Route path="/dance-styles/merengue" element={<MerenguePage />} />
                <Route path="/dance-styles/waltz" element={<WaltzPage />} />
                
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GlobalContextProvider>
    </HelmetProvider>
  );
}

export default App;