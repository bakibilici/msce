export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#020617] font-sans selection:bg-brand selection:text-black">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40"></div>
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-brand/5 blur-[100px]"></div>

      <main className="z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center md:px-12">
        {/* Icon / Abstract construction logo */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-fade-up shadow-[0_0_40px_rgba(245,158,11,0.1)] relative">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-brand rounded-b-2xl"></div>
          <svg
            className="h-10 w-10 text-brand animate-float"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="text-glow animate-fade-up delay-100 text-6xl font-extrabold tracking-tighter text-white sm:text-8xl md:text-9xl">
          MSCE
        </h1>

        {/* Separator line */}
        <div className="my-8 flex w-full max-w-sm items-center justify-center sm:max-w-md animate-fade-up delay-300">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
          <div className="mx-4 h-2 w-2 rotate-45 bg-brand"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
        </div>

        {/* Announcement Text */}
        <h2 className="animate-fade-up delay-500 text-2xl font-light tracking-widest text-slate-300 sm:text-3xl md:text-4xl">
          YAPIM AŞAMASINDA
        </h2>

        <p className="mt-6 max-w-2xl animate-fade-up delay-700 text-base leading-relaxed text-slate-400 sm:text-lg">
          Sizlere daha iyi bir deneyim sunabilmek için web sitemizi yeniliyoruz. 
          Çok yakında yepyeni yüzümüzle burada olacağız.
        </p>

        {/* Coming soon indicator */}
        <div className="mt-16 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm animate-fade-up delay-700">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-brand"></span>
          </div>
          <span className="text-sm font-medium tracking-wide text-slate-200 uppercase">
            Yakında Sizlerleyiz
          </span>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="absolute bottom-6 z-10 text-center text-xs text-slate-500 animate-fade-up delay-700">
        &copy; {new Date().getFullYear()} MSCE İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
