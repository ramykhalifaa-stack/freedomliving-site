import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowDown } from 'lucide-react';
    import { useTranslation } from 'react-i18next';
    
    const HeroSection = () => {
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';
    
      const heroImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/aa999fe9-745f-4b34-a1b2-ef33bc71246b/f74d3aee315d9340e592d94e3c7124c8.png";
    
      return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img  
                src={heroImageUrl}
                alt="Luxurious coastal development at golden hour, featuring elegant Mediterranean-Omani architecture, private pools, and a serene canal amidst lush landscaping."
                className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-brand-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-brand-black/20"></div>
          </div>
          
          <motion.div 
            className="relative z-10 p-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-brand-text shadow-text ${isRtl ? 'px-2 sm:px-4' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
            >
              {t('heroMainTitle')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl font-sans mb-12 text-brand-text/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="cta-glass-effect text-brand-text-dark font-bold rounded-[12px] shadow-lg hover:shadow-xl hover:bg-gray-100/90 transition-all duration-300 text-base px-10 py-6 dark:text-brand-text dark:hover:bg-gray-700/50"
                onClick={() => document.getElementById('shinas-pearl-masterplan')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('heroButton')}
              </Button>
            </motion.div>
          </motion.div>
    
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", repeatDelay: 1 }}
          >
            <ArrowDown className="h-8 w-8 text-brand-text" />
          </motion.div>
        </section>
      );
    };
    
    export default HeroSection;