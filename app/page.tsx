"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { TextReveal, LineReveal, BlurReveal, PerspectiveReveal } from "@/components/TextReveal";
import { projects } from "@/lib/projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [heroVideo, setHeroVideo] = useState<string | null>(null);

  useEffect(() => {
    const videoProjects = projects.filter(p => !!p.video);
    if (videoProjects.length > 0) {
      const randomProject = videoProjects[Math.floor(Math.random() * videoProjects.length)];
      setHeroVideo(randomProject.video || null);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const featuredProjects = projects.slice(0, 4);

  return (
    <div ref={containerRef} className="relative w-full bg-[#EEECE2] selection:bg-[#262827] selection:text-[#EEECE2]">

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-[#262827]/10">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-[#262827]"
        >
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          ) : (
            <Image
              src={encodeURI(projects[1].images[1])}
              alt="Hero Background"
              fill
              className="object-cover grayscale brightness-75 contrast-125"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EEECE2]/20 to-[#EEECE2]/80"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div style={{ y: heroY }}>
            <FadeIn>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#EEECE2] font-medium mb-8 block">Est. 2017 // Architecture & Engineering</span>
            </FadeIn>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[0.9] tracking-tighter text-[#EEECE2] font-serif mb-12">
              <BlurReveal>Mükemmeliyetin</BlurReveal>
              <BlurReveal delay={0.2}>Mimarisi</BlurReveal>
            </h1>
            <FadeIn delay={0.8} className="flex justify-center">
              <p className="max-w-xl text-lg text-[#262827]/70 font-light leading-relaxed">
                İnovasyon ve dürüstlüğü bir araya getirerek, geleceğin yaşam alanlarını güçlü mühendislik temelleri üzerine inşa ediyoruz.
              </p>
            </FadeIn>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#262827]/40"
        >
          <span>Keşfet</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#262827]/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="relative pt-16 pb-0 md:pt-32 md:pb-0 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 self-start sticky top-32">
            <span className="text-[10px] uppercase tracking-widest text-[#757776] font-mono">01 // Vizyon</span>
            <PerspectiveReveal className="mt-4"><h2 className="text-3xl font-serif text-[#262827]">Düşünceden <br />Uygulamaya</h2></PerspectiveReveal>
          </div>
          <div className="md:col-span-8">
            <TextReveal className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] text-[#262827]">
              Biz sadece binalar inşa etmiyoruz; her bir projede topluma değer katan, estetik ve işlevselliği harmanlayan kalıcı eserler bırakıyoruz.
            </TextReveal>
            <FadeIn delay={0.5} className="mt-12">
              <Link href="/about" className="group flex items-center gap-4 text-xs uppercase tracking-widest font-medium text-[#262827] hover:opacity-70 transition-opacity">
                Hikayemizi Dinleyin
                <div className="w-8 h-8 rounded-full border border-[#262827]/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Innovative Vision Section */}
      <VisionSection />

      {/* Horizontal Scroll Section */}
      <section className="relative bg-[#262827] py-24 md:py-32 overflow-hidden">
        <div className="flex flex-col">
          <div className="px-6 md:px-12 mb-12 max-w-7xl mx-auto w-full flex justify-between items-end">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#EEECE2]/40 font-mono mb-4 block">02 // Portfolyo</span>
              <h3 className="text-5xl md:text-7xl font-serif text-[#EEECE2]">Seçkin Projeler</h3>
            </div>
            <Link href="/projects" className="text-[10px] uppercase tracking-widest text-[#EEECE2] border-b border-[#EEECE2]/20 hover:border-[#EEECE2] transition-colors pb-1 mb-2">Tümünü Gör</Link>
          </div>

          <div ref={carouselRef} className="overflow-hidden px-6 md:px-12 cursor-grab active:cursor-grabbing">
            <motion.div
              drag="x"
              dragConstraints={carouselRef}
              dragElastic={0.1}
              onDragStart={() => { isDragging.current = true; }}
              onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 150); }}
              className="flex gap-8 w-max pr-12"
            >
              {featuredProjects.map((project, i) => (
                <Link
                  key={i}
                  href={`/projects/${project.slug}`}
                  className="relative pointer-events-auto flex-shrink-0 w-[65vw] md:w-[45vw] aspect-[4/5] md:aspect-[16/10] group overflow-hidden bg-[#333] rounded-sm"
                  onDragStart={(e) => e.preventDefault()}
                  onClick={(e) => {
                    if (isDragging.current) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Image
                    src={encodeURI(project.images[0])}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 pointer-events-none"
                  />
                  <div className="absolute inset-x-8 bottom-8 z-10 flex flex-col text-[#EEECE2] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest mb-2 opacity-60">{project.category}</span>
                    <h4 className="text-xl md:text-4xl font-serif">{project.title}</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Redesign */}
      <section className="relative py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-widest text-[#757776] font-mono mb-4 block">03 // Servisler</span>
          <h3 className="text-5xl md:text-6xl font-serif text-[#262827]">Çözüm Odaklı Yaklaşım</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-24 divide-y md:divide-y-0 md:divide-x divide-[#262827]/10">
          <div className="group flex flex-col h-full py-12 md:py-0 p-0 md:pr-12 md:pb-0">
            <span className="text-4xl font-serif text-[#262827]/20 mb-8 transition-colors group-hover:text-[#262827]">01.</span>
            <h4 className="text-2xl font-serif mb-6 text-[#262827]">Mühendislik & İnşaat</h4>
            <p className="text-[#757776] font-light leading-relaxed mb-12 flex-grow">Statik hesaplardan anahtar teslim inşaat süreçlerine kadar her aşamada en yüksek kalite standartlarını ve güvenliği ön planda tutuyoruz.</p>
            <div className="w-full h-48 md:h-64 relative overflow-hidden bg-[#e0dcd0] mt-auto">
              <Image src="/home_engineering.png" alt="Engineering" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          <div className="group flex flex-col h-full py-12 md:py-0 p-0 md:px-12 md:pb-0">
            <span className="text-4xl font-serif text-[#262827]/20 mb-8 transition-colors group-hover:text-[#262827]">02.</span>
            <h4 className="text-2xl font-serif mb-6 text-[#262827]">Mimari Tasarım</h4>
            <p className="text-[#757776] font-light leading-relaxed mb-12 flex-grow">Estetiği fonksiyonla birleştirerek, mekanların ruhunu yansıtan ve kullanıcı deneyimini zenginleştiren modern yaşam alanları tasarlıyoruz.</p>
            <div className="w-full h-48 md:h-64 relative overflow-hidden bg-[#e0dcd0] mt-auto">
              <Image src="/home_design.png" alt="Design" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          <div className="group flex flex-col h-full py-12 md:py-0 p-0 md:pl-12 md:pb-0">
            <span className="text-4xl font-serif text-[#262827]/20 mb-8 transition-colors group-hover:text-[#262827]">03.</span>
            <h4 className="text-2xl font-serif mb-6 text-[#262827]">Proje Yönetimi</h4>
            <p className="text-[#757776] font-light leading-relaxed mb-12 flex-grow">BIM teknolojilerini kullanarak maliyet, zaman ve kaynak yönetimini optimize ediyor, projelerinizi sıfır hata hedefiyle takip ediyoruz.</p>
            <div className="w-full h-48 md:h-64 relative overflow-hidden bg-[#e0dcd0] mt-auto flex items-center justify-center p-4">
              <Image src="/LOD100500.png" alt="BIM" width={400} height={200} className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-32 px-6 md:px-12 border-t border-[#262827]/10 bg-[#262827]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-4xl md:text-6xl font-serif text-[#EEECE2] mb-12 leading-tight">Bir Sonraki Projenizi <br />Birlikte Planlayalım.</h3>
          <Link href="/contact" className="px-12 py-5 rounded-full border border-[#EEECE2]/20 text-[#EEECE2] hover:bg-[#EEECE2] hover:text-[#262827] transition-all duration-500 font-medium tracking-widest uppercase text-xs">İletişime Geçin</Link>
        </div>
      </section>

    </div>
  );
}

function VisionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Background animations: grayscale to color, faster zoom, and overlay fade
  const grayscaleValue = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const filter = useMotionTemplate`grayscale(${grayscaleValue}%)`;
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]); // Increased scale for faster movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]); // Added parallax Y
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.2, 0.2, 0.6]);

  // Text layer animations
  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.1, 0.4], [30, -30]);

  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.4, 0.7], [30, -30]);

  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.7, 0.95], [30, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] w-full bg-[#262827]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Filter */}
        <motion.div
          style={{ filter, scale, y: bgY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image
            src={encodeURI(projects[3].images[1])}
            alt="Architectural Vision"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Dynamic Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-0"
        ></motion.div>

        {/* Storytelling Layers */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center pointer-events-none">

          {/* Layer 1: Top Left */}
          <motion.div
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute top-[10%] md:top-[20%] left-6 md:left-[10%] max-w-[85vw] md:max-w-md"
          >
            <span className="text-arch-bg/40 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">Vizyonumuz</span>
            <PerspectiveReveal className="text-3xl md:text-5xl font-serif text-arch-bg leading-tight">
              Yenilikçi Perspektif, Modern Estetik.
            </PerspectiveReveal>
          </motion.div>

          {/* Layer 2: Center Right */}
          <motion.div
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute top-[40%] md:top-[45%] right-6 md:right-[10%] text-right max-w-[85vw] md:max-w-md"
          >
            <span className="text-arch-bg/40 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">Felsefe</span>
            <BlurReveal className="text-3xl md:text-5xl font-serif text-arch-bg leading-tight">
              Detayda Gizli Mükemmellik.
            </BlurReveal>
          </motion.div>

          {/* Layer 3: Bottom Center */}
          <motion.div
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute bottom-[10%] md:bottom-[20%] text-center max-w-[90vw] md:max-w-2xl px-6"
          >
            <h2 className="text-3xl md:text-7xl font-serif text-arch-bg leading-tight mb-8">
              Geleceğin Mimarisini <br className="hidden md:block" /> Bugün İnşa Ediyoruz
            </h2>
            <div className="h-px w-24 bg-arch-bg/30 mx-auto"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


