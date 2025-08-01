import React from 'react';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Shield } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Disclaimer */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-bold text-lg">Important Disclaimer</h3>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong>This Website is only for 18+ users.</strong> If you are from Assam, Odisha, Telangana, Nagaland, and Sikkim, please leave this website immediately.
            </p>
            <p>
              <strong>Be aware of fraudsters</strong> - we only deal via website.
            </p>
          </div>
        </div>

        {/* Fantasy Sports Notice */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-primary mb-2">
            <Shield className="w-5 h-5" />
            <span className="font-bold">Fantasy Sports Only</span>
          </div>
          <p className="text-muted-foreground">
            We Only Promote Fantasy Sports. No Real Money Involvement
          </p>
        </div>

        <Separator className="bg-border" />

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-primary transition-colors">
            Terms and Conditions
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-primary transition-colors">
            Game Responsibility
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Reddy Anna Online Book. All rights reserved.</p>
          <p className="mt-1">Working since 2013 - Your trusted fantasy sports partner</p>
        </div>
      </div>
    </footer>
  );
};