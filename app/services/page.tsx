"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pt-24">

      {/* Header Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 md:px-12 border-x border-[#262827]/10 pt-48 md:pt-48 border-b">
        <motion.div style={{ y: yHeading, opacity: opacityHeading }} className="z-10">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] mb-6 font-medium">Uzmanlık Alanlarımız</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] text-[#262827]">
              Hizmetlerimiz
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-12 max-w-2xl text-xl leading-relaxed text-[#757776] font-light">
              Ulusal ve uluslararası standartlarda inşaat süreci, tasarım ve bütçe yönetimi hizmetleri ile projelerinize değer katıyoruz.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-x border-[#262827]/10 space-y-32 overflow-hidden bg-[#EEECE2]">
        {/* Projelendirme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <FadeIn className="order-2 lg:order-1 relative aspect-square w-full bg-[#e0dcd0] border border-[#262827]/10 flex flex-col items-center justify-center p-0 overflow-hidden rounded-sm">
            <Image src="/services/design.png" alt="Tasarım ve Uygulama Süreci" fill className="object-cover opacity-90 mix-blend-multiply" />
          </FadeIn>
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-[#757776] uppercase mb-4">01.</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-[#262827] mb-8">Tasarım & Uygulama Süreci</h3>
            <p className="text-[#757776] leading-relaxed font-light mb-6">
              Müşterinin talepleri ve beklentileri doğrultusunda teknik ve mali olanaklar değerlendirilerek alternatif çözümlerle ön tasarım hazırlanır. Onaylı ön tasarım sonrasında konsept tasarımlar hazırlanır ve işveren onayına sunulur. Onaylanan konsept tasarım sonrası yüksek detay seviyesine sahip uygulama projeleri hazırlanır. Standart iş güvenliği önlemleri altında uygulama süreci eksiksiz ve planlı yönetilir.
            </p>
          </FadeIn>
        </div>

        {/* Danışmanlık */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-32 border-t border-[#262827]/10">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-[#757776] uppercase mb-4">02.</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-[#262827] mb-8">Danışmanlık Süreçleri</h3>
            <p className="text-[#757776] leading-relaxed font-light mb-12">
              Farklı danışmanlık hizmetlerini projelerin gereksinimlerini karşılamak adına entegre olarak sunuyoruz.
            </p>
            <StaggerContainer className="space-y-12">
              <StaggerItem className="flex flex-col border-l border-[#262827] pl-6">
                <h4 className="text-xl font-medium text-[#262827] mb-2">Proje Yönetim Danışmanlığı</h4>
                <p className="text-[#757776] font-light">Projelendirmesi tamamlanmış, inşa aşamasında olan/inşa aşaması başlayacak projeleriniz için uygulama süreç kontrolörlük ve danışmanlık hizmetleri.</p>
              </StaggerItem>
              <StaggerItem className="flex flex-col border-l border-[#262827] pl-6">
                <h4 className="text-xl font-medium text-[#262827] mb-2">Tasarım Danışmanlığı</h4>
                <p className="text-[#757776] font-light">Yapı iç ve dış mahallerinde mimari tasarım destek hizmetleri.</p>
              </StaggerItem>
              <StaggerItem className="flex flex-col border-l border-[#262827] pl-6">
                <h4 className="text-xl font-medium text-[#262827] mb-2">İnşaat Süreci Danışmanlığı</h4>
                <p className="text-[#757776] font-light">İnşaat sürecinde bulunan tüm disiplinlerde ihtiyaç duyulan destek.</p>
              </StaggerItem>
              <StaggerItem className="flex flex-col border-l border-[#262827] pl-6">
                <h4 className="text-xl font-medium text-[#262827] mb-2">Bütçe Danışmanlığı</h4>
                <p className="text-[#757776] font-light">Tasarımları tamamlanmış projelerde BoQ, LoC gibi bilgi föyleriyle tahmini maliyet analizi.</p>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>
          <FadeIn delay={0.2} className="relative aspect-square w-full bg-[#d5cfc0] border border-[#262827]/10 flex flex-col items-center justify-center p-0 overflow-hidden rounded-sm">
            <Image src="/services/consultancy.png" alt="Danışmanlık Süreçleri" fill className="object-cover opacity-90 mix-blend-multiply" />
          </FadeIn>
        </div>

        {/* BIM Süreci */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-32 border-t border-[#262827]/10">
          <FadeIn className="order-2 lg:order-1 w-full group overflow-hidden rounded-sm flex items-center justify-center">
            <Image src="/LOD100500.png" alt="BIM LOD 100-500 Model" width={800} height={500} className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" />
          </FadeIn>
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-[#757776] uppercase mb-4">03.</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-[#262827] mb-8">BIM Uygulamaları</h3>
            <p className="text-[#757776] leading-relaxed font-light mb-12">
              Bütün projelerde maliyet, zaman, imalat kontrolü ve doğruluğu kritiktir.
              BIM uygulamaları ile minimum hata ve zaman kaybı hedeflenir. Projelerin kontrol ve takip föyleri, interdisipliner (mimari, statik, elektrik, mekanik) çakışma kontrolleriyle hazırlanır.
            </p>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              <StaggerItem className="flex flex-col">
                <h4 className="text-sm font-bold tracking-widest uppercase text-[#262827] mb-2 inline-flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-[#262827]"></span>Metraj & Maliyet
                </h4>
                <p className="text-[#757776] font-light leading-relaxed">Detaylı BoQ ve BoM listeleri ve maliyet tabloları.</p>
              </StaggerItem>
              <StaggerItem className="flex flex-col">
                <h4 className="text-sm font-bold tracking-widest uppercase text-[#262827] mb-2 inline-flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-[#262827]"></span>Çakışma Kontrolü
                </h4>
                <p className="text-[#757776] font-light leading-relaxed">Farklı disiplinlerin çakışma analizleri ve düzenlenmesi.</p>
              </StaggerItem>
              <StaggerItem className="flex flex-col">
                <h4 className="text-sm font-bold tracking-widest uppercase text-[#262827] mb-2 inline-flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-[#262827]"></span>LOD Seviyeleri
                </h4>
                <p className="text-[#757776] font-light leading-relaxed">LOD100 ile LOD500 arasında yapılandırılmış modeller.</p>
              </StaggerItem>
              <StaggerItem className="flex flex-col">
                <h4 className="text-sm font-bold tracking-widest uppercase text-[#262827] mb-2 inline-flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-[#262827]"></span>Zaman Yönetimi
                </h4>
                <p className="text-[#757776] font-light leading-relaxed">Faktör analizleriyle hazırlanan çalışma programları.</p>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
