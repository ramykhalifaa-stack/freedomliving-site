import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { TrendingUp, Home, Briefcase } from 'lucide-react';
    import { useTranslation } from 'react-i18next';
    
    const InvestmentOpportunitiesSection = () => {
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';
    
      const opportunities = [
        {
          icon: <Home className={`h-10 w-10 mb-4 ${isRtl ? 'ml-auto' : 'mr-auto'} text-brand-blue-default`} />,
          titleKey: 'investmentOpp1Title',
          descriptionKey: 'investmentOpp1Desc',
          ctaKey: 'investmentOpp1Cta',
        },
        {
          icon: <Briefcase className={`h-10 w-10 mb-4 ${isRtl ? 'ml-auto' : 'mr-auto'} text-brand-blue-default`} />,
          titleKey: 'investmentOpp2Title',
          descriptionKey: 'investmentOpp2Desc',
          ctaKey: 'investmentOpp2Cta',
        },
        {
          icon: <TrendingUp className={`h-10 w-10 mb-4 ${isRtl ? 'ml-auto' : 'mr-auto'} text-brand-blue-default`} />,
          titleKey: 'investmentOpp3Title',
          descriptionKey: 'investmentOpp3Desc',
          ctaKey: 'investmentOpp3Cta',
        },
      ];
    
      const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }),
      };
    
      return (
        <section id="investment-opportunities" className="py-16 md:py-24 bg-gradient-to-b from-blue-100 via-slate-50 to-white dark:from-brand-blue-dark/20 dark:via-brand-black/90 dark:to-brand-black section-textured-bg">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <TrendingUp className="h-16 w-16 text-brand-blue-default mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground dark:text-brand-text">
                {t('investmentOpportunitiesTitle')} <span className="text-gradient-brand">{t('investmentOpportunitiesTitleSpan')}</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-3xl mx-auto font-sans">
                {t('investmentOpportunitiesSubtitle')}
              </p>
            </motion.div>
    
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {opportunities.map((opp, index) => (
                <motion.custom
                  key={opp.titleKey}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex"
                >
                  <Card className={`w-full flex flex-col ${isRtl ? 'text-right' : 'text-left'} bg-card/80 dark:bg-card/60 backdrop-blur-md shadow-xl hover:shadow-card-hover transition-all duration-300`}>
                    <CardHeader>
                      {opp.icon}
                      <CardTitle className="!text-2xl font-serif text-foreground dark:text-brand-text">{t(opp.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-muted-foreground dark:text-brand-text/70 font-sans">
                        {t(opp.descriptionKey)}
                      </CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button 
                            variant="outline" 
                            className="w-full border-brand-blue-default text-brand-blue-default hover:bg-brand-blue-default hover:text-brand-text dark:border-brand-blue-light dark:text-brand-blue-light dark:hover:bg-brand-blue-light dark:hover:text-brand-black font-sans"
                            onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t(opp.ctaKey)}
                        </Button>
                    </div>
                  </Card>
                </motion.custom>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default InvestmentOpportunitiesSection;