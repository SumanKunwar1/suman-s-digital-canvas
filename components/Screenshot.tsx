import type { Shot } from "@/content/work";

// Each screenshot exists as .avif and .webp under /public; AVIF first, WebP as the fallback.
export function Screenshot({ shot, eager = false, sizes }: { shot: Shot; eager?: boolean; sizes?: string }) {
  return (
    <figure>
      <div className="shot">
        <picture>
          <source srcSet={`${shot.src}.avif`} type="image/avif" sizes={sizes} />
          <img
            src={`${shot.src}.webp`}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
          />
        </picture>
      </div>
      {shot.caption && <figcaption className="shot-caption">{shot.caption}</figcaption>}
    </figure>
  );
}

export function Shots({ shots, eager = false }: { shots: Shot[]; eager?: boolean }) {
  if (shots.length === 0) return null;
  if (shots[0].phone) {
    return (
      <div className="phones">
        {shots.map((s, i) => (
          <Screenshot key={s.src} shot={s} eager={eager && i === 0} />
        ))}
      </div>
    );
  }
  return <Screenshot shot={shots[0]} eager={eager} />;
}
