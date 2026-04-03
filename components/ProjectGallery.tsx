"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/Motion";

export default function ProjectGallery({ images, title }: { images: string[], title: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev! + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {images.map((img, i) => (
          <StaggerItem 
            key={i} 
            className={`${i % 3 === 0 ? 'md:col-span-2' : ''}`}
          >
            <div 
              className="overflow-hidden bg-[#e0dcd0] group relative cursor-pointer w-full h-full"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden transition-transform duration-1000 ease-out">
                 <div className="w-full h-full group-hover:scale-105 transition-transform duration-1000">
                   <Image
                  src={encodeURI(img)}
                  alt={`${title} - ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
               </div>
            </div>
            {/* Hover overlay icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 z-10 pointer-events-none">
               <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#262827]/95 backdrop-blur-md flex items-center justify-center px-4 md:px-12"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-12 md:right-12 z-50 text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all p-4 outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Previous Button */}
            <button 
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all p-4 outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all p-4 outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! + 1) % images.length);
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center p-4 md:p-8 outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={encodeURI(images[selectedIndex])}
                alt={`${title} - Gallery Image ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
              {/* Pagination */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-xs tracking-widest bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
