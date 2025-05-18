import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { theme } from './styles/theme';
import { globalStyles } from './styles/global';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { CoursesPage } from './components/pages/Courses/CoursesPage';
import { FeaturesPage } from './components/pages/Features/FeaturesPage';
import { ResourcesPage } from './components/pages/Resources/ResourcesPage';
import { BlogPage } from './components/pages/Blog/BlogPage';
import { AboutPage } from './components/pages/About/AboutPage';
import { ContactPage } from './components/pages/Contact/ContactPage';
import { Onboarding } from './pages/Onboarding';
import { UserProvider } from './context/UserContext';
import { Loader } from './components/atoms/Loader';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsContentReady(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setShowLoader(true);
    setIsContentReady(false);
    // Hide loader after animation completes
    setTimeout(() => {
      setShowLoader(false);
      setIsContentReady(true);
    }, 2500);
  };

  return (
    <Layout onLogoClick={handleLogoClick}>
      <AnimatePresence mode="wait">
        {(isLoading || showLoader) ? (
          <Loader 
            key="loader" 
            onComplete={() => {
              if (showLoader) {
                setShowLoader(false);
                setIsContentReady(true);
              }
            }}
          />
        ) : isContentReady && (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        )}
      </AnimatePresence>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App; 