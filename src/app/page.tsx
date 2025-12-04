import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <PortfolioShowcase />
      <FeaturedProjects />
      <Clients />
      <Contact />
    </>
  );
}
