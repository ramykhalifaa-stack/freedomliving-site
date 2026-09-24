import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinalBrandStatementSection = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section id="brand-statement" className="py-16 md:py-24 bg-background dark:bg-brand-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <Sparkles className="h-16 w-16 text-brand-blue-default mx-auto mb-6" />
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground dark:text-brand-text ${isRtl ? 'pb-1 px-2' : ''}`}>
            {t('finalBrandStatementTitle')} <span className="text-gradient-brand">{t('finalBrandStatementTitleSpan')}</span>
          </h2>
          <p className="text-lg md:text-xl font-sans max-w-3xl mx-auto text-muted-foreground dark:text-brand-text/90">
            {t('finalBrandStatementParagraph')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalBrandStatementSection;