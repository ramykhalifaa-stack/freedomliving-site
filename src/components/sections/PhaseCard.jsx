import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Star, Building2, Home, Landmark, Drama, Palmtree, Network, ShoppingCart, Target, Tent, Trees, Zap, HeartPulse, Anchor, Ship, Award, Leaf, Users, Palette, Sparkles, Route, CircleDot, ShieldCheck, Music2, Gamepad2, Globe2, Lightbulb, Flower2, Sunrise, Building, VenetianMask, Dices, Waves, CircuitBoard, Castle, Aperture as Archway } from 'lucide-react';
    import { useTranslation } from 'react-i18next';
    
    const PhaseCard = ({ phase, index }) => {
      const { t, i18n } = useTranslation();
      const isRtl = i18n.dir() === 'rtl';
    
      const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: { duration: 0.7, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }
        }
      };
    
      const iconClasses = `h-5 w-5 text-brand-blue-default dark:text-brand-blue-light flex-shrink-0 ${isRtl ? 'ml-3' : 'mr-3'} mt-1`;
    
      const featureIconMap = {
        'phase1Feature1': <Star className={iconClasses} />, 
        'phase1Feature2': <Building2 className={iconClasses} />, 
        'phase1Feature3': <Home className={iconClasses} />, 
        'phase1Feature4': <Landmark className={iconClasses} />, 
        'phase1Feature5': <Drama className={iconClasses} />, 
        'phase1Feature6': <Palmtree className={iconClasses} />, 
        'phase1Feature7': <Route className={iconClasses} />, 
        'phase1Feature8': <CircuitBoard className={iconClasses} />, 
        
        'phase2Feature1': <Star className={iconClasses} />, 
        'phase2Feature2': <ShoppingCart className={iconClasses} />, 
        'phase2Feature3': <Target className={iconClasses} />, 
        'phase2Feature4': <Home className={iconClasses} />, 
        'phase2Feature5': <Tent className={iconClasses} />, 
        'phase2Feature6': <Trees className={iconClasses} />, 
        'phase2Feature7': <Network className={iconClasses} />, 
    
        'phase3Feature1': <HeartPulse className={iconClasses} />, 
        'phase3Feature2': <Anchor className={iconClasses} />, 
        'phase3Feature3': <Building2 className={iconClasses} />, 
        'phase3Feature4': <Home className={iconClasses} />,  
        'phase3Feature5': <Building className={iconClasses} />, 
        'phase3Feature6': <Leaf className={iconClasses} />, 
        'phase3Feature7': <ShieldCheck className={iconClasses} />, 
    
        'phase4Feature1': <Castle className={iconClasses} />, 
        'phase4Feature2': <Waves className={iconClasses} />, 
        'phase4Feature3': <Building2 className={iconClasses} />, 
        'phase4Feature4': <Users className={iconClasses} />, 
        'phase4Feature5': <Sunrise className={iconClasses} />, 
      };
    
      const DefaultIcon = <CircleDot className={iconClasses} />;
    
      return (
        <motion.div
          variants={cardVariants}
          className="h-full w-full"
        >
          <Card className={`h-full flex flex-col overflow-hidden bg-white/80 dark:bg-brand-black/70 backdrop-blur-lg shadow-xl hover:shadow-card-hover transition-all duration-400 border border-brand-blue-light/20 dark:border-brand-blue-dark/40 rounded-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl group">
              <img
                src={phase.imageUrl}
                alt={t(phase.imageAlt) || t(phase.titleKey)}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
            </div>
            <CardHeader className="pt-5 pb-3 px-5 md:px-6">
              <CardTitle className="!text-2xl lg:!text-3xl font-serif font-bold text-brand-blue-dark dark:text-brand-blue-light leading-tight">
                {t(phase.titleKey)}
              </CardTitle>
              <CardDescription className="font-sans text-base text-muted-foreground dark:text-brand-text/70 pt-1">
                {t(phase.subtitleKey)}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-5 md:p-6 space-y-3">
              <ul className="space-y-3">
                {phase.featureKeys.map((featureKey) => {
                  const IconComponent = featureIconMap[featureKey] || DefaultIcon;
                  return (
                    <motion.li 
                      key={featureKey} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {IconComponent}
                      <span className="font-sans text-sm text-foreground/90 dark:text-brand-text/85">{t(featureKey)}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      );
    };
    
    export default PhaseCard;