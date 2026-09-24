import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutFreedomLivingSection from '@/components/sections/AboutFreedomLivingSection';
import GlobalReachSection from '@/components/sections/GlobalReachSection';
import ShinasPearlMasterplanSection from '@/components/sections/ShinasPearlMasterplanSection';
import PhasesSection from '@/components/sections/PhasesSection';
import InvestmentOpportunitiesSection from '@/components/sections/InvestmentOpportunitiesSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import GlobalApproachSection from '@/components/sections/GlobalApproachSection';
import FinalBrandStatementSection from '@/components/sections/FinalBrandStatementSection';
import ContactSection from '@/components/sections/ContactSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutFreedomLivingSection />
      <GlobalReachSection />
      <ShinasPearlMasterplanSection />
      <PhasesSection />
      <InvestmentOpportunitiesSection />
      <LeadershipSection />
      <GlobalApproachSection />
      <FinalBrandStatementSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;