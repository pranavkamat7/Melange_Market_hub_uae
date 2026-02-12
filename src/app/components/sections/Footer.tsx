import { Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';

export function Footer() {
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <footer className="relative bg-[#1a1a1a] py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        {/* TOP HEADER AREA */}
        <div className="mb-16 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            {/* Large headline */}
            <h2 className="text-[64px] lg:text-[192px] xl:text-[224px] font-normal text-white leading-none mb-6 lg:mb-0">
              Let's Talk
            </h2>
            
            {/* CTA Button - Desktop Only */}
            <div className="hidden lg:block lg:pb-8">
              <a
                href="https://calendly.com/julien-melangedigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton className="min-w-[180px]">
                  Get in Touch
                </PrimaryButton>
              </a>
            </div>
          </div>

          {/* CTA Button - Mobile Only */}
          <div className="lg:hidden">
            <a
              href="https://calendly.com/julien-melangedigital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton className="min-w-[180px]">
                Get in Touch
              </PrimaryButton>
            </a>
          </div>
        </div>

        {/* FOOTER COLUMNS - 2 COLUMNS ON MOBILE, 4 ON DESKTOP */}
        <div className="grid grid-cols-[1.5fr_1fr] lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
          
          {/* COLUMN 1 — OUR SERVICES */}
          <div>
            <h3 className="text-[18px] lg:text-[20px] font-bold mb-3 lg:mb-4 text-white">Our Services</h3>
            <ul className="space-y-1.5 lg:space-y-2 mb-6">
              <li>
                <a 
                  href="https://melangedigital.co/services/brand-strategy" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Brand Strategy & Planning
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/services/influencer-marketing" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Influencer Marketing
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/services/immersive-brand-storytelling" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Immersive brand storytelling
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/services/design-and-development" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Design & Development
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/services/content-strategy-and-production" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Content Strategy & Production
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/services/pr-and-outreach" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  PR, IPs & Outreach
                </a>
              </li>
            </ul>

            {/* FOLLOW US SECTION */}
            <div>
              <h3 className="text-[18px] lg:text-[20px] font-bold mb-3 text-white">Follow us</h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/company/melangedigital/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Visit Mélange Digital on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Visit Mélange Digital on Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2 — COMPANY */}
          <div>
            <h3 className="text-[18px] lg:text-[20px] font-bold mb-3 lg:mb-4 text-white">Company</h3>
            <ul className="space-y-1.5 lg:space-y-2 mb-5 lg:mb-6">
              <li>
                <a 
                  href="https://melangedigital.co/about" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/work" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/blogs" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a 
                  href="https://melangedigital.co/careers" 
                  className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                >
                  Careers
                </a>
              </li>
            </ul>

            {/* EMAIL US CTA BUTTON - Mobile gets button, Desktop gets text */}
            <div className="mb-4 lg:mb-6">
              <div className="lg:hidden">
                <a 
                  href="mailto:hello@melangedigital.co"
                  className="group inline-flex items-center justify-center w-[100px] px-4 py-2.5 rounded-lg bg-black/10 border border-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(213,64,255,0.15)]"
                >
                  <span className="text-white text-sm font-medium">Email Us</span>
                </a>
              </div>
              <div className="hidden lg:block">
                <h3 className="text-[18px] lg:text-[20px] font-bold mb-2 text-white">Email Us</h3>
                <a 
                  href="mailto:hello@melangedigital.co" 
                  className="text-white/70 hover:text-white transition-colors text-[18px] lg:text-[19px]"
                >
                  hello@melangedigital.co
                </a>
              </div>
            </div>

            {/* CALL US CTA BUTTON - Mobile gets button, Desktop gets text */}
            <div>
              <div className="lg:hidden">
                <a 
                  href="tel:+971528008051"
                  className="group inline-flex items-center justify-center w-[100px] px-4 py-2.5 rounded-lg bg-black/10 border border-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(213,64,255,0.15)]"
                >
                  <span className="text-white text-sm font-medium">Call Us</span>
                </a>
              </div>
              <div className="hidden lg:block">
                <h3 className="text-[18px] lg:text-[20px] font-bold mb-2 text-white">Call Us</h3>
                <a 
                  href="tel:+971528008051" 
                  className="text-white/70 hover:text-white transition-colors text-[18px] lg:text-[19px]"
                >
                  +971-528-008051
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: COLUMN 3 — GLOBAL PRESENCE LEFT */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-semibold mb-1.5 text-[18px] lg:text-[19px]">GCC Middle East (UAE)</h4>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                  Business Center, Sharjah Publishing City Free Zone<br />
                  Sharjah, UAE
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-1.5 text-[18px] lg:text-[19px]">Singapore (Singapore)</h4>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                  10 Anson Road, #22-02A<br />
                  International Plaza, 079903
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-1.5 text-[18px] lg:text-[19px]">India (Mumbai)</h4>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                  302 The Trees Godrej, Vikhroli East<br />
                  Mumbai 400079
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: COLUMN 4 — GLOBAL PRESENCE RIGHT */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-semibold mb-1.5 text-[18px] lg:text-[19px]">United Kingdom (London)</h4>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                  22–6 Millennium Drive<br />
                  London E14 3GF
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-1.5 text-[18px] lg:text-[19px]">India (Goa)</h4>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                  B12 Silvio Heights, St. Inez Road<br />
                  Panaji 403001
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-1.5 text-[18px] lg:text-[19px]">India (Delhi NCR)</h4>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                  B54 Sector 51, Noida<br />
                  Uttar Pradesh 201303
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE ONLY: GLOBAL PRESENCE 2-COLUMN GRID */}
        <div className="lg:hidden grid grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-semibold mb-1.5 text-[18px]">GCC Middle East (UAE)</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">
                Business Center, Sharjah Publishing City Free Zone<br />
                Sharjah, UAE
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-1.5 text-[18px]">Singapore (Singapore)</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">
                10 Anson Road, #22-02A<br />
                International Plaza, 079903
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-1.5 text-[18px]">India (Mumbai)</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">
                302 The Trees Godrej, Vikhroli East<br />
                Mumbai 400079
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-white font-semibold mb-1.5 text-[18px]">United Kingdom (London)</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">
                22–6 Millennium Drive<br />
                London E14 3GF
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-1.5 text-[18px]">India (Goa)</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">
                B12 Silvio Heights, St. Inez Road<br />
                Panaji 403001
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-1.5 text-[18px]">India (Delhi NCR)</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">
                B54 Sector 51, Noida<br />
                Uttar Pradesh 201303
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="border-t border-white/10 pt-8">
          {/* Legal Links - Vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm">
              <a href="https://melangedigital.co/terms-of-service" className="text-white/60 hover:text-white/90 transition-colors">
                Terms of Service
              </a>
              <a href="https://melangedigital.co/privacy-policy" className="text-white/60 hover:text-white/90 transition-colors">
                Privacy Policy
              </a>
              <a href="https://melangedigital.co/cancellation-and-refund-policy" className="text-white/60 hover:text-white/90 transition-colors">
                Cancellation & Refund Policy
              </a>
              <a href="https://melangedigital.co/cookie-policy" className="text-white/60 hover:text-white/90 transition-colors">
                Cookie Policy
              </a>
            </div>
            
            {/* Copyright - desktop only */}
            <div className="hidden lg:block text-white/60 text-sm whitespace-nowrap">
              © 2026 Mélange Digital. All rights reserved.
            </div>
          </div>

          {/* Mobile only copyright at bottom */}
          <div className="lg:hidden text-white/60 text-sm mt-6">
            © 2026 Mélange Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}