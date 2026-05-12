import Image from "next/image";

type FeedbackStripProps = {
  images: readonly string[];
  ariaLabel: string;
  photoLabel: string;
};


export function FeedbackStrip({
  images,
  ariaLabel,
  photoLabel,
}: FeedbackStripProps) {
  if (images.length === 0) return null;

  return (
    <div className="relative -mx-4 md:-mx-6">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent md:w-14 md:opacity-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:w-14 md:opacity-0"
        aria-hidden
      />
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 max-md:[-ms-overflow-style:none] max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden md:gap-4 md:px-6 md:pb-3 md:[scrollbar-width:thin] md:[scrollbar-color:var(--muted-foreground)_var(--muted)]"
      >
        {images.map((src, idx) => (
          <figure
            key={src}
            className="relative h-52 w-[min(88vw,22rem)] shrink-0 snap-center overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 sm:h-60 sm:w-[min(72vw,26rem)] md:h-64 md:w-[min(56vw,28rem)] lg:h-72 lg:w-[min(42vw,30rem)]"
          >
            <Image
              src={src}
              alt={`${photoLabel} ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 768px) 72vw, (max-width: 1024px) 56vw, 42vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
