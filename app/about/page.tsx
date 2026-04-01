"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, FadeInLeft } from "@/components/Motion";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pb-32 pt-24">
      
      {/* Header Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 md:px-12 border-x border-[#262827]/10 pt-48 md:pt-48">
        <motion.div style={{ y: yHeading, opacity: opacityHeading }} className="z-10">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] mb-6 font-medium">Kurumsal</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] text-[#262827]">
              Hakkımızda
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-12 max-w-3xl text-xl leading-relaxed text-[#757776] font-light">
              2013 yılında temelleri atılan MSCE, sektörde sağlam ve kalıcı bir yer edinme vizyonuyla, 
              2018 yılında yeniden yapılanarak yoluna daha güçlü bir adımla devam etme kararı almıştır.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 border-x border-t border-[#262827]/10 bg-[#EEECE2]">
        <FadeIn>
          <h2 className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-[#757776] uppercase mb-6 flex items-center gap-4">
            <span className="h-[1px] w-8 bg-[#757776]"></span>
            Vizyonumuz
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 leading-tight text-[#262827]">Sektöründe Referans Alınan Bir Şirket Olmak</h3>
          <p className="text-[#757776] leading-relaxed font-light">
            Global standartlara uygun çalışmalar gerçekleştirerek ülkemizde ve uluslararası alanda kalitesiyle tanınan,
            güvenilirlik, şeffaflık ve çevresel duyarlılık ilkelerini ön planda tutan bir şirket olmayı hedefliyoruz.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-[#757776] uppercase mb-6 flex items-center gap-4">
            <span className="h-[1px] w-8 bg-[#757776]"></span>
            Misyonumuz
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 leading-tight text-[#262827]">Yenilikçi ve Sürdürülebilir Çözümler</h3>
          <p className="text-[#757776] leading-relaxed font-light">
            Mimari projeleri titizlikle planlayarak, inovasyonu ve dürüstlüğü bir araya getirip, güçlü mühendislik temelleri üzerine inşa etmek; 
            sürdürülebilir, güvenilir, çağdaş yaşam alanları inşa etmek, endüstriyel çözümler ve yenilikçi projeler üretmektedir.
          </p>
        </FadeIn>
      </section>

      {/* Quality & Safety */}
      <section className="relative z-20 w-full max-w-7xl mx-auto py-24 px-6 md:px-12 border-t border-x border-[#262827]/10 bg-[#EEECE2]">
        <div className="mb-20">
          <FadeInLeft>
            <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-[#757776] uppercase mb-4">Standartlar</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[#262827] max-w-2xl">
              Kalite & İş Güvenliği
            </h3>
          </FadeInLeft>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <FadeIn className="flex flex-col border-t border-[#262827]/10 pt-8 hover:border-[#262827] transition-colors">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-2xl font-medium text-[#262827]">İş Güvenliği</h4>
              <span className="text-[#757776] font-mono text-sm">01</span>
            </div>
            <p className="text-[#757776] leading-relaxed font-light">
              İş sağlığı ve güvenliği uzmanlarımız ile birlikte uygulama sahasında iş güvenliği
              standartları gereği bütün önlemleri alıyoruz, rutin iş sağlığı ve güvenliği kontrolleri yapıyoruz.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col border-t border-[#262827]/10 pt-8 hover:border-[#262827] transition-colors">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-2xl font-medium text-[#262827]">Kalite Kontrol</h4>
              <span className="text-[#757776] font-mono text-sm">02</span>
            </div>
            <p className="text-[#757776] leading-relaxed font-light">
              Ulusal ve uluslararası kalite kontrol standartlarına göre sahada uygulanan imalatları rutin olarak
              denetliyoruz, malzeme üretici firmalarından temin edilen yapım metodlarına riayet ediyoruz.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
