import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Globe } from 'lucide-react';
    import { useTranslation } from 'react-i18next';
    
    const Navbar = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';
    
      const navItems = [
        { nameKey: 'navHome', href: '#hero' },
        { nameKey: 'navDiscover', href: '#shinas-pearl-masterplan' },
        { nameKey: 'navPhasesInMenu', href: '#phases' },
        { nameKey: 'navInvest', href: '#investment-opportunities' },
        { nameKey: 'navTeamInMenu', href: '#leadership' },
        { nameKey: 'navConnect', href: '#contact-us' },
      ];
    
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/aa999fe9-745f-4b34-a1b2-ef33bc71246b/a74d0751e17aaa0c4f6f9fb929222cbc.png";
    
      const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    
      const changeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
      };
    
      const mobileMenuVariants = {
        closed: { opacity: 0, x: isRtl ? "100%" : "-100%" },
        open: { opacity: 1, x: "0%" }
      };
    
      return (
        <>
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 py-[0.45rem] px-4 md:px-10 transition-all duration-300 glassmorphism"
          >
            <div className="container mx-auto flex justify-between items-center">
              <a href="#hero" className="flex items-center">
                <img src={logoUrl} alt="Freedom Living logo" className="h-16 md:h-20 w-auto transition-all duration-300 logo-royal-blue" />
              </a>
              <div className={`hidden md:flex items-center ${isRtl ? 'space-x-reverse space-x-5 lg:space-x-6' : 'space-x-5 lg:space-x-6'}`}>
                {navItems.map((item, index) => (
                  <a
                    key={item.nameKey}
                    href={item.href}
                    className={`nav-link-custom font-sans text-base whitespace-nowrap ${isRtl && index < navItems.length -1 ? 'ml-5 lg:ml-6' : ''} ${!isRtl && index < navItems.length -1 ? 'mr-5 lg:mr-6' : ''}`}
                  >
                    {t(item.nameKey)}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={changeLanguage}
                  className="lang-switcher-custom font-sans text-base hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Globe className={`${isRtl ? 'ml-2' : 'mr-2'} h-4 w-4`} />
                  <span>{t('languageSwitcher')}</span>
                </Button>
              </div>
              <div className="md:hidden flex items-center">
                 <Button
                  variant="ghost"
                  size="icon"
                  onClick={changeLanguage}
                  className={`lang-switcher-custom hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 ${isRtl ? 'ml-1' : 'mr-1'}`}
                >
                  <Globe className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-brand-nav-link dark:text-brand-blue-light hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </motion.nav>
    
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 z-40 pt-32 p-6 bg-brand-black/95 backdrop-blur-md md:hidden"
              >
                <nav className="flex flex-col space-y-6 items-center mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.nameKey}
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={toggleMobileMenu}
                    >
                      {t(item.nameKey)}
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      );
    };
    
    export default Navbar;