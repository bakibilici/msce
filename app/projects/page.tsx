"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pb-32 pt-24">
      <section className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 md:px-12 border-x border-[#262827]/10 pt-48 md:pt-48 pb-32">
        <motion.div style={{ y: yHeading, opacity: opacityHeading }} className="z-10">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] mb-6 font-medium">Portfolyo</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 text-[#262827]">
              Projelerimiz
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-xl leading-relaxed text-[#757776] font-light">
              Konut, karma ve endüstriyel alanlarda imzamızı attığımız, kalite standartlarında ürettiğimiz sürdürülebilir mimari yapılar.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      <section className="relative z-20 w-full max-w-7xl mx-auto border-x border-t border-[#262827]/10 bg-[#EEECE2]">
        {categories.map((category) => (
          <div key={category}>
            <FadeIn>
              <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-[#262827] py-12 px-6 md:px-12 border-b border-[#262827]/10">
                {category}
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#262827]/10">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <StaggerItem key={project.slug} className="border-r border-[#262827]/10 border-b relative">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="group flex flex-col justify-end aspect-square w-full h-full bg-[#EEECE2] p-4 md:p-6 cursor-pointer"
                    >
                      {/* Media Layer with Frame */}
                      <div className="absolute top-4 left-4 right-4 bottom-4 md:top-6 md:left-6 md:right-6 md:bottom-6 z-0 overflow-hidden rounded-sm transition-transform duration-1000 group-hover:scale-[0.98]">
                        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                        {project.video ? (
                          <video 
                            src={encodeURI(project.video)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster={encodeURI(project.images[0])}
                            className="h-full w-full object-cover"
                          />
                        ) : project.images[0] ? (
                          <Image
                            src={encodeURI(project.images[0])}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : null}
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-500"></div>
                        </div>
                      </div>

                      {/* Default Info (Visible a.k.a Pre-Hover) */}
                      <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 z-10 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-700 group-hover:opacity-0 pointer-events-none overflow-hidden rounded-b-sm">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#262827]/90 via-[#262827]/40 to-transparent"></div>
                        <div className="relative z-20 translate-y-0 group-hover:translate-y-4 transition-transform duration-700">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#EEECE2]/80">#{project.num}</span>
                            <div className="h-[1px] w-6 bg-[#EEECE2]/30"></div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#EEECE2]/80">{project.category}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-serif text-[#EEECE2] leading-[1.1] capitalize tracking-tight">{project.title.toLowerCase()}</h3>
                        </div>
                      </div>

                      {/* Hover Info (Hidden by default) */}
                      <div className="absolute inset-8 z-20 p-4 md:p-8 flex flex-col justify-between text-[#EEECE2] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-mono uppercase tracking-widest">{project.num} // {project.type}</span>
                          <div className="w-12 h-12 rounded-full border border-[#EEECE2]/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight tracking-tighter capitalize">{project.title.toLowerCase()}</h3>
                          <div className="flex flex-wrap gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">
                            <div className="flex flex-col gap-2">
                              <span className="text-[#EEECE2]/40">Lokasyon</span>
                              <span>{project.location}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-[#EEECE2]/40">Alan</span>
                              <span>{project.area}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-[#EEECE2]/40">Tarih</span>
                              <span>{project.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Indicator Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </div>
        ))}
      </section>
    </div>
  );
}
