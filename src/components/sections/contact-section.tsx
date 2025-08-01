import React from 'react';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Users, MessageCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <div className="py-16 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Contact Header */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            GET IN TOUCH WITH REDDY ANNA ONLINE BOOK
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            For Any Queries, Emergencies, Feedback or Complaints. We Are Here To Help You 24/7 With Our Online Services.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/30 backdrop-blur border-border">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round the clock assistance</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur border-border">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">95k+ Players</h3>
              <p className="text-muted-foreground">Trusted by thousands</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur border-border">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">100% Secure</h3>
              <p className="text-muted-foreground">Your data is protected</p>
            </CardContent>
          </Card>
        </div>

        {/* Get Cricket ID Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            GET CRICKET ID IN 2 MIN
          </h3>
          <WhatsAppButton
            phoneNumber="917509860212"
            message="Hi Sir I want Reddy Anna ID"
            className="animate-pulse-glow"
          >
            GET CRICKET ID
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};