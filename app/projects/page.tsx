"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const projects = [
  { category: "Konut Projeleri", title: "Villa O.T.", location: "Yalova", area: "588 m²", date: "01/2025-09/2025", type: "İnşaat", num: "01" },
  { category: "Konut Projeleri", title: "Villa G.B.", location: "İstanbul", area: "805 m²", date: "07/2024-03/2025", type: "İnşaat", num: "02" },
  { category: "Konut Projeleri", title: "Villa A.F.", location: "İstanbul", area: "188 m²", date: "11/2024-05/2025", type: "İnşaat", num: "03" },
  { category: "Konut Projeleri", title: "Villa B.", location: "Yalova", area: "525 m²", date: "08/2025-Devam", type: "İnşaat", num: "04" },

  { category: "Karma Projeler", title: "NCT AYDINLI", location: "İstanbul", area: "4.218 m²", date: "06/2023-02/2024", type: "Cephe İşleri", num: "05" },
  { category: "Karma Projeler", title: "SİMA LİFE KARTAL", location: "İstanbul", area: "1.050 m²", date: "07/2025-11/2025", type: "Cephe İşleri", num: "06" },
  { category: "Karma Projeler", title: "GÖKDEMİR", location: "İstanbul", area: "945 m²", date: "09/2024-12/2024", type: "Cephe İşleri", num: "07" },
  { category: "Karma Projeler", title: "SİMERCOM", location: "İstanbul", area: "2.264 m²", date: "10/2024-08/2025", type: "Cephe İşleri", num: "08" },
  { category: "Karma Projeler", title: "MAST Misafirhane", location: "Balıkesir", area: "908 m²", date: "10/2024-05/2025", type: "İnşaat/Mimari", num: "09" },

  { category: "Endüstriyel Projeler", title: "HITACHI ENERGY", location: "Kocaeli", area: "4.085 m²", date: "11/2024-01/2026", type: "Cephe", num: "10" },
  { category: "Endüstriyel Projeler", title: "YMW Crane", location: "İstanbul", area: "1.450 m²", date: "08/2021-04/2023", type: "İnşaat", num: "11" },
  { category: "Endüstriyel Projeler", title: "MAST Çiftliği", location: "Balıkesir", area: "2.055 m²", date: "04/2024-09/2024", type: "Cephe İşleri", num: "12" },
  { category: "Endüstriyel Projeler", title: "UŞAKLIGİL Tel Çit", location: "Kocaeli", area: "750 m²", date: "10/2023-02/2024", type: "Cephe İşleri", num: "13" },

  { category: "Diğer Projeler", title: "İSÜ Vadi Kampüs", location: "İstanbul", area: "3.890 m²", date: "10/2023-02/2024", type: "Cephe İşleri", num: "14" },
  { category: "Diğer Projeler", title: "LiV HOSPITAL Ek Bina", location: "Ankara", area: "995 m²", date: "11/2023-03/2024", type: "Cephe İşleri", num: "15" },
];

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
                  <StaggerItem key={index} className="group relative border-r border-[#262827]/10 border-b sm:border-b-0 p-8 md:p-12 hover:bg-[#e0dcd0] transition-colors flex flex-col justify-between aspect-square cursor-crosshair overflow-hidden">
                    <span className="text-xs font-mono text-[#757776] mb-auto block z-10">{project.num} // {project.type}</span>
                    <div className="mt-8 transition-transform group-hover:-translate-y-2 duration-500 z-10">
                      <h3 className="text-3xl font-medium text-[#262827] mb-6 leading-tight">{project.title}</h3>
                      <div className="grid grid-cols-2 gap-y-4 text-xs tracking-widest uppercase font-medium">
                        <div className="flex flex-col gap-1">
                          <span className="text-[#757776]">Lokasyon</span>
                          <span className="text-[#262827] truncate pr-2">{project.location}</span>
                        </div>
                        <div className="flex flex-col gap-1 text-right">
                          <span className="text-[#757776]">Tarih</span>
                          <span className="text-[#262827] truncate">{project.date}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#757776]">Alan</span>
                          <span className="text-[#262827] truncate">{project.area}</span>
                        </div>
                      </div>
                    </div>
                    {/* Decorative hover background pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #262827 25%, transparent 25%, transparent 75%, #262827 75%, #262827), linear-gradient(45deg, #262827 25%, transparent 25%, transparent 75%, #262827 75%, #262827)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </div>
        ))}
      </section>
    </div>
  );
}
