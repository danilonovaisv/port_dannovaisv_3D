import SiteHeader from '@/components/layout/SiteHeader';
import HeroSection from '@/components/home/HeroSection';
import ManifestoSection from '@/components/home/ManifestoSection';
import PortfolioShowcaseSection from '@/components/home/PortfolioShowcaseSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import ClientsSection from '@/components/home/ClientsSection';
import ContactSection from '@/components/home/ContactSection';
import SiteFooter from '@/components/layout/SiteFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <SiteHeader />
      {/* padding-top para compensar o header fixo / padding-bottom para o footer fixo */}
      <main className="flex-1 pt-20 pb-28">
        <HeroSection />
        <ManifestoSection />
        <PortfolioShowcaseSection />
        <FeaturedProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
