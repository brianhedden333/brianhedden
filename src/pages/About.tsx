
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About Brian
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                An award-winning documentary filmmaker and civic tech entrepreneur dedicated to creating meaningful change through the power of storytelling and technology.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img 
                  src="/lovable-uploads/a71f6c8c-359b-42dc-8158-e6f1e1ae5980.png" 
                  alt="Brian Hedden"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-8">My Story</h2>
            
            <div className="text-muted-foreground space-y-6 leading-relaxed">
              <p>
                I'm a documentary filmmaker, video editor, and civic tech entrepreneur who believes in the power of storytelling to create positive change. My work sits at the intersection of art and activism, using cinema and technology to amplify voices and drive social impact.
              </p>
              
              <p>
                As the founder of Earth Dog Films, I've dedicated my career to creating thoughtful media for a better world. My documentary "Fracking the System" exposed the environmental and political implications of fracking in Colorado, earning recognition at multiple film festivals and contributing to important conversations about climate justice.
              </p>
              
              <p>
                Beyond filmmaking, I'm passionate about civic engagement and democratic participation. Through Stump, a civic tech platform I co-founded, I work to empower voters and community organizations with tools that make democracy more accessible, social, and impactful.
              </p>
              
              <p>
                My approach combines cinematic storytelling with purpose-driven technology, always asking: How can we use these tools to serve all beings and future generations? Whether I'm behind the camera documenting social justice movements or coding solutions for civic engagement, this question guides everything I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Documentary Filmmaking</h3>
              <p className="text-muted-foreground">Award-winning documentaries focusing on social justice and environmental issues.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-5.568 3.568-5.568-3.568V6.432L12 10l5.568-3.568v1.728z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Video Editing</h3>
              <p className="text-muted-foreground">Expert post-production skills with advanced editing and color grading.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Civic Technology</h3>
              <p className="text-muted-foreground">Building platforms that enhance democratic participation and civic engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Let's Create Something Meaningful Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always interested in collaborating on projects that can make a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg" asChild>
              <a href="/contact">
                Get In Touch
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg hover:bg-red-600 hover:text-white hover:border-red-600" asChild>
              <a href="#" download>
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
