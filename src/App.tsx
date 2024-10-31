// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { GlobalContextProvider } from './context/GlobalContext';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ProfilePage from './pages/profile/ProfilePage';

// Main Pages
import HomePage from './pages/home/home-page';
import EventsPage from './pages/events/events-page';
import LearningPathways from './pages/learning-pathways/learning-pathways';

// Dance Style Pages
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

// Learning Dashboard
import DashboardPage from './pages/learning/dashboard/DashboardPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';

// Error Pages
import { NotFoundPage } from './pages/error/not-found';
import { ServerErrorPage } from './pages/error/server-error';
import { MaintenancePage } from './pages/error/maintenance';
import { NetworkErrorPage } from './pages/error/network-error';

// Additional Pages
import AboutPage from './pages/about/about-page';
import ContactPage from './pages/contact/contact-page';
import FAQPage from './pages/faq/faq-page';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <GlobalContextProvider>
            <Router basename="/SDE">
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                    
                    {/* Auth Routes */}
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

                    {/* Protected Routes */}
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/learning/dashboard"
                      element={
                        <ProtectedRoute>
                          <DashboardPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/*"
                      element={
                        <ProtectedRoute>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />

                    {/* Dance Style Routes */}
                    <Route path="/dance-styles/salsa" element={<SalsaPage />} />
                    <Route path="/dance-styles/bachata" element={<BachataPage />} />
                    <Route path="/dance-styles/merengue" element={<MerenguePage />} />
                    <Route path="/dance-styles/waltz" element={<WaltzPage />} />
                    <Route path="/dance-styles/cha-cha" element={<ChaChaPage />} />
                    <Route path="/dance-styles/foxtrot" element={<FoxtrotPage />} />
                    <Route path="/dance-styles/rumba" element={<RumbaPage />} />
                    <Route path="/dance-styles/east-coast-swing" element={<EastCoastSwingPage />} />
                    <Route path="/dance-styles/west-coast-swing" element={<WestCoastSwingPage />} />
                    <Route path="/dance-styles/country-swing" element={<CountrySwingPage />} />
                    <Route path="/dance-styles/two-step" element={<TwoStepPage />} />
                    <Route path="/dance-styles/line-dancing" element={<LineDancingPage />} />

                    {/* Learning Routes */}
                    <Route path="/learning-pathways" element={<LearningPathways />} />

                    {/* Additional Pages */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />

                    {/* Error Routes */}
                    <Route path="/maintenance" element={<MaintenancePage />} />
                    <Route path="/server-error" element={<ServerErrorPage />} />
                    <Route path="/network-error" element={<NetworkErrorPage />} />
                    
                    {/* 404 Route - Must be last */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </GlobalContextProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;