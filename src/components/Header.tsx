import Image from 'next/image';

export default function Header({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />
    </div>
  );
}
