
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-foreground mb-2">Brian Hedden</h3>
            <p className="text-muted-foreground">
              Documentary filmmaker & civic tech entrepreneur
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Brian Hedden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
