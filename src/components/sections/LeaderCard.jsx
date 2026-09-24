import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LeaderCard = ({ leader, index }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const [showBio, setShowBio] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" }
    }
  };
  
  const leaderName = t(leader.nameKey);
  const leaderTitle = t(leader.primaryTitleKey);
  const leaderTooltip = isRtl && leader.tooltipKey ? t(leader.tooltipKey) : leader.expertise;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative p-6 rounded-xl shadow-lg hover:shadow-card-hover transition-all duration-400 bg-card dark:bg-card/80 text-center flex flex-col items-center justify-between h-full group w-full max-w-sm mx-auto"
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <div className="w-full">
        <h3 className={`text-xl md:text-2xl font-serif font-semibold text-foreground dark:text-brand-text mb-1 text-center`}>{leaderName}</h3>
        <p className={`text-md text-brand-blue-default dark:text-brand-blue-light font-semibold mb-3 text-center`}>{leaderTitle}</p>
      </div>
      
      <div className={`space-y-2 text-xs w-full flex flex-col items-center mt-auto`}>
        {leader.email && (
          <a 
            href={`mailto:${leader.email}`} 
            className={`flex items-center text-muted-foreground dark:text-brand-text/70 hover:text-brand-blue-default dark:hover:text-brand-blue-light transition-colors break-all`}
          >
            <Mail className={`h-4 w-4 flex-shrink-0 ${isRtl ? 'ml-2' : 'mr-2'}`} />
            <span>{leader.email}</span>
          </a>
        )}
      </div>
      
      <AnimatePresence>
        {showBio && leaderTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-brand-black text-brand-text rounded-lg shadow-xl text-xs z-10 w-full text-center"
          >
            <Info className={`h-4 w-4 mx-auto mb-1 text-brand-blue-light`} />
            {leaderTooltip}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-blue-light/50 transition-all duration-300 pointer-events-none"></div>
      <motion.div 
        className="absolute inset-0 bg-brand-blue-default/5 dark:bg-brand-blue-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
       />
    </motion.div>
  );
};

export default LeaderCard;