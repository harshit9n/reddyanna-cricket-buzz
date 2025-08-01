import React from 'react';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Brand Name */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            Reddy Anna Online Book
          </h1>
          <div className="h-1 bg-gradient-primary rounded-full max-w-md mx-auto" />
        </div>

        {/* Tagline */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            We Offer Best And Genuine Platform
          </p>
          <p className="text-lg md:text-xl text-primary font-semibold">
            Minimum ID Starting from 100₹
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-8">
          <WhatsAppButton
            phoneNumber="917509860212"
            message="Hi Sir I want Reddy Anna ID"
            className="animate-pulse-glow"
          >
            GET CRICKET ID
          </WhatsAppButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};