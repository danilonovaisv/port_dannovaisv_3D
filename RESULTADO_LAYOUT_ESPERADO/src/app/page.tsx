import React from 'react';
import RootLayout from './layout'; // Importando o layout
import Hero from '../components/home/Hero';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Clients from '../components/home/Clients';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <PortfolioShowcase />
      <FeaturedProjects />
      <Clients />
      <Contact />
    </RootLayout>
  );
}