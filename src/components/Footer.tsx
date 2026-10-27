import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ image = '/footer_image.jpeg', alt = 'Footer image' }: { image?: string; alt?: string }) {
  return (
    <footer className="relative w-full bg-white">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-600 flex items-center justify-center text-white font-display text-sm font-bold">Ma</div>
              <span className="text-lg font-display">Maou</span>
            </Link>
            <p className="text-sm text-stone-600 mt-2">Daddy Maou's Portfolio</p>
          </div>
          <div className="text-center md:text-right text-sm text-stone-500">
            <p>� 2026 Maou</p>
            <p className="text-xs text-stone-400 mt-1">Code | Automate | Iterate</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
