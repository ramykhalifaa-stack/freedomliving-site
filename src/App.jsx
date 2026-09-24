import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import { Toaster } from '@/components/ui/toaster';
import { MotionConfig } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  return (
    <MotionConfig transition={{ ease: "anticipate", duration: 0.7 }}>
      <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-brand-black dark:text-brand-text">
        <Navbar />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
        <Toaster />
      </div>
    </MotionConfig>
  );
}

export default App;