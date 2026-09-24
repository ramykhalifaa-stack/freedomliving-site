import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Landmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const logoUrl = "/media/a74d0751e17aaa0c4f6f9fb929222cbc.png";
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`py-12 px-6 bg-brand-black text-brand-text/80 ${isRtl ? 'text-right' : 'text-left'}`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <div className={`flex items-center mb-4 ${isRtl ? 'justify-end' : 'justify-start'}`}>
            <img src={logoUrl} alt="Freedom Living logo" className={`h-16 md:h-20 w-auto logo-royal-blue ${isRtl ? 'ml-3' : 'mr-3'}`} />
          </div>
          <p className="font-sans text-sm text-brand-text/70">
            {t('footerBrandDescription')}
          </p>
        </div>
        <div>
          <h4 className="font-serif text-xl font-semibold mb-4 text-brand-blue-light">{t('footerExplore')}</h4>
          <ul className="space-y-2 font-sans">
            <li><a href="#hero" className="hover:text-brand-blue-default transition-colors">{t('navHome')}</a></li>
            <li><a href="#shinas-pearl-masterplan" className="hover:text-brand-blue-default transition-colors">{t('navDiscover')}</a></li>
            <li><a href="#investment-opportunities" className="hover:text-brand-blue-default transition-colors">{t('navInvest')}</a></li>
            <li><a href="#contact-us" className="hover:text-brand-blue-default transition-colors">{t('navConnect')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl font-semibold mb-4 text-brand-blue-light">{t('footerOurCommitment')}</h4>
          <div className="space-y-3 font-sans text-sm">
            <p className="flex items-center">
              <Landmark className={`h-5 w-5 text-brand-blue-default flex-shrink-0 ${isRtl ? 'ml-2' : 'mr-2'}`} />
              <span>{t('footerCommitmentHeritage')}</span>
            </p>
             <p className="flex items-center">
              <Shield className={`h-5 w-5 text-brand-blue-default flex-shrink-0 ${isRtl ? 'ml-2' : 'mr-2'}`} />
              <span>{t('footerCommitmentSustainable')}</span>
            </p>
            <a href="mailto:info@freedomliving.ae" className="flex items-center hover:text-brand-blue-default transition-colors">
              <Mail className={`h-5 w-5 text-brand-blue-default flex-shrink-0 ${isRtl ? 'ml-2' : 'mr-2'}`} />
              <span>info@freedomliving.ae</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-blue-dark/30 text-center">
        <p className="font-sans text-sm text-brand-text/60">
          &copy; {new Date().getFullYear()} {t('footerRightsReserved')}
        </p>
         <p className="font-sans text-xs text-brand-text/50 mt-1">
          {t('footerShinasPearl')}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;