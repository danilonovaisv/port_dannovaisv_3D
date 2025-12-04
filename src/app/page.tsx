import React from 'react';
import Hero from '@/components/sections/Hero';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioShowcase />
      <FeaturedProjects />
      <Clients />
      <Contact />
    </>
  );
}
