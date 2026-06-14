import LandingHeader from '../components/landing/LandingHeader';
import LandingFooter from '../components/landing/LandingFooter';
import PinnedStorySection from '../components/landing/PinnedStorySection';
import MarqueeTicker from '../components/landing/MarqueeTicker';
import PillarsSection from '../components/landing/PillarsSection';
import DemoSection from '../components/landing/DemoSection';
import SecuritySection from '../components/landing/SecuritySection';
import FAQSection from '../components/landing/FAQSection';
import FinalCTASection from '../components/landing/FinalCTASection';

/** Public portfolio landing — no backend required */
export default function Landing() {
  return (
    <div className="landing-page scale-theme">
      <LandingHeader />
      <main>
        <PinnedStorySection />
        <MarqueeTicker />
        <PillarsSection />
        <DemoSection />
        <SecuritySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
