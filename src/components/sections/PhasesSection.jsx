import React from 'react';
    import PhaseCard from './PhaseCard';
    import { motion } from 'framer-motion';
    import { useTranslation } from 'react-i18next';
    import { Button } from '@/components/ui/button';
    import { Eye } from 'lucide-react';
    
    const phasesData = [
      {
        titleKey: 'phase1Title',
        subtitleKey: 'phase1Subtitle',
        featureKeys: [
          'phase1Feature1',
          'phase1Feature2',
          'phase1Feature3',
          'phase1Feature4',
          'phase1Feature5',
          'phase1Feature6',
          'phase1Feature7',
          'phase1Feature8',
        ],
        imageAlt: `Luxurious wellness hotel facade with lush green landscaping and serene water features under a clear blue sky in Shinas, Oman.`,
        imageUrl: `/media/39de55f994c40c546a1f30172c911e7c.png`,
        phaseIcon: 'Leaf', 
      },
      {
        titleKey: 'phase2Title',
        subtitleKey: 'phase2Subtitle',
        featureKeys: [
          'phase2Feature1',
          'phase2Feature2',
          'phase2Feature3',
          'phase2Feature4',
          'phase2Feature5',
          'phase2Feature6',
          'phase2Feature7',
        ],
        imageAlt: `Realistic image of a vibrant leisure district with a landmark commercial mall, sports club, and coastal chalets in Shinas, Oman.`,
        imageUrl: `/media/124eeb700c2ec431fdad41ddd81ffe18.png`,
        phaseIcon: 'Waves',
      },
      {
        titleKey: 'phase3Title',
        subtitleKey: 'phase3Subtitle',
        featureKeys: [
          'phase3Feature1',
          'phase3Feature2',
          'phase3Feature3',
          'phase3Feature4',
          'phase3Feature5',
          'phase3Feature6',
          'phase3Feature7',
        ],
        imageAlt: `Sophisticated marina with yachts, a modern hospital with healing gardens, and premium waterfront villas at dusk in Shinas, Oman.`,
        imageUrl: `/media/89097a6ea911f8c07b5391b8962f9bab.png`,
        phaseIcon: 'Anchor',
      },
      {
        titleKey: 'phase4Title',
        subtitleKey: 'phase4Subtitle',
        featureKeys: [
          'phase4Feature1',
          'phase4Feature2',
          'phase4Feature3',
          'phase4Feature4',
          'phase4Feature5',
        ],
        imageAlt: `Immersive Omani heritage village street with traditional architecture, artisan shops, and palm trees at sunset, leading to ultra-premium villas.`,
        imageUrl: `/media/ce46b645cb745faabae9f4c0287bade9.png`,
        phaseIcon: 'Castle',
      },
    ];
    
    const PhasesSection = () => {
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';

      const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
      };
    
      const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}
      };

      return (
        <section id="phases" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-100 dark:from-brand-black/90 dark:to-brand-blue-dark/20 section-textured-bg">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground dark:text-brand-text leading-tight">
                {t('phasesSectionTitle')} <span className="text-gradient-brand">{t('phasesSectionTitleSpan')}</span> {t('phasesSectionTitlePart2')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-3xl mx-auto font-sans">
                {t('phasesSectionSubtitle')}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {phasesData.map((phase, index) => (
                <PhaseCard key={t(phase.titleKey)} phase={phase} index={index} />
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-brand-blue-default text-brand-blue-default hover:bg-brand-blue-default hover:text-brand-text dark:border-brand-blue-light dark:text-brand-blue-light dark:hover:bg-brand-blue-light dark:hover:text-brand-black transition-all duration-300 transform hover:scale-105 shadow-lg font-sans px-10 py-6 rounded-lg"
                onClick={() => document.getElementById('shinas-pearl-masterplan')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('phaseViewMasterplan')} <Eye className={`h-5 w-5 ${isRtl ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default PhasesSection;