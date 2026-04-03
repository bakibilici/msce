"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Hide Navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    setIsAtTop(latest <= 5);
  });

  const menuVariants: Variants = {
    closed: {
      x: '100%',
      transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 }
    },
    open: {
      x: 0,
      transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 }
    }
  };

  const navLinks = [
    { title: 'Anasayfa', href: '/' },
    { title: 'Hakkımızda', href: '/about' },
    { title: 'Hizmetler', href: '/services' },
    { title: 'Projeler', href: '/projects' },
    { title: 'İletişim', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${pathname === '/' && !isScrolled
          ? 'bg-transparent border-transparent'
          : 'bg-[#EEECE2] bg-opacity-90 backdrop-blur-md shadow-sm border-b border-[#262827]/10'
          }`}
      >
        <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-6 md:px-12 transition-all duration-500">
          {/* Logo with MSCE Text */}
          <Link href="/" className="relative z-[60] flex items-center gap-2 md:gap-4">
            <Image
              src="/mscelogo.png"
              alt="MSCE Logo"
              width={240}
              height={240}
              className={`object-contain transition-all duration-500 ${isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'} w-auto`}
              priority
            />
            <AnimatePresence>
              {isAtTop && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  className={`text-3xl md:text-5xl font-semibold tracking-[0.15em] ${pathname === '/' ? 'text-[#EEECE2]' : 'text-[#262827]'
                    }`}
                >
                  MSCE
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] flex h-14 w-14 flex-col items-center justify-center gap-[6px] rounded-full hover:bg-[#262827] hover:text-[#EEECE2] text-[#262827] transition-colors focus:outline-none mix-blend-difference group"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7, backgroundColor: '#EEECE2' } : { rotate: 0, y: 0, backgroundColor: '#262827' }}
              className="h-[1px] w-6 bg-current block transition-colors"
            ></motion.span>
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: '#262827' }}
              className="h-[1px] w-6 bg-current block transition-colors"
            ></motion.span>
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7, backgroundColor: '#EEECE2' } : { rotate: 0, y: 0, backgroundColor: '#262827' }}
              className="h-[1px] w-6 bg-current block transition-colors"
            ></motion.span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#262827] flex flex-col justify-center px-12 md:px-24 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-4">
              {navLinks.map((link, i) => (
                <div key={link.title} className="overflow-hidden pt-1 pb-3 -my-3">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%', transition: { ease: [0.76, 0, 0.24, 1], duration: 0.4 } }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-5xl md:text-8xl font-medium font-montserrat tracking-tighter text-[#EEECE2] hover:text-[#757776] transition-colors inline-block leading-[0.9]"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-16 flex flex-col md:flex-row gap-8 text-[#EEECE2]/60 text-sm tracking-widest uppercase font-medium"
              >
                <div className="flex flex-col">
                  <span>Adres</span>
                  <span className="text-[#EEECE2] mt-2">İstanbul, Türkiye</span>
                </div>
                <div className="flex flex-col">
                  <span>İletişim</span>
                  <a href="mailto:info@msce.com.tr" className="text-[#EEECE2] mt-2 hover:underline">info@msce.com.tr</a>
                </div>
              </motion.div>
            </div>

            {/* Architectural decorative layer */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute right-24 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block origin-top"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
