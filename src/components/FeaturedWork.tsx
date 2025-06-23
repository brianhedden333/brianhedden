import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FeaturedWork = () => {
  const projects = [
    {
      title: "Fracking the System",
      description: "A political thriller documentary from the front lines of climate justice activism in Colorado, exposing the harms of fracking, the lengths to which the government is complicit with industrial pollution, and the nefarious tactics the oil and gas industry uses to undermine democratic elections.",
      image: "/lovable-uploads/f3ef629a-c613-4ad4-964b-40cdfd314109.png",
      links: {
        website: "https://www.frackingthesystem.com",
        instagram: "https://www.instagram.com/frackingthesystem",
        facebook: "https://www.facebook.com/frackingthesystem"
      }
    },
    {
      title: "Stump",
      description: "A non-partisan tool for empowering voters and community organizations to participate in democracy in a real-time, social, and impactful way. For citizens we are a free, customizable ballot app and civic action dashboard. For organizations, we are a tool for focusing and growing your impact by facilitating collective action and making government officials aware of public opinion.",
      image: "/lovable-uploads/820b1438-4284-40b9-a3a9-2a3a9be58a52.png",
      links: {
        website: "https://stump.vote",
        instagram: "https://www.instagram.com/stumpvote",
        facebook: "https://www.facebook.com/stumpvote",
        youtube: "https://www.youtube.com/@stumpvote"
      }
    },
    {
      title: "Earth Dog Films",
      description: "A video production company dedicated to creating thoughtful media for a better world. We also work with mission-oriented brands and clients of all sizes to reach their targeted media goals.",
      image: "/lovable-uploads/7c4c67d0-38d3-4669-8583-f2261cce4e21.png",
      links: {
        website: "https://earthdogfilms.com/",
        youtube: "https://www.youtube.com/@earthdogfilms",
        vimeo: "https://vimeo.com/brianhedden"
      }
    }
  ];

  return (
    <section id="featured-work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Storytelling that creates impact through documentary filmmaking, civic technology, and mission-driven media production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border bg-card">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
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
                        {platform}
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
  );
};

export default FeaturedWork;
