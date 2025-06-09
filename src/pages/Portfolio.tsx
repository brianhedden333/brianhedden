
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Fracking the System",
      category: "Documentary Film",
      description: "A political thriller documentary from the front lines of climate justice activism in Colorado, exposing the harms of fracking and the oil industry's tactics to undermine democracy.",
      image: "/lovable-uploads/f3ef629a-c613-4ad4-964b-40cdfd314109.png",
      year: "2023",
      awards: ["Best Documentary - Colorado Film Festival", "Audience Choice Award - Environmental Film Festival"],
      links: {
        website: "#",
        instagram: "#",
        trailer: "#"
      }
    },
    {
      title: "Earth Dog Films",
      category: "Brand Film",
      description: "A video production company dedicated to creating thoughtful media for a better world, working with mission-oriented brands and clients of all sizes.",
      image: "/lovable-uploads/7c4c67d0-38d3-4669-8583-f2261cce4e21.png",
      year: "2023",
      links: {
        vimeo: "#",
        youtube: "#"
      }
    },
    {
      title: "Stump",
      category: "Civic Tech Platform",
      description: "A non-partisan tool for empowering voters and community organizations to participate in democracy in a real-time, social, and impactful way.",
      image: "/lovable-uploads/820b1438-4284-40b9-a3a9-2a3a9be58a52.png",
      year: "2024",
      links: {
        website: "#",
        platform: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of documentary films, brand stories, and civic technology projects that blend artistry with purpose.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-16 h-16" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-red-600 text-sm font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-1 group-hover:text-red-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.awards && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Awards & Recognition</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.awards.map((award, i) => (
                          <li key={i}>• {award}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {Object.entries(project.links).map(([platform, url]) => (
                      <Button
                        key={platform}
                        variant="outline"
                        size="sm"
                        className="text-sm capitalize hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
                        asChild
                      >
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {platform === 'platform' ? 'Visit Platform' : platform}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
