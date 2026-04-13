"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useInView, useMotionValue, useSpring } from "framer-motion";
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
              src={encodeURI(heroVideo)}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              preload="auto"
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
              <Image src="/home_engineering.png" alt="Engineering" fill className="object-cover transition-all duration-700" />
            </div>
          </div>

          <div className="group flex flex-col h-full py-12 md:py-0 p-0 md:px-12 md:pb-0">
            <span className="text-4xl font-serif text-[#262827]/20 mb-8 transition-colors group-hover:text-[#262827]">02.</span>
            <h4 className="text-2xl font-serif mb-6 text-[#262827]">Mimari Tasarım</h4>
            <p className="text-[#757776] font-light leading-relaxed mb-12 flex-grow">Estetiği fonksiyonla birleştirerek, mekanların ruhunu yansıtan ve kullanıcı deneyimini zenginleştiren modern yaşam alanları tasarlıyoruz.</p>
            <div className="w-full h-48 md:h-64 relative overflow-hidden bg-[#e0dcd0] mt-auto">
              <Image src="/home_design.png" alt="Design" fill className="object-cover transition-all duration-700" />
            </div>
          </div>

          <div className="group flex flex-col h-full py-12 md:py-0 p-0 md:pl-12 md:pb-0">
            <span className="text-4xl font-serif text-[#262827]/20 mb-8 transition-colors group-hover:text-[#262827]">03.</span>
            <h4 className="text-2xl font-serif mb-6 text-[#262827]">Proje Yönetimi</h4>
            <p className="text-[#757776] font-light leading-relaxed mb-12 flex-grow">BIM teknolojilerini kullanarak maliyet, zaman ve kaynak yönetimini optimize ediyor, projelerinizi sıfır hata hedefiyle takip ediyoruz.</p>
            <div className="w-full h-48 md:h-64 relative overflow-hidden bg-[#e0dcd0] mt-auto flex items-center justify-center p-4">
              <Image src="/LOD100500.png" alt="BIM" fill className="object-cover transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Numbers Section */}
      <ImpactSection />

      {/* Process Timeline Section */}
      <ProcessSection />

      {/* Gallery Strip Section */}
      <GalleryStripSection />

      {/* Bento Grid Section */}
      <BentoSection />

      {/* Horizontal Story Section */}
      <StorySection />

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

  const cards = [
    { title: "Yenilikçi Perspektif,\nModern Estetik.", subtitle: "VİZYONUMUZ", src: encodeURI(projects[3].images[1]) },
    { title: "Detayda Gizli\nMükemmellik.", subtitle: "FELSEFE", src: encodeURI(projects[1].images[1]) },
    { title: "Geleceğin Mimarisini\nBugün İnşa Ediyoruz", subtitle: "MİSYON", src: encodeURI(projects[5].images[0]) },
  ];

  return (
    <>
      {/* MOBILE VERSION: Fullscreen cards with scroll-triggered animations */}
      <div className="md:hidden">
        {cards.map((card, i) => (
          <section
            key={i}
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Image with slow zoom */}
            <motion.div
              className="absolute inset-0 w-full h-full z-0"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={card.src}
                alt={card.subtitle}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Dark Overlay with fade */}
            <motion.div
              className="absolute inset-0 bg-black/50 z-[1]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-8">
              {/* Subtitle - slides down and fades in */}
              <motion.span
                className="text-[#EEECE2]/60 font-mono text-[10px] uppercase tracking-[0.3em] mb-5 block"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {card.subtitle}
              </motion.span>

              {/* Title - fades up with blur */}
              <motion.h2
                className="text-[2.25rem] font-serif text-[#EEECE2] leading-[1.1] whitespace-pre-line tracking-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {card.title}
              </motion.h2>

              {/* Decorative line - scales in from center */}
              <motion.div
                className="h-[1px] w-16 bg-[#EEECE2]/20 mt-10"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>
          </section>
        ))}
      </div>

      {/* DESKTOP VERSION: Layered Stacking Cards */}
      <section ref={ref} className="hidden md:block relative w-full bg-[#262827]">
        {cards.map((card, i) => (
          <VisionCard key={i} i={i} card={card} progress={scrollYProgress} cardsLength={cards.length} />
        ))}
      </section>
    </>
  );
}

// Extracted Component for Stacking Card Logic
const VisionCard = ({ i, card, progress, cardsLength }: { i: number, card: any, progress: any, cardsLength: number }) => {
  // Over a total height of cardsLength * 100vh, progress goes 0 to 1 over (cardsLength - 1) * 100vh of scrolling past top.
  // The last card never scales down or gets covered.
  const isLastCard = i === cardsLength - 1;
  
  // Calculate valid Framer Motion ranges (must be within [0, 1] and strictly increasing)
  const range = isLastCard ? [0, 1] : [i * (1 / (cardsLength - 1)), (i + 1) * (1 / (cardsLength - 1))];
  const scaleTarget = isLastCard ? [1, 1] : [1, 0.92];
  const opacityTarget = isLastCard ? [0.3, 0.3] : [0.3, 0.8];

  const scale = useTransform(progress, range, scaleTarget);
  const opacity = useTransform(progress, range, opacityTarget);

  return (
    <div className="h-screen w-full sticky top-0 flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        style={{ scale }} 
        className="w-full h-full relative origin-top bg-[#262827]"
      >
        <Image src={card.src} fill className="object-cover" alt={card.subtitle} />
        {/* Parallax darkening overlay when card goes back */}
        <motion.div style={{ opacity }} className="absolute inset-0 bg-black"></motion.div>
        
        {/* Text Area */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-12">
          <PerspectiveReveal className="flex flex-col items-center">
            <span className="text-[#EEECE2]/60 font-mono text-xs uppercase tracking-[0.3em] mb-4">{card.subtitle}</span>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-[#EEECE2] leading-[1.05] whitespace-pre-line tracking-tight drop-shadow-2xl">
              {card.title}
            </h2>
          </PerspectiveReveal>
          <div className="h-[1px] w-24 bg-[#EEECE2]/20 mt-12"></div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Impact & Numbers Section ────────────────────────────────────────
function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Marquee moves left as user scrolls down
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const marqueeX2 = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const stats = [
    { value: 17, suffix: "+", label: "Tamamlanan Proje" },
    { value: 25, suffix: "K+ m²", label: "İnşa Edilen Alan" },
    { value: 8, suffix: "+", label: "Yıllık Deneyim" },
    { value: 50, suffix: "+", label: "Mutlu Müşteri" },
  ];

  const marqueeWords = "MİMARİ — MÜHENDİSLİK — TASARIM — İNOVASYON — SÜRDÜRÜLEBİLİRLİK — KALİTE — ESTETIK — ";

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#262827]">

      {/* ── Marquee Band ── */}
      <div className="relative py-12 md:py-16 border-b border-[#EEECE2]/5 overflow-hidden">
        <motion.div
          style={{ x: marqueeX }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-serif text-[#EEECE2]/[0.04] leading-none tracking-tighter mr-4 select-none"
            >
              {marqueeWords}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Stats Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#EEECE2]/40 font-mono mb-4 block">04 // Rakamlarla Biz</span>
          <h3 className="text-4xl md:text-6xl font-serif text-[#EEECE2] leading-tight">Etkimiz,<br className="md:hidden" /> Rakamlarla.</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#EEECE2]/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#262827] p-8 md:p-12 flex flex-col items-start group"
            >
              <div className="flex items-baseline gap-1 mb-4">
                <AnimatedCounter target={stat.value} />
                <span className="text-2xl md:text-3xl font-light text-[#EEECE2]/60">{stat.suffix}</span>
              </div>
              <div className="h-[1px] w-0 group-hover:w-12 bg-[#EEECE2]/20 transition-all duration-700 mb-4"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#EEECE2]/40 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Parallax Image Strip ── */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 -top-[10%] -bottom-[10%] w-full"
        >
          <Image
            src={encodeURI(projects[9].images[0])}
            alt="MSCE Projects"
            fill
            className="object-cover grayscale opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#262827] via-transparent to-[#262827] z-[1]"></div>

        {/* Reverse Marquee */}
        <div className="absolute inset-0 z-10 flex items-center overflow-hidden">
          <motion.div
            style={{ x: marqueeX2 }}
            className="flex whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-serif text-[#EEECE2]/10 leading-none tracking-tighter mr-8 select-none"
              >
                MSCE İNŞAAT — KALİTE VE GÜVEN — EST. 2017 — MSCE İNŞAAT — KALİTE VE GÜVEN —{" "}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Animated Counter ─────────────────────────────────────────────────
function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-serif text-[#EEECE2] tabular-nums">
      {count}
    </span>
  );
}

// ── Process Timeline Section ──────────────────────────────────────────
function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      num: "01",
      title: "Keşif & Analiz",
      desc: "Projenin vizyonunu, arazi koşullarını ve müşteri beklentilerini derinlemesine analiz ederek sağlam bir temel oluşturuyoruz.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Tasarım & Planlama",
      desc: "BIM teknolojileri ve 3D modelleme ile estetik ve mühendislik mükemmelliğini bir arada sunan detaylı projeler hazırlıyoruz.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7" /><path d="M19 12H5" /><path d="M5 3v18" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Uygulama & İnşaat",
      desc: "Kalite kontrol süreçlerimizle sahada kusursuz uygulama gerçekleştiriyor, her detayı titizlikle takip ediyoruz.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Teslimat & Destek",
      desc: "Projeyi eksiksiz olarak teslim ediyor, uzun vadeli müşteri memnuniyeti için sürekli destek sağlıyoruz.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#EEECE2] py-24 md:py-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-1/4 right-12 text-[20rem] font-serif text-[#262827] leading-none">S</div>
        <div className="absolute bottom-1/4 right-24 text-[16rem] font-serif text-[#262827] leading-none">Ü</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#757776] font-mono mb-4 block">05 // Süreç</span>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#262827] leading-[1.05]">
            Fikirden<br />Gerçeğe.
          </h3>
        </motion.div>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Central Line Track */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#262827]/10 -translate-x-1/2">
          {/* Animated fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#262827] via-[#262827] to-[#262827]/40 origin-top"
          />
          {/* Glowing dot at the end of the line */}
          <motion.div
            style={{ top: lineHeight }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#262827] shadow-[0_0_20px_rgba(38,40,39,0.4)]"
          />
        </div>

        {/* Steps */}
        <div className="relative z-10">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-start mb-24 md:mb-32 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node on timeline */}
                <div className="absolute left-8 md:left-1/2 top-2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#EEECE2] border-2 border-[#262827] relative z-10" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#262827]/20 animate-ping" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? -60 : 60,
                    rotateY: isEven ? -8 : 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                  style={{ perspective: "1000px" }}
                >
                  <div className="group relative bg-[#EEECE2] p-0">
                    {/* Step number */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                      className="text-[5rem] md:text-[7rem] font-serif text-[#262827]/[0.06] leading-none absolute -top-10 -left-2 select-none pointer-events-none"
                    >
                      {step.num}
                    </motion.span>

                    {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-[#262827]/40 mb-6 group-hover:text-[#262827] transition-colors duration-500"
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.35 }}
                      className="text-2xl md:text-3xl font-serif text-[#262827] mb-4 leading-tight"
                    >
                      {step.title}
                    </motion.h4>

                    {/* Animated underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="h-[1px] w-16 bg-[#262827]/20 mb-6 origin-left"
                    />

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="text-[#757776] font-light leading-relaxed text-sm md:text-base"
                    >
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Gallery Strip Section ─────────────────────────────────────────────
function GalleryStripSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });

  const skewY = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
  const topRowX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);

  // Two sets of images for the two rows
  const row1 = [projects[0], projects[2], projects[4], projects[6], projects[8], projects[10], projects[12], projects[14]];
  const row2 = [projects[1], projects[3], projects[5], projects[7], projects[9], projects[11], projects[13], projects[15]];

  return (
    <section
      ref={stripRef}
      className="relative w-full py-24 md:py-40 bg-[#262827] overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#EEECE2]/40 font-mono mb-4 block">
            06 // Galeri
          </span>
          <h3 className="text-4xl md:text-6xl font-serif text-[#EEECE2] leading-tight">
            Eserlerimizden<br className="md:hidden" /> Kareler.
          </h3>
        </motion.div>
      </div>

      {/* Skewed strip container */}
      <motion.div style={{ skewY }} className="relative">
        {/* Row 1 — scrolls left */}
        <motion.div
          style={{ x: topRowX }}
          className="flex gap-4 md:gap-6 mb-4 md:mb-6"
        >
          {[...row1, ...row1].map((project, i) => (
            <Link
              key={`r1-${i}`}
              href={`/projects/${project.slug}`}
              className="relative flex-shrink-0 w-[55vw] md:w-[28vw] lg:w-[22vw] aspect-[3/2] overflow-hidden rounded-sm group"
            >
              <Image
                src={encodeURI(project.images[0])}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                sizes="(max-width: 768px) 55vw, 28vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              {/* Title overlay on hover */}
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <motion.span
                  className="text-sm md:text-base font-medium text-[#EEECE2] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  {project.title}
                </motion.span>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Row 2 — scrolls right */}
        <motion.div
          style={{ x: bottomRowX }}
          className="flex gap-4 md:gap-6"
        >
          {[...row2, ...row2].map((project, i) => (
            <Link
              key={`r2-${i}`}
              href={`/projects/${project.slug}`}
              className="relative flex-shrink-0 w-[55vw] md:w-[28vw] lg:w-[22vw] aspect-[3/2] overflow-hidden rounded-sm group"
            >
              <Image
                src={encodeURI(project.images[0])}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                sizes="(max-width: 768px) 55vw, 28vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <motion.span
                  className="text-sm md:text-base font-medium text-[#EEECE2] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  {project.title}
                </motion.span>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Center CTA overlay */}
      <div className="relative z-10 flex items-center justify-center mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full border border-[#EEECE2]/15 hover:border-[#EEECE2]/40 transition-all duration-500"
          >
            <span className="text-[#EEECE2] text-sm uppercase tracking-[0.2em] font-medium">
              Tüm Projeleri Keşfet
            </span>
            <div className="w-10 h-10 rounded-full border border-[#EEECE2]/20 flex items-center justify-center group-hover:rotate-45 group-hover:bg-[#EEECE2] group-hover:border-[#EEECE2] transition-all duration-500">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#EEECE2] group-hover:text-[#262827] transition-colors">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── Bento Grid Section ────────────────────────────────────────────────
function BentoSection() {
  return (
    <section className="relative w-full bg-[#EEECE2] py-24 md:py-40 overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.015, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-[30vw] font-serif text-[#262827] leading-none tracking-tighter"
        >
          MSCE
        </motion.span>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#757776] font-mono mb-4 block">07 // Neden Biz</span>
          <h3 className="text-4xl md:text-6xl font-serif text-[#262827] leading-[1.05]">
            Farkımız,<br className="md:hidden" /> Değerlerimiz.
          </h3>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">

          {/* Card 1: Large Quote — spans 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-2 md:row-span-2 bg-[#262827] rounded-lg p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-6 right-8 text-[8rem] md:text-[12rem] font-serif text-[#EEECE2]/[0.03] leading-none select-none pointer-events-none">"
            </div>
            <div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] w-12 bg-[#EEECE2]/20 mb-8 origin-left"
              />
              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#EEECE2] leading-relaxed mb-8">
                "Sadece yapılar inşa etmiyoruz,<br /> gelecek nesillere kalacak<br /> <em className="text-[#EEECE2]/60">hikayeler</em> yaratıyoruz."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EEECE2]/10 flex items-center justify-center text-[#EEECE2]/60 text-sm font-serif">M</div>
              <div>
                <span className="text-[#EEECE2] text-sm font-medium block">MSCE İnşaat</span>
                <span className="text-[#EEECE2]/40 text-xs">Kurucu Vizyon</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Award/Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 150 }}
            className="bg-[#e6e3d8] rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-[#dddad0] transition-colors duration-500"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#262827]/30 mb-6 group-hover:text-[#262827] transition-colors duration-500">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <div>
              <span className="text-4xl md:text-5xl font-serif text-[#262827] block mb-2">%100</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#757776] font-medium">Proje Tamamlama</span>
            </div>
          </motion.div>

          {/* Card 3: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-lg overflow-hidden relative group"
          >
            <Image
              src={encodeURI(projects[6].images[0])}
              alt="MSCE Project"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </motion.div>

          {/* Card 4: Value — Transparency */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="bg-[#262827] rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#EEECE2]/30 mb-6 group-hover:text-[#EEECE2] transition-colors duration-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </motion.div>
            <div>
              <h4 className="text-xl font-serif text-[#EEECE2] mb-2">Güven & Şeffaflık</h4>
              <p className="text-[#EEECE2]/40 text-sm font-light leading-relaxed">Süreçlerin her adımında açık iletişim ve dürüstlük.</p>
            </div>
          </motion.div>

          {/* Card 5: Value — Innovation */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-[#e6e3d8] rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-[#dddad0] transition-colors duration-500"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#262827]/30 mb-6 group-hover:text-[#262827] transition-colors duration-500">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            <div>
              <h4  className="text-xl font-serif text-[#262827] mb-2">İnovasyon</h4>
              <p className="text-[#757776] text-sm font-light leading-relaxed">BIM ve modern teknolojilerle geleceğin yapılarını bugünden tasarlıyoruz.</p>
            </div>
          </motion.div>

          {/* Card 6: Large Image — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-2 rounded-lg overflow-hidden relative h-[250px] md:h-auto group"
            style={{ perspective: "1000px" }}
          >
            <Image
              src={encodeURI(projects[8].images[0])}
              alt="MSCE Showcase"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#EEECE2] text-lg md:text-2xl font-serif"
              >
                Her projede mükemmellik.
              </motion.span>
            </div>
          </motion.div>

          {/* Card 7: Sustainability */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#262827] rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#EEECE2]/30 mb-6 group-hover:text-[#EEECE2] transition-colors duration-500">
              <path d="M2 22c1.25-1.25 2.5-3 4-3 1.5 0 2 1.5 3.5 1.5s2-1.5 3.5-1.5 2 1.5 3.5 1.5 2-1.5 3.5-1.5c1.5 0 2.75 1.75 4 3" />
              <path d="M12 2a10 10 0 0 1 0 20" />
              <path d="M12 2a10 10 0 0 0 0 20" />
              <path d="M2 12h20" />
            </svg>
            <div>
              <h4 className="text-xl font-serif text-[#EEECE2] mb-2">Sürdürülebilirlik</h4>
              <p className="text-[#EEECE2]/40 text-sm font-light leading-relaxed">Çevreye saygılı, enerji verimli yapılar üretiyoruz.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ── Horizontal Scroll Story Section ────────────────────────────────
function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const panels = [
    {
      year: "2017",
      heading: "Bir Hayalle\nBa\u015flad\u0131k.",
      desc: "İstanbul'da k\xFC\u00e7\xFCk bir ofiste, b\xFCy\xFCk bir vizyonla yola \u00e7\u0131kt\u0131k. M\xFCkemmeliyeti standart haline getirmek i\u00e7in.",
      img: projects[1].images[1],
      accent: "Kurulu\u015f",
    },
    {
      year: "5",
      heading: "Şehirden\n\u015eehire.",
      desc: "\u0130stanbul, Yalova, Kocaeli, Bal\u0131kesir ve Ankara \u2014 T\xFCrkiye'nin d\xF6rt bir yan\u0131nda projeler \xFCretiyoruz.",
      img: projects[4].images[0],
      accent: "\u015eehir",
      badges: ["\u0130stanbul", "Yalova", "Kocaeli", "Bal\u0131kesir", "Ankara"],
    },
    {
      year: "25K+",
      heading: "Metrekare\nHikaye.",
      desc: "Her metrekare, titizlikle hesaplanm\u0131\u015f m\xFChendislik ve estetik anlay\u0131\u015f\u0131n\u0131n bir yans\u0131mas\u0131d\u0131r.",
      img: projects[9].images[0],
      accent: "m\xB2",
    },
    {
      year: "17+",
      heading: "Farkl\u0131 \xD6l\u00e7ek,\nAyn\u0131 \xD6zen.",
      desc: "Villadan fabrikaya, hastaneden \xFCniversiteye \u2014 her \xF6l\u00e7ekte ayn\u0131 kalite standartlar\u0131n\u0131 uyguluyoruz.",
      img: projects[5].images[0],
      accent: "Proje",
      badges: ["\u0130n\u015faat", "Cephe", "Mimari", "BIM"],
    },
    {
      year: "\u221E",
      heading: "Gelece\u011fi\nBirlikte.",
      desc: "S\xFCrd\xFCr\xFClebilir, yenilik\u00e7i ve insan odakl\u0131 yap\u0131larla gelece\u011fin mimarisini bug\xFCnden \u015fekillendiriyoruz.",
      img: projects[3].images[1],
      accent: "Vizyon",
    },
  ];

  const totalPanels = panels.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(totalPanels - 1) * 100}%`]);

  return (
    <>
      {/* DESKTOP: Horizontal scroll */}
      <section
        ref={containerRef}
        className="hidden md:block relative bg-[#1a1c1b]"
        style={{ height: `${totalPanels * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Progress bar */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-[#EEECE2]/30 origin-left z-50"
          />

          {/* Section label */}
          <div className="absolute top-8 left-12 z-40">
            <span className="text-[10px] uppercase tracking-widest text-[#EEECE2]/30 font-mono">08 // Hikayemiz</span>
          </div>

          {/* Horizontal track */}
          <motion.div
            style={{ x }}
            className="flex h-full"
          >
            {panels.map((panel, i) => (
              <div key={i} className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={encodeURI(panel.img)}
                    alt={panel.accent}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1a1c1b]/75" />
                </div>

                {/* Giant year/number watermark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                >
                  <span className="text-[25vw] font-serif text-[#EEECE2]/[0.04] leading-none tracking-tighter">
                    {panel.year}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-12 flex flex-col md:flex-row items-center gap-16">
                  {/* Left: Year pill + accent */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-4 flex-shrink-0"
                  >
                    <div className="w-24 h-24 rounded-full border border-[#EEECE2]/15 flex items-center justify-center">
                      <span className="text-3xl font-serif text-[#EEECE2]">{panel.year}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEECE2]/40 font-mono">{panel.accent}</span>
                  </motion.div>

                  {/* Right: Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h3 className="text-4xl lg:text-6xl font-serif text-[#EEECE2] leading-[1.1] whitespace-pre-line tracking-tight mb-6">
                      {panel.heading}
                    </h3>
                    <p className="text-[#EEECE2]/50 font-light leading-relaxed text-lg max-w-lg mb-6">
                      {panel.desc}
                    </p>
                    {panel.badges && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-wrap gap-2"
                      >
                        {panel.badges.map((badge, bi) => (
                          <span
                            key={bi}
                            className="px-4 py-1.5 rounded-full border border-[#EEECE2]/10 text-[#EEECE2]/50 text-[10px] uppercase tracking-[0.15em] font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Panel index */}
                <div className="absolute bottom-12 right-12 z-20">
                  <span className="text-[#EEECE2]/20 font-mono text-xs tracking-widest">
                    {String(i + 1).padStart(2, "0")} / {String(totalPanels).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE: Stacked vertical panels */}
      <section className="md:hidden relative bg-[#1a1c1b]">
        <div className="px-6 pt-20 pb-8">
          <span className="text-[10px] uppercase tracking-widest text-[#EEECE2]/30 font-mono block mb-4">08 // Hikayemiz</span>
          <h3 className="text-3xl font-serif text-[#EEECE2] leading-tight">Yolculuğumuz.</h3>
        </div>
        {panels.map((panel, i) => (
          <div key={i} className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
              <Image src={encodeURI(panel.img)} alt={panel.accent} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1a1c1b]/80" />
            </div>

            {/* Giant number */}
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 0.04, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 flex items-center justify-center text-[40vw] font-serif text-[#EEECE2] leading-none tracking-tighter pointer-events-none select-none"
            >
              {panel.year}
            </motion.span>

            {/* Content */}
            <div className="relative z-10 px-6 py-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-16 h-16 rounded-full border border-[#EEECE2]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif text-[#EEECE2]">{panel.year}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEECE2]/40 font-mono">{panel.accent}</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-serif text-[#EEECE2] leading-[1.15] whitespace-pre-line tracking-tight mb-5"
              >
                {panel.heading}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#EEECE2]/50 font-light leading-relaxed text-base max-w-sm mb-6"
              >
                {panel.desc}
              </motion.p>

              {panel.badges && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-2"
                >
                  {panel.badges.map((badge, bi) => (
                    <span
                      key={bi}
                      className="px-3 py-1 rounded-full border border-[#EEECE2]/10 text-[#EEECE2]/50 text-[10px] uppercase tracking-[0.15em]"
                    >
                      {badge}
                    </span>
                  ))}
                </motion.div>
              )}

              {/* Panel counter */}
              <div className="mt-10">
                <span className="text-[#EEECE2]/15 font-mono text-xs tracking-widest">
                  {String(i + 1).padStart(2, "0")} / {String(totalPanels).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
