import { Menu } from 'lucide-react';
import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';
const melangeLogoImage = '/assets_webp/melange-logo.webp';

interface HeaderProps {
  isScrollingUp: boolean;
  isInactive: boolean;
  hasInteracted: boolean;
  onMenuToggle: () => void;
}

export function Header({ isScrollingUp, isInactive, hasInteracted, onMenuToggle }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        hasInteracted && isScrollingUp && !isInactive ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-white shadow-sm`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={melangeLogoImage} 
            alt="Mélange Digital" 
            className="h-16 w-auto"
            width="64"
            height="64"
            loading="eager"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-[#0F172A] hover:text-[#B44CFF] transition-colors">
            Services
          </a>
          <a href="#work" className="text-[#0F172A] hover:text-[#B44CFF] transition-colors">
            Work
          </a>
          <a href="#about" className="text-[#0F172A] hover:text-[#B44CFF] transition-colors">
            About
          </a>
          <a href="#insights" className="text-[#0F172A] hover:text-[#B44CFF] transition-colors">
            Insights
          </a>
          <a href="#careers" className="text-[#0F172A] hover:text-[#B44CFF] transition-colors">
            Careers
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <PrimaryButton variant="dark">Contact Us</PrimaryButton>
          </div>
          <button
            className="md:hidden text-[#0F172A]"
            onClick={onMenuToggle}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}