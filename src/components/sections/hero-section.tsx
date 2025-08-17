import React, { useState, useEffect } from 'react';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export const HeroSection = () => {
  const [countdown, setCountdown] = useState(30);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (isActive && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isActive && countdown === 0) {
      const whatsappUrl = `https://wa.me/917509860212?text=${encodeURIComponent("Hi Sir I want Reddy Anna ID")}`;
      window.open(whatsappUrl, '_blank');
      // Reset countdown after redirect
      setCountdown(30);
    }
  }, [countdown, isActive]);

  const handleManualClick = () => {
    setIsActive(false);
    const whatsappUrl = `https://wa.me/917509860212?text=${encodeURIComponent("Hi Sir I want Reddy Anna ID")}`;
    window.open(whatsappUrl, '_blank');
  };

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
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
            <p className="text-base md:text-lg text-muted-foreground">
              🎰 Play Casino • 🎯 Teen Patti • 🃏 Rummy • 🎮 300+ Games
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-8 space-y-6">
          <WhatsAppButton
            phoneNumber="917509860212"
            message="Hi Sir I want Reddy Anna ID"
            className="animate-pulse-glow"
          >
            GET GAMBLING/BETTING ID
          </WhatsAppButton>
          
          {/* Countdown Display */}
          <div className="space-y-4">
            <div className="text-lg md:text-xl text-primary font-semibold animate-countdown">
              Redirecting to WhatsApp for ID in {countdown} seconds...
            </div>
            <div className="w-full max-w-md mx-auto bg-muted rounded-full h-3">
              <div 
                className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 animate-pulse-glow"
                style={{ width: `${((30 - countdown) / 30) * 100}%` }}
              />
            </div>
            <button 
              onClick={handleManualClick}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Click here to go immediately
            </button>
          </div>
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