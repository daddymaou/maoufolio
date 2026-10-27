import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <header className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/just-ask-maou.jpg"
          alt="Maou's header image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />
      </header>
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-mono text-gold-600 uppercase tracking-widest mb-4">Hello, I'm Maou</p>
          <h1 className="text-5xl md:text-7xl font-display leading-tight">
            I build things for the web.
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
            I'm Musa Usman (MaouKnowsJava), a Software Engr. Full-Stack developer. building product and tool
            that make the web a better place. Focus on performance,
            accessibility, and clean code.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/work"
              className="px-6 py-3 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors"
            >
              See my work
            </a>
            <a
              href="/blog"
              className="px-6 py-3 border border-stone-300 rounded-lg font-medium text-stone-700 hover:border-stone-400 transition-colors"
            >
              Read my writing
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
