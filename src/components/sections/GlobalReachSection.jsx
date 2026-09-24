import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Leaf, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GlobalReachSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const locations = [
    { nameKey: 'globalReachUKName', descKey: 'globalReachUKDesc', icon: <MapPin className="h-8 w-8 text-brand-blue-light" /> },
    { nameKey: 'globalReachUAEName', descKey: 'globalReachUAEDesc', icon: <MapPin className="h-8 w-8 text-brand-blue-default" /> },
    { nameKey: 'globalReachOmanName', descKey: 'globalReachOmanDesc', icon: <MapPin className="h-8 w-8 text-brand-blue-dark" /> },
  ];

  return (
    <section id="global-reach" className="py-16 md:py-24 bg-background dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground dark:text-brand-text">
            {t('globalReachTitle')} <span className="text-gradient-brand">{t('globalReachTitleSpan')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-3xl mx-auto font-sans">
            {t('globalReachSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((loc, index) => (
            <motion.div
              key={t(loc.nameKey)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card dark:bg-card/80 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-brand-blue-default/10 dark:bg-brand-blue-light/10 rounded-full mb-4">
                {loc.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-foreground dark:text-brand-text">{t(loc.nameKey)}</h3>
              <p className="font-sans text-sm text-muted-foreground dark:text-brand-text/70">{t(loc.descKey)}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className={`inline-flex items-center bg-brand-blue-default/5 dark:bg-brand-blue-light/5 p-4 rounded-lg ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                <HeartHandshake className={`h-14 w-14 text-brand-blue-default ${isRtl ? 'ml-4' : 'mr-4'}`} />
                <p className="font-sans text-md text-foreground dark:text-brand-text">
                {t('globalReachCommitment')}
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalReachSection;