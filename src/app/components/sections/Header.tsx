import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";
import { motion } from "framer-motion";

import melangeLogoImage from "@/assets/logo.png";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center px-4 md:px-12 lg:px-16 h-16 sm:h-[5.3rem]">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[212px] h-[58px] overflow-hidden flex items-center"
          >
            <a href="/">
              <img
                src={melangeLogoImage}
                alt="Mélange Digital"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-15 mr-8">
            {["Services", "Work", "About", "Careers"].map((item, index) => {
              let href = `#${item.toLowerCase()}`; // default internal link

              // Update external links
              if (item === "Work") href = "https://melangedigital.co/work";
              if (item === "About") href = "https://melangedigital.co/about";
              if (item === "Careers") href = "https://melangedigital.co/careers";

              return (
                <a
                  key={index}
                  href={href}
                  className="relative font-semibold text-[17px] tracking-wide text-[#0F172A] transition-all duration-300 hover:text-[#B44CFF] group"
                >
                  {item}
                  {/* Only Services gets the underline animation */}
                  {item === "Services" && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B44CFF] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </a>
              );
            })}

            {/* Contact Button */}
            <a href="#contact">
              <PrimaryButton variant="dark">
                Contact Us
              </PrimaryButton>
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0F172A] hover:text-[#B44CFF] transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="flex flex-col items-start px-6 pt-6 pb-10 space-y-6">
              {["Services", "Work", "About", "Careers", "Contact Us"].map(
                (item, index) => {
                  let href = `#${item.toLowerCase().replace(" ", "")}`; // default

                  if (item === "Work") href = "https://melangedigital.co/work";
                  if (item === "About") href = "https://melangedigital.co/about";
                  if (item === "Careers") href = "https://melangedigital.co/careers";

                  return (
                    <a
                      key={index}
                      href={href}
                      className="text-[22px] font-semibold text-[#0F172A] hover:text-[#B44CFF]"
                    >
                      {item}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
