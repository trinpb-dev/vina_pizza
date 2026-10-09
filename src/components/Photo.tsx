import manifest from '@/content/image-manifest.json';
import Image from 'next/image';

type PhotoProps = {
  id: string;
  ratio: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Photo({ id, ratio, alt, className = '', priority = false }: PhotoProps) {
  const isAvailable = (manifest as Record<string, boolean>)[id];
  const [width, height] = ratio.split('/').map(Number);
  const aspectRatio = `${width} / ${height}`;

  if (!isAvailable) {
    return (
      <div 
        className={`bg-cream border border-line flex items-center justify-center flex-col text-muted font-be-vietnam-pro text-xs overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <div className="w-8 h-8 rounded-full border border-current opacity-50 mb-2 flex items-center justify-center">
          <span>VP</span>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <span className="tracking-widest uppercase">
            {id} &middot; {ratio}
          </span>
        )}
      </div>
    );
  }

  // Next.js Image component unoptimized since it's a static export. 
  // Custom sizes are provided manually in the pipeline script, but here we can just use the 800 and 1600 as srcSet.
  // Actually, since unoptimized is true, Next.js Image won't generate srcSet automatically, so we'll just use a standard img or let Next.js do its best.
  // For now, we return a standard img element to handle custom srcSet.
  return (
    <img
      src={`/images/${id}-800.webp`}
      srcSet={`/images/${id}-800.webp 800w, /images/${id}-1600.webp 1600w`}
      sizes="(max-width: 768px) 100vw, 50vw"
      alt={alt}
      className={`object-cover w-full h-full ${className}`}
      style={{ aspectRatio }}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}
