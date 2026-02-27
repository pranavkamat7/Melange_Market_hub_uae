import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";
import { motion } from "framer-motion";

import melangeLogoImage from "@/assets/logo.png";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-screen max-w-[100vw] overflow-x-clip z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
    >
      {/* Constrained content like hero */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center min-w-0 h-16 sm:h-[5.3rem]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center overflow-hidden w-[140px] sm:w-[212px] h-[44px] sm:h-[58px] shrink-0"
          >
            <a href="/" className="block w-full h-full">
              <img
                src={melangeLogoImage}
                alt="Mélange Digital"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-5 md:gap-12 mr-0">
            {["Services", "Work", "About Us", "Blogs", "Careers"].map((item, index) => {
              let href = `#${item.toLowerCase()}`;

              if (item === "Work") href = "#Work";
              if (item === "About Us") href = "#About";
              if (item === "Careers") href = "https://melangedigital.co/careers";
              if (item === "Blogs") href = "https://melangedigital.co/blogs";

              return (
                <a
                  key={index}
                  href={href}
                  className="relative font-bold text-[17.1px] tracking-tight text-[#0F172A] transition-all duration-300 hover:text-[#B44CFF] group"
                >
                  {item}
                  {item === "Services" && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B44CFF] transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              );
            })}

            <a href="#contact">
              <PrimaryButton variant="dark">Contact Us</PrimaryButton>
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="sm:hidden shrink-0">
            <button
              onClick={toggleMenu}
              className="text-[#0F172A] hover:text-[#B44CFF] transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 shadow-md overflow-x-clip">
            <div className="flex flex-col items-start px-6 pt-6 pb-10 space-y-6">
              {["Services", "Work", "About Us", "Blogs", "Careers", "Contact Us"].map(
                (item, index) => {
                  let href = `#${item.toLowerCase().replace(/\s/g, "")}`;

                  if (item === "Work") href = "#Work";
                  if (item === "About Us") href = "#About";
                  if (item === "Blogs") href = "https://melangedigital.co/blogs";
                  if (item === "Careers") href = "https://melangedigital.co/careers";
                  if (item === "Contact Us") href = "#contact";

                  return (
                    <a
                      key={index}
                      href={href}
                      className="text-[22px] font-semibold text-[#0F172A] hover:text-[#B44CFF]"
                      onClick={() => setMenuOpen(false)}
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