import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Timer } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  className?: string;
  children: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  className,
  children
}) => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleClick = () => {
    setShowCountdown(true);
    setCountdown(5);
  };

  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showCountdown && countdown === 0) {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setShowCountdown(false);
      setCountdown(5);
    }
  }, [showCountdown, countdown, phoneNumber, message]);

  if (showCountdown) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-primary animate-countdown">
          <Timer className="w-5 h-5" />
          <span className="text-lg font-semibold">
            Redirecting to WhatsApp in {countdown} seconds...
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((5 - countdown) / 5) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 ${className}`}
      size="lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </Button>
  );
};