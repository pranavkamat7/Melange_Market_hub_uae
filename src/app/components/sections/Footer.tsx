import React from "react";
import { motion } from "framer-motion";
import instagram from "@/assets/caseimages/instagram.svg";
import linkedin from "@/assets/caseimages/linkedin.svg";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";

export function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const serviceLinks = [
    { href: "https://melangedigital.co/services/brand-strategy", text: "Brand Strategy & Planning" },
    { href: "https://melangedigital.co/services/influencer-marketing", text: "Influencer Marketing" },
    {
      href: "https://melangedigital.co/services/immersive-brand-storytelling",
      text: "Immersive brand storytelling",
    },
    { href: "https://melangedigital.co/services/design-and-development", text: "Design & Development" },
    {
      href: "https://melangedigital.co/services/content-strategy-and-production",
      text: "Content Strategy & Production",
    },
    { href: "https://melangedigital.co/services/pr-and-outreach", text: "PR, IPs & Outreach" },
  ];

  const companyLinks = [
    { href: "https://melangedigital.co/about", text: "About Us" },
    { href: "https://melangedigital.co/work", text: "Our Work" },
    { href: "https://melangedigital.co/blogs", text: "Blogs" },
    { href: "https://melangedigital.co/careers", text: "Careers" },
  ];

  const letsTalkText = "Let's Talk".split("");

  return (
    <div className="bg-[#1a1a1a] text-white font-bricolage">
      <footer className="max-container">
        {/* LET'S TALK */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="relative"
        >
          <div className="lg:px-28 px-5 py-10">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start gap-6 lg:gap-0">

              <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="flex flex-wrap overflow-hidden"
              >
                {letsTalkText.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation} // 👈 ADD THIS
                    className="text-white text-[73px] md:text-[205px] font-normal leading-none"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="https://calendly.com/julien-melangedigital/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PrimaryButton className="min-w-[180px]">
                    Get in Touch
                  </PrimaryButton>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* MAIN FOOTER CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={staggerChildren}
          className="footer-items max-w-[1440px] mx-auto lg:px-20 px-5 pt-0 w-full flex-grow bg-[#1a1a1a]"
        >
          <motion.div className="w-full lg:flex block justify-between">
            {/* SERVICES */}
            <motion.div className="flex lg:w-[55%]">
              <div className="w-[60%]">
                <motion.h2 className="text-[18px] md:text-[24px] mb-2">
                  Our Services
                </motion.h2>

                <motion.div
                  variants={staggerChildren}
                  className="flex flex-col text-[#DDDDDD]"
                >
                  {serviceLinks.map((service, index) => (
                    <motion.div key={index} whileHover={{ x: 10 }}>
                      <a
                        href={service.href}
                        className="mb-1 lg:text-[18px] text-[12px] block"
                      >
                        {service.text}
                      </a>
                    </motion.div>
                  ))}
                </motion.div>

                {/* SOCIAL */}
                <div className="lg:mt-7 mt-7">
                  <h2 className="text-lg md:text-[24px]">Follow us</h2>
                  <div className="flex mt-1">
                    <a
                      href="https://www.linkedin.com/company/melangedigital/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="linkedin" className="w-[28px]" />
                    </a>
                    <a
                      href="https://www.instagram.com/melangedigital.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3"
                    >
                      <img
                        src={instagram}
                        alt="instagram"
                        className="w-[28px]"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* COMPANY */}
              <motion.div className="w-[40%] lg:w-[30%]">
                <h2 className="text-lg md:text-[24px] mb-2">Company</h2>

                <div className="flex flex-col text-[#DDDDDD]">
                  {companyLinks.map((link, index) => (
                    <motion.div key={index} whileHover={{ x: 10 }}>
                      <a
                        href={link.href}
                        className="mb-1 lg:text-[18px] text-[12px] block"
                      >
                        {link.text}
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7">
                  <h2 className="text-lg md:text-[24px]">Email Us</h2>
                  <a
                    href="mailto:hello@melangedigital.co"
                    className="text-[#DDDDDD] block"
                  >
                    hello@melangedigital.co
                  </a>
                </div>

                <div className="mt-7">
                  <h2 className="text-lg md:text-[24px]">Call Us</h2>
                  <a href="tel:++971528008051" className="text-[#DDDDDD] block">
                    +971 52 800 8051
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* GLOBAL PRESENCE */}
            <motion.div className="mt-12 lg:mt-0 lg:w-[35%]">
              <h2 className="text-lg md:text-[24px] mb-6">
                Our Global Presence
              </h2>

              <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-[#DDDDDD]">
                <a href="https://melangedigital.co/">
                  <h3 className="hover:text-[#d940ff] cursor-pointer">
                    Mumbai, India
                  </h3>
                </a>
                <a href="https://melangedigital.co/">
                  <h3 className="hover:text-[#d940ff] cursor-pointer">
                    Delhi, India
                  </h3>
                </a>

                <a href="https://melangedigital.co/">
                  <h3 className="hover:text-[#d940ff] cursor-pointer">
                    Goa, India
                  </h3>
                </a>
                <a href="https://melangedigital.co/uae">
                  <h3 className="hover:text-[#d940ff] cursor-pointer">
                    Sharjah, UAE
                  </h3>
                </a>
                <a href="https://melangedigital.co/">
                  <h3 className="hover:text-[#d940ff] cursor-pointer">
                    Singapore
                  </h3>
                </a>

                <a href="https://melangedigital.co/">
                  <h3 className="hover:text-[#d940ff] cursor-pointer">
                    London, UK
                  </h3>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* COPYRIGHT */}
        <div className="py-8 lg:px-20 px-5 bg-[#1a1a1a]">
          <div className="h-0.5 bg-[#564f4f]" />

          <div className="text-[#DDDDDD] pt-3 lg:flex justify-between items-center">
            <div className="flex lg:flex-row flex-col lg:space-x-10">
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/cancellation-and-refund-policy">
                Cancellation & Refund Policy
              </a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>

            <p className="mt-4 lg:mt-0">
              © {new Date().getFullYear()} Mélange Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
