import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // animate every time it enters viewport
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      ref={sectionRef}
      className="relative bg-[#111111] py-20 lg:py-10 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        {/* HEADER */}
        <motion.div
          key={isVisible ? "visible" : "hidden"} // force re-animation
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-[56px] sm:text-[72px] lg:text-[120px] xl:text-[140px] font-light tracking-tight text-white leading-[0.9]">
              Let’s Talk
            </h2>

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
        </motion.div>

        {/* FOOTER GRID */}
        <motion.div
          key={isVisible ? "visible-grid" : "hidden-grid"}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-x-16 gap-y-12 lg:gap-12 mb-16"
        >
          {/* COLUMN 1 — Services + Social */}
          <motion.div variants={fadeUp}>
            <h3 className="text-[18px] lg:text-[20px] font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-white/70">
              {[
                {
                  label: "Brand Strategy & Planning",
                  href: "https://melangedigital.co/services/brand-strategy",
                },
                {
                  label: "Influencer Marketing",
                  href: "https://melangedigital.co/services/influencer-marketing",
                },
                {
                  label: "Immersive Brand Storytelling",
                  href: "https://melangedigital.co/services/immersive-brand-storytelling",
                },
                {
                  label: "Design & Development",
                  href: "https://melangedigital.co/services/design-and-development",
                },
                {
                  label: "Content Strategy & Production",
                  href: "https://melangedigital.co/services/content-strategy-and-production",
                },
                {
                  label: "PR, IPs & Outreach",
                  href: "https://melangedigital.co/services/pr-and-outreach",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="relative group transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h3 className="text-[18px] font-semibold mb-3 text-white">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://www.linkedin.com/company/melangedigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://www.instagram.com/melangedigital.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2 — Company + Email */}
          <motion.div variants={fadeUp} className="pl-8 lg:pl-0">
            <h3 className="text-[18px] lg:text-[20px] font-semibold mb-4 text-white">
              Company
            </h3>
            <ul className="space-y-3 text-white/70">
              {[
                { label: "About Us", href: "https://melangedigital.co/about" },
                { label: "Our Work", href: "https://melangedigital.co/work" },
                { label: "Blogs", href: "https://melangedigital.co/blogs" },
                { label: "Careers", href: "https://melangedigital.co/careers" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="relative group transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-[18px] font-semibold mb-2 text-white">
                Email Us
              </h3>
              <a
                href="mailto:hello@melangedigital.co"
                className="text-white/70 hover:text-white transition-colors"
              >
                hello@melangedigital.co
              </a>
            </div>
          </motion.div>

          {/* COLUMN 3 — Global Presence */}
          <motion.div variants={fadeUp} className="hidden lg:block">
            <h3 className="text-[18px] lg:text-[20px] font-semibold mb-4 text-white">
              Global Presence
            </h3>
            <ul className="space-y-3 text-white/70">
              {[
                {
                  label: "United Kingdom",
                  href: "https://melangedigital.co/uk",
                },
                {
                  label: "United Arab Emirates",
                  href: "https://melangedigital.co/uae",
                },
                {
                  label: "Singapore",
                  href: "https://melangedigital.co/singapore",
                },
                { label: "India", href: "https://melangedigital.co" },
                { label: "Africa", href: "https://melangedigital.co/africa" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-0" />

        {/* LEGAL */}
        <motion.div
          key={isVisible ? "visible-legal" : "hidden-legal"}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm text-white/60"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 pt-4">
            {[
              {
                label: "Terms of Service",
                href: "https://melangedigital.co/terms-of-service",
              },
              {
                label: "Privacy Policy",
                href: "https://melangedigital.co/privacy-policy",
              },
              {
                label: "Cancellation & Refund Policy",
                href: "https://melangedigital.co/cancellation-and-refund-policy",
              },
              {
                label: "Cookie Policy",
                href: "https://melangedigital.co/cookie-policy",
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>© 2026 Mélange Digital. All rights reserved.</div>
        </motion.div>
      </div>
    </footer>
  );
}
