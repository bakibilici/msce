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
    <div ref={containerRef} className="relative flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pb-32">
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
                  <StaggerItem key={project.slug} className="border-r border-[#262827]/10 border-b">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="group relative p-8 md:p-12 hover:bg-[#e0dcd0] transition-colors flex flex-col justify-between aspect-square cursor-crosshair overflow-hidden w-full h-full"
                    >
                      <span className="text-xs font-mono text-[#757776] mb-auto block z-10">{project.num} // {project.type}</span>
                      <div className="mt-8 transition-all group-hover:-translate-y-2 duration-500 z-10">
                        <h3 className="text-3xl font-medium text-[#262827] group-hover:text-[#EEECE2] transition-colors mb-6 leading-tight">{project.title}</h3>
                        <div className="grid grid-cols-2 gap-y-4 text-xs tracking-widest uppercase font-medium">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#757776] group-hover:text-[#EEECE2]/60 transition-colors">Lokasyon</span>
                            <span className="text-[#262827] group-hover:text-[#EEECE2] transition-colors truncate pr-2">{project.location}</span>
                          </div>
                          <div className="flex flex-col gap-1 text-right">
                            <span className="text-[#757776] group-hover:text-[#EEECE2]/60 transition-colors">Tarih</span>
                            <span className="text-[#262827] group-hover:text-[#EEECE2] transition-colors truncate">{project.date}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[#757776] group-hover:text-[#EEECE2]/60 transition-colors">Alan</span>
                            <span className="text-[#262827] group-hover:text-[#EEECE2] transition-colors truncate">{project.area}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Background Image on Hover */}
                      <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out">
                        {project.images[0] && (
                          <Image
                            src={encodeURI(project.images[0])}
                            alt={project.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#262827] to-transparent opacity-60"></div>
                      </div>

                      {/* Decorative hover background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #262827 25%, transparent 25%, transparent 75%, #262827 75%, #262827), linear-gradient(45deg, #262827 25%, transparent 25%, transparent 75%, #262827 75%, #262827)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
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
