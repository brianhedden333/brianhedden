
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Footer />
    </div>
  );
};

export default Index;
