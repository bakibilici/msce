import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.indexOf(project);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pb-16 pt-24">
      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 md:px-12 border-x border-[#262827]/10 pt-48 md:pt-64">
        <div className="z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] font-medium">#{project.num}</span>
              <div className="h-[1px] w-12 bg-[#262827]/20"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#757776] font-medium">{project.category}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1] mb-16 text-[#262827]">
              {project.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Info Grid */}
      <section className="relative z-20 w-full max-w-7xl mx-auto border-x border-y border-[#262827]/10 bg-[#EEECE2]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#262827]/10">
          <div className="p-8 lg:p-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#757776] mb-4 block font-medium">Lokasyon</span>
            <p className="text-xl text-[#262827]">{project.location}</p>
          </div>
          <div className="p-8 lg:p-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#757776] mb-4 block font-medium">Tarih</span>
            <p className="text-xl text-[#262827]">{project.date}</p>
          </div>
          <div className="p-8 lg:p-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#757776] mb-4 block font-medium">Alan</span>
            <p className="text-xl text-[#262827]">{project.area}</p>
          </div>
          <div className="p-8 lg:p-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#757776] mb-4 block font-medium">Tipoloji</span>
            <p className="text-xl text-[#262827] font-medium uppercase truncate pr-5">{project.type}</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="relative z-20 w-full max-w-7xl mx-auto border-x border-b border-[#262827]/10 bg-[#EEECE2] p-6 md:p-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {project.images.map((img, i) => (
            <StaggerItem key={i} className={`overflow-hidden bg-[#e0dcd0] group relative ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
              <div className="aspect-[16/9] w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-out">
                 <Image
                  src={encodeURI(img)}
                  alt={`${project.title} - ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Refined Navigation */}
      <section className="relative z-30 w-full max-w-7xl mx-auto border-x border-[#262827]/10 bg-[#EEECE2]">
        <div className="grid grid-cols-2 divide-x divide-[#262827]/10">
          <Link 
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col items-start justify-center p-8 md:p-16 hover:bg-[#262827] transition-all duration-700 relative overflow-hidden active:scale-[0.99]"
          >
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#757776] group-hover:text-[#EEECE2]/50 mb-4 transition-colors z-10 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="rotate-180">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Önceki Proje
            </span>
            <h4 className="text-xl md:text-3xl font-medium text-[#262827] group-hover:text-[#EEECE2] transition-colors z-10 leading-tight">{prevProject.title}</h4>
          </Link>

          <Link 
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-end justify-center p-8 md:p-16 hover:bg-[#262827] transition-all duration-700 relative overflow-hidden active:scale-[0.99] text-right"
          >
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#757776] group-hover:text-[#EEECE2]/50 mb-4 transition-colors z-10 flex items-center gap-2 justify-end">
              Sıradaki Proje
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h4 className="text-xl md:text-3xl font-medium text-[#262827] group-hover:text-[#EEECE2] transition-colors z-10 leading-tight">{nextProject.title}</h4>
          </Link>
        </div>
      </section>
    </div>
  );
}
