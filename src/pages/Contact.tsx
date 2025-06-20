import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xzzgeyzg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
      } else {
        toast({
          title: "⚠️ Submission Failed",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "An error occurred while sending your message.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  // Thank You Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="border-border bg-card">
              <CardContent className="p-12">
                <div className="text-green-600 text-8xl mb-6">✓</div>
                <h1 className="text-4xl font-bold text-foreground mb-6">
                  Thank You!
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Your message has been sent successfully. I appreciate you reaching out and will get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mr-4"
                  >
                    Send Another Message
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                  >
                    Return Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're interested in collaborating on a documentary, need video production services, or want to discuss civic technology, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Me A Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
