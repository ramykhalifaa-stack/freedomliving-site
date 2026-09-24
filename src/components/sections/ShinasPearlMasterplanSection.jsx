import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Eye, Gem, Layers } from 'lucide-react';
    import { useTranslation } from 'react-i18next';
    
    const ShinasPearlMasterplanSection = () => {
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';
    
      return (
        <section id="shinas-pearl-masterplan" className="py-16 md:py-24 bg-brand-text/10 dark:bg-brand-black/90">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 md:mb-16"
            >
              <Gem className="h-16 w-16 text-brand-blue-default mx-auto mb-6" />
              <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground dark:text-brand-text ${isRtl ? 'pb-1' : ''}`}>
                {t('shinasMasterplanTitle1')} <span className="text-brand-text-dark dark:text-brand-text">{t('shinasMasterplanTitle2')}</span> <span className="text-gradient-brand">{t('shinasMasterplanTitleSpan')}</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-3xl mx-auto font-sans">
                {t('shinasMasterplanSubtitle')}
              </p>
            </motion.div>
    
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`p-6 bg-card dark:bg-card/80 rounded-xl shadow-lg ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <Layers className={`h-10 w-10 text-brand-blue-default mb-3 ${isRtl ? 'ml-auto' : 'mr-auto'}`} />
                <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground dark:text-brand-text">{t('shinasMasterplanCard1Title')}</h3>
                <p className="font-sans text-muted-foreground dark:text-brand-text/70">
                  {t('shinasMasterplanCard1Desc')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`p-6 bg-card dark:bg-card/80 rounded-xl shadow-lg ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <Eye className={`h-10 w-10 text-brand-blue-default mb-3 ${isRtl ? 'ml-auto' : 'mr-auto'}`} />
                <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground dark:text-brand-text">{t('shinasMasterplanCard2Title')}</h3>
                <p className="font-sans text-muted-foreground dark:text-brand-text/70">
                  {t('shinasMasterplanCard2Desc')}
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-brand-blue-default text-brand-text hover:bg-brand-blue-light hover:text-brand-text-dark transition-all duration-300 transform hover:scale-105 shadow-lg font-sans"
                onClick={() => document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('shinasMasterplanButton')} <Layers className={`h-5 w-5 ${isRtl ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default ShinasPearlMasterplanSection;