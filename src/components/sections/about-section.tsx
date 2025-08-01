import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Trophy, Clock } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Trophy,
      title: "BEST SPORTS ID PROVIDER",
      description: "We provide best fantasy sports id to our players who want to play games with there skills."
    },
    {
      icon: Clock,
      title: "WORKING SINCE 2013",
      description: "We Are Working in This Field Since 2013, So that we have lot of more experience than any other newcomers."
    },
    {
      icon: Shield,
      title: "HIGH SECURITY",
      description: "Security is our Top priority and hence your data and information is safe and is not shared at any Point!"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            ABOUT REDDY ANNA ONLINE BOOK
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Reddy Anna Online Book is responsible ID promoter. We deals in all kinds of sports like online cricket id and several types of gaming sports IDs, Play games with our sports ids. We helped 95k+ players to find best online games.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            FEATURES AND BENEFITS
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide best fantasy sports id to our players who want to play games with there skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};