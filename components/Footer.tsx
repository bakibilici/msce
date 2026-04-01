import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#EEECE2] text-[#262827] px-6 py-20 z-10 relative border-t border-[var(--color-arch-dark)] border-opacity-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
        <div className="md:col-span-2 flex flex-col items-start">
          <div className="flex items-center gap-4 flex-row">
            <Image
              src="/mscelogo.png"
              alt="MSCE Logo"
              width={100}
              height={30}
              className="object-contain h-12 w-auto mix-blend-multiply"
            />
            <span
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              className={`text-lg md:text-xl font-semibold tracking-[0.15em]`}
            >
              MSCE
            </span>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#757776] mt-4">
            Sürdürülebilir, güvenilir, çağdaş yaşam alanları inşa eden, endüstriyel çözümler ve yenilikçi projeler üreten öncü yapı mimarlık şirketiniz.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-[#262827]">Bağlantılar</h3>
          <ul className="flex flex-col gap-4 text-sm text-[#757776]">
            <li><Link href="/about" className="transition-colors hover:text-[#262827]">Hakkımızda</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-[#262827]">Hizmetler</Link></li>
            <li><Link href="/projects" className="transition-colors hover:text-[#262827]">Projeler</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-[#262827]">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-[#262827]">İletişim</h3>
          <ul className="flex flex-col gap-4 text-sm text-[#757776]">
            <li><a href="mailto:info@msce.com.tr" className="hover:text-[#262827] transition-colors">info@msce.com.tr</a></li>
            <li><a href="tel:+905411098765" className="hover:text-[#262827] transition-colors">+90 541 109 87 65</a></li>
            <li>www.msce.com.tr</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-20 pt-8 border-t arch-border flex flex-col md:flex-row justify-between items-center text-[10px] text-[#757776] uppercase tracking-[0.2em] font-medium w-full">
        <span>&copy; {new Date().getFullYear()} MSCE. Tüm Hakları Saklıdır.</span>
        <span className="mt-4 md:mt-0 opacity-50">Mimari & İnşaat</span>
      </div>
    </footer>
  );
}
