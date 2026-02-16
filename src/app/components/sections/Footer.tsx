import { useEffect, useRef, useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative bg-[#1a1a1a] py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        {/* TOP HEADER AREA */}
        <div className="mb-16 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            {/* Large headline */}
            <a href="#contact" >
              <h2 className="text-[64px] lg:text-[192px] xl:text-[224px] font-normal text-white leading-none mb-6 lg:mb-0">
              Let's Talk
            </h2>
            </a>
            
            
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

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-x-16 gap-y-12 lg:gap-12 mb-16">
          
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
            <div className="mb-6 lg:mb-0">
              <h3 className="text-[18px] lg:text-[20px] font-bold mb-3 text-white">Follow us</h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/company/melangedigital/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/melangedigital.in/" 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* GLOBAL PRESENCE - Mobile only, below Follow Us */}
            <div className="lg:hidden">
              <h3 className="text-[18px] font-bold mb-3 text-white">Global Presence</h3>
              <ul className="space-y-1.5">
                <li className="text-white/70 text-[15px]">
                  United Kingdom
                </li>
                <li className="text-white/70 text-[15px]">
                  United Arab Emirates
                </li>
                <li className="text-white/70 text-[15px]">
                  Singapore
                </li>
                <li className="text-white/70 text-[15px]">
                  India
                </li>
                <li className="text-white/70 text-[15px]">
                  Africa
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 2 — COMPANY & CONTACT */}
          <div className="space-y-6 pl-8 lg:pl-0">
            {/* COMPANY */}
            <div>
              <h3 className="text-[18px] lg:text-[20px] font-bold mb-3 lg:mb-4 text-white">Company</h3>
              <ul className="space-y-1.5 lg:space-y-2">
                <li>
                  <a 
                    href="#About" 
                    className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#Work" 
                    className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-white/70 hover:text-white transition-colors text-[15px] lg:text-[19px] whitespace-nowrap"
                  >
                    Contact Us
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
            </div>

            {/* EMAIL US */}
            <div>
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
          </div>

          {/* COLUMN 3 — GLOBAL PRESENCE (Desktop only) */}
          <div className="hidden lg:block">
            <h3 className="text-[18px] lg:text-[20px] font-bold mb-3 lg:mb-4 text-white">Global Presence</h3>
            <ul className="space-y-1.5 lg:space-y-2">
              <li className="text-white/70 text-[15px] lg:text-[19px]">
                United Kingdom
              </li>
              <li className="text-white/70 text-[15px] lg:text-[19px]">
                United Arab Emirates
              </li>
              <li className="text-white/70 text-[15px] lg:text-[19px]">
                Singapore
              </li>
              <li className="text-white/70 text-[15px] lg:text-[19px]">
                India
              </li>
              <li className="text-white/70 text-[15px] lg:text-[19px]">
                Africa
              </li>
            </ul>
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