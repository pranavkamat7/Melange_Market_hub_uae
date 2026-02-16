import { Menu } from "lucide-react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";
import { motion } from "framer-motion";

import melangeLogoImage from "@/assets/logo.png";

interface HeaderProps {
  isScrollingUp: boolean;
  isInactive: boolean;
  hasInteracted: boolean;
  onMenuToggle: () => void;
}

export function Header({
  isScrollingUp,
  isInactive,
  hasInteracted,
  onMenuToggle,
}: HeaderProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        hasInteracted && isScrollingUp && !isInactive
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center cursor-pointer"
        >
          <img
            src={melangeLogoImage}
            alt="Mélange Digital"
            className="h-16 w-auto"
            width="64"
            height="64"
            loading="eager"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Services", "Work", "About", "Careers"].map((item, index) => (
            <a
              key={index}
              href={
                item === "Work"
                  ? "#Work"
                  : item === "Careers"
                    ? "https://melangedigital.co/careers"
                    : `#${item.toLowerCase().replace(" ", "")}`
              }
              className="relative font-semibold text-[15px] tracking-wide text-[#0F172A] transition-all duration-300 hover:text-[#B44CFF] group"
            >
              {item}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B44CFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Button */}
          <div className="hidden md:block">
            <div className="transform transition duration-300 hover:scale-105">
              <a href="#contact" >
                <PrimaryButton variant="dark">Contact Us</PrimaryButton>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-[#0F172A] hover:text-[#B44CFF] transition-colors duration-300"
            onClick={onMenuToggle}
            aria-label="Open navigation menu"
          >
            <Menu className="w-7 h-7 transition-transform duration-300 hover:scale-110" />
          </button>
        </div>
      </div>
    </header>
  );
}
