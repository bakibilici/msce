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

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <div className="flex flex-col items-center justify-start w-full bg-[#EEECE2] font-sans pb-32">
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

      {/* Next Project Link */}
      <section className="relative z-20 w-full max-w-7xl mx-auto border-x border-[#262827]/10 bg-[#EEECE2]">
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="group flex flex-col items-center justify-center py-32 md:py-48 hover:bg-[#262827] transition-colors duration-700 relative overflow-hidden"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#757776] group-hover:text-[#EEECE2]/60 mb-8 transition-colors z-10">Sıradaki Proje</span>
          <h2 className="text-4xl md:text-7xl font-medium tracking-tighter text-[#262827] group-hover:text-[#EEECE2] transition-colors z-10">{nextProject.title}</h2>
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(45deg, #EEECE2 25%, transparent 25%, transparent 75%, #EEECE2 75%, #EEECE2), linear-gradient(45deg, #EEECE2 25%, transparent 25%, transparent 75%, #EEECE2 75%, #EEECE2)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        </Link>
      </section>
    </div>
  );
}
