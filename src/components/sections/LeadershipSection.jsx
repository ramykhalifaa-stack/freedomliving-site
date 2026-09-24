import React from 'react';
import LeaderCard from './LeaderCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const leadershipTeamData = [
  {
    nameKey: 'leader1Name', // Smith O’Connor
    primaryTitleKey: 'leader1Title',
    email: 'smith.oconnor@freedomliving.ae',
    expertise: 'Strategic financial planning, investment analysis, and financial risk management for major projects with long-term impact.',
    tooltipKey: 'leader1Tooltip', 
  },
  {
    nameKey: 'leader2Name', // Mohamed Ezz
    primaryTitleKey: 'leader2Title',
    email: 'mohamed.ezz@freedomliving.ae',
    expertise: 'Leading advisory processes, designing business development solutions, and strengthening partner relations to drive innovation and long-term growth.',
    tooltipKey: 'leader2Tooltip',
  },
  {
    nameKey: 'leader3Name', // Islam Ikab
    primaryTitleKey: 'leader3Title',
    email: 'islam.ikab@freedomliving.ae',
    expertise: 'Steering strategic vision, developing leadership structures, and designing long-term initiatives to enhance institutional excellence and sustainable growth.',
    tooltipKey: 'leader3Tooltip',
  },
  {
    nameKey: 'leader4Name', // Ramy Khalifa
    primaryTitleKey: 'leader4Title',
    email: 'ramy.khalifa@freedomliving.ae',
    expertise: 'Managing institutional operations, formulating strategic plans, and aligning execution with long-term vision to ensure efficiency and sustainable growth.',
    tooltipKey: 'leader4Tooltip',
  },
];

const LeadershipSection = () => {
  const { t } = useTranslation();
  return (
    <section id="leadership" className="py-16 md:py-24 bg-brand-text/10 dark:bg-brand-black/80 section-textured-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground dark:text-brand-text">
            {t('leadershipSectionTitle')} <span className="text-gradient-brand">{t('leadershipSectionTitleSpan')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-brand-text/80 max-w-2xl mx-auto font-sans">
            {t('leadershipSectionSubtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {leadershipTeamData.map((leader, index) => (
            <LeaderCard key={t(leader.nameKey)} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;