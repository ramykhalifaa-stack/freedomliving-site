import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Feather, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GlobalApproachSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section id="global-approach" className="py-16 md:py-24 bg-brand-text/5 dark:bg-brand-black/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <Feather className="h-16 w-16 text-brand-blue-default mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground dark:text-brand-text">
            {t('globalApproachTitle')} <span className="text-gradient-brand">{t('globalApproachTitleSpan')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-3xl mx-auto font-sans">
            {t('globalApproachSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
             <img  
                className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[450px]" 
                alt="A montage of traditional Omani fort architecture blended with modern sustainable building designs."
               src="/media/unsplash-photo-1639836290656-44b588c80492.jpg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={isRtl ? 'text-right' : 'text-left'}
          >
            <div className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-lg">
              <ShieldCheck className={`h-10 w-10 text-brand-blue-default mb-4 ${isRtl ? 'ml-auto' : ''}`} />
              <p className="font-sans text-xl md:text-2xl text-foreground dark:text-brand-text mb-6 leading-relaxed">
                {t('globalApproachQuote')}
              </p>
              <p className="font-sans text-muted-foreground dark:text-brand-text/70">
                {t('globalApproachParagraph')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalApproachSection;