import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutFreedomLivingSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section id="about-freedom-living" className="py-16 md:py-24 bg-brand-text/5 dark:bg-brand-black/80">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Building className="h-16 w-16 text-brand-blue-default mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground dark:text-brand-text">
            {t('aboutTitle')} <span className="text-gradient-brand">{t('aboutTitleSpan')}</span>
          </h2>
          <p className="text-lg md:text-xl font-sans text-muted-foreground dark:text-brand-text/80 max-w-3xl mx-auto italic">
            {t('aboutQuote')}
          </p>
        </motion.div>

        <motion.div 
          className={`mt-12 grid md:grid-cols-2 gap-8 items-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={isRtl ? 'md:order-2' : ''}>
            <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground dark:text-brand-text">{t('aboutPhilosophyTitle')}</h3>
            <p className="font-sans text-muted-foreground dark:text-brand-text/70 mb-4">
              {t('aboutPhilosophyP1')}
            </p>
            <p className="font-sans text-muted-foreground dark:text-brand-text/70">
              {t('aboutPhilosophyP2')}
            </p>
          </div>
          <div className={`flex justify-center ${isRtl ? 'md:order-1' : ''}`}>
            <img  
              className="rounded-lg shadow-xl object-cover h-80 w-full md:w-auto max-w-md" 
              alt="Arched corridor leading to the sea, lit by lanterns, reflecting heritage and timelessness."
             src="/media/201d3da184be4c1cda1bae798928b9d4.png" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFreedomLivingSection;