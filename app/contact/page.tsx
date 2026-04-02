"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, FadeInLeft } from "@/components/Motion";

const partners = [
  "ALPİ CEPHE MİMARLIK / Alüminyum İşleri",
  "VİM YAPI / İnşaat İşleri",
  "EVRENSEL YAPI / Malzeme Tedarik",
  "NEVADA İNŞAAT / Malzeme Tedarik",
  "YALOVA MÜHENDİSLİK / Projelendirme Çalışması",
  "ONAR TEKNİK / İklimlendirme İşleri",
  "BUDAKSAN / Çelik İşleri",
  "ÖNCÜ E.M. / Malzeme Tedarik",
  "GİF MÜHENDİSLİK / Ölçüm İşleri",
  "HEMAR MAKİNA / Malzeme Tedarik",
];

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pb-32 pt-24">
      <section className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 md:px-12 border-x border-[#262827]/10 pt-48 md:pt-48">
        <motion.div style={{ y: yHeading, opacity: opacityHeading }} className="z-10">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] mb-6 font-medium">Bize Ulaşın</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 text-[#262827]">
              İletişim
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-xl leading-relaxed text-[#757776] font-light">
              Geleceği birlikte inşa etmek için deneyimli ekibimizle tanışın. Sürdürülebilir projeleriniz için buradayız.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      <section className="relative z-20 w-full max-w-7xl mx-auto border-x border-y border-[#262827]/10 bg-[#EEECE2] flex flex-col md:flex-row overflow-hidden">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 md:border-r border-[#262827]/10 p-12 lg:p-24 flex flex-col justify-between">
          <FadeInLeft>
            <h2 className="text-3xl font-medium text-[#262827] mb-12">Detayları Görüşelim</h2>
            <StaggerContainer className="space-y-12">
              <StaggerItem className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#757776] mb-2 font-medium">E-posta</span>
                <a href="mailto:info@msce.com.tr" className="text-2xl hover:text-[#757776] transition-colors border-b border-transparent hover:border-[#262827]/10 w-max text-[#262827]">info@msce.com.tr</a>
              </StaggerItem>

              <StaggerItem className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#757776] mb-2 font-medium">Web</span>
                <a href="https://www.msce.com.tr" className="text-2xl hover:text-[#757776] transition-colors border-b border-transparent hover:border-[#262827]/10 w-max text-[#262827]">www.msce.com.tr</a>
              </StaggerItem>
            </StaggerContainer>
          </FadeInLeft>

          <FadeIn delay={0.4} className="mt-24">
            <a href="mailto:info@msce.com.tr" className="inline-flex items-center justify-center bg-[#262827] text-[#EEECE2] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#2B2626]/80 transition-colors w-full md:w-auto text-center">
              Mesaj Gönder
            </a>
          </FadeIn>
        </div>

        {/* Partners List */}
        <div className="w-full md:w-1/2 p-12 lg:p-24 bg-[#e0dcd0] border-t md:border-t-0 border-[#262827]/10">
          <FadeIn>
            <h2 className="text-3xl font-medium text-[#262827] mb-12">İş Ortaklarımız</h2>
          </FadeIn>
          <StaggerContainer className="flex flex-col gap-4">
            {partners.map((partner, index) => (
              <StaggerItem key={index} className="border-b border-[#262827]/10 pb-4 last:border-0 last:pb-0 hover:pl-4 transition-all duration-300">
                <span className="text-xs uppercase tracking-widest font-medium text-[#262827] inline-flex items-center gap-4">
                  <span className="font-mono text-[#757776] opacity-60">{(index + 1).toString().padStart(2, '0')}.</span>
                  {partner.split(' / ')[0]}
                  <span className="text-[#757776] font-normal text-[10px]"> / {partner.split(' / ')[1]}</span>
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
