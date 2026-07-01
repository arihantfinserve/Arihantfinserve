import { HeroSection } from '@/components/HeroSection';
import RegistrationTicker from '@/components/RegistrationTicker';
import { TaxCalendar } from '@/components/TaxCalendar';
import HowItWorks from '@/components/HowItWorks';
import ServiceBentoGrid from '@/components/ServiceBentoGrid';
import IndustryExpertise from '@/components/IndustryExpertise';
import AboutTrust from '@/components/AboutTrust';
import { FAQSection } from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <RegistrationTicker />
      <TaxCalendar />
      <ServiceBentoGrid />
      <HowItWorks />
      <IndustryExpertise />
      <AboutTrust />
      <FAQSection />
    </div>
  );
}
