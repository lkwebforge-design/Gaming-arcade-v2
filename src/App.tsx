import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InsightsScannerSection } from './components/InsightsScannerSection';
import { ProductLabSection } from './components/ProductLabSection';
import { ShowcaseGallerySection } from './components/ShowcaseGallerySection';
import { WhatsAppCTASection } from './components/WhatsAppCTASection';
import { StudioLocationsSection } from './components/StudioLocationsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ReelModal } from './components/ReelModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DownloadModal } from './components/DownloadModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleOpenWhatsAppHotline = () => {
    const text = encodeURIComponent("Hello AETHERIA Studio! 👋 I would like to schedule a confidential discovery session.");
    window.open(`https://wa.me/15550198374?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#070712] text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppHotline} onOpenDownload={() => setIsDownloadOpen(true)} />
      <main>
        <HeroSection onOpenReel={() => setIsReelOpen(true)} />
        <HowItWorksSection />
        <InsightsScannerSection onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />
        <ProductLabSection onScheduleDemo={handleOpenWhatsAppHotline} />
        <ShowcaseGallerySection onSelectProject={setSelectedProject} />
        <WhatsAppCTASection />
        <StudioLocationsSection />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onOpenWhatsApp={handleOpenWhatsAppHotline} />
      <ReelModal isOpen={isReelOpen} onClose={() => setIsReelOpen(false)} />
      <CaseStudyModal isOpen={isCaseStudyOpen} onClose={() => setIsCaseStudyOpen(false)} onOpenWhatsApp={handleOpenWhatsAppHotline} />
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
      <WhatsAppFloatingButton />
    </div>
  );
}
