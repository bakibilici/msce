"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/Motion";

export default function Home() {
  const containerRef = useRef(null);
  
  // Advanced Scroll Parallax config for the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={containerRef} className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#EEECE2] font-sans">
      
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[85vh] w-full flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto border-x border-[#262827]/10 pt-12 md:pt-0">
        <motion.div style={{ y: yHeading, opacity: opacityHeading }} className="z-10">
          <StaggerContainer>
            <StaggerItem>
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] mb-6 font-medium">Mimari & İnşaat</h2>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-[#262827] leading-[1.05] max-w-5xl">
                Geleceği <br />İnşa Ediyoruz
              </h1>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
        
        <motion.div style={{ y: yText }} className="mt-16 sm:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-12 z-20">
          <FadeIn delay={0.4}>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-[#757776] font-light">
              Mimari projeleri titizlikle planlayarak, inovasyonu ve dürüstlüğü bir araya getirip, güçlü mühendislik temelleri üzerine inşa ediyoruz.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex gap-6 border-b border-[#262827]/10 hover:border-[#262827] transition-colors pb-2">
              <Link href="/projects" className="text-sm font-medium tracking-widest uppercase text-[#262827] hover:text-[#757776] transition-colors flex items-center gap-2">
                Projeleri İncele <span className="text-xl leading-none font-light">↗</span>
              </Link>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* Hero Image / Placeholder */}
      <section className="w-full bg-[#EEECE2] z-20 relative px-6 md:px-12 max-w-7xl mx-auto border-x border-[#262827]/10 pb-24 md:pb-32 overflow-hidden">
        <ParallaxImage className="w-full aspect-[21/9] bg-[#e0dcd0] border border-[#262827]/10 relative flex items-center justify-center">
           {/* Abstract grid representation */}
           <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(45deg, #757776 25%, transparent 25%, transparent 75%, #757776 75%, #757776), linear-gradient(45deg, #757776 25%, transparent 25%, transparent 75%, #757776 75%, #757776)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
           <svg className="w-12 h-12 text-[#757776] opacity-40 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </ParallaxImage>
      </section>

      {/* Services Snippet */}
      <section className="z-20 relative w-full px-6 md:px-12 py-32 max-w-7xl mx-auto border-x border-t border-[#262827]/10 bg-[#EEECE2]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-[#757776] uppercase mb-4">Hizmetlerimiz</h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#262827] max-w-2xl">
              Uzmanlık Alanlarımız
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/services" className="text-xs md:text-sm font-medium tracking-widest uppercase text-[#262827] mt-8 md:mt-0 border-b border-[#262827]/10 hover:border-[#262827] pb-1 transition-colors">
              Tüm Hizmetler →
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <StaggerItem className="group flex flex-col border-t border-[#262827]/10 pt-8 hover:border-[#262827] transition-colors cursor-pointer">
            <span className="text-xs text-[#757776] mb-8 block font-mono">01</span>
            <h4 className="mb-4 text-2xl font-medium text-[#262827] group-hover:-translate-y-1 transition-transform">Projelendirme</h4>
            <p className="text-sm leading-relaxed text-[#757776] font-light">
              Ön tasarımdan uygulama projelerine kadar yüksek hassasiyetli ölçümlerle hayallerinizi gerçeğe dönüştürüyoruz.
            </p>
          </StaggerItem>

          <StaggerItem className="group flex flex-col border-t border-[#262827]/10 pt-8 hover:border-[#262827] transition-colors cursor-pointer">
            <span className="text-xs text-[#757776] mb-8 block font-mono">02</span>
            <h4 className="mb-4 text-2xl font-medium text-[#262827] group-hover:-translate-y-1 transition-transform">Danışmanlık</h4>
            <p className="text-sm leading-relaxed text-[#757776] font-light">
              İnşaat süreci, tasarım, bütçe yönetimi ve projelendirme aşamalarında uzman desteği sunuyoruz.
            </p>
          </StaggerItem>

          <StaggerItem className="group flex flex-col border-t border-[#262827]/10 pt-8 hover:border-[#262827] transition-colors cursor-pointer">
            <span className="text-xs text-[#757776] mb-8 block font-mono">03</span>
            <h4 className="mb-4 text-2xl font-medium text-[#262827] group-hover:-translate-y-1 transition-transform">BIM Uygulamaları</h4>
            <p className="text-sm leading-relaxed text-[#757776] font-light">
              Minimum hata ve kaynak kaybı hedefiyle; maliyet, zaman ve çakışma kontrollerini eksiksiz sağlıyoruz.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </div>
  );
}
