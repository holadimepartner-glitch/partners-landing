import reavlyLogo from "@assets/reavly-logo.png";
import labiaLogo from "@assets/labia-logo.png";
import resenameLogo from "@assets/resename-logo.png";
import s3Logo from "@assets/s3-logo.png";
import corpusMundumLogo from "@assets/corpus-mundum-logo.png";
import jewelryLogo from "@assets/oa-jewelry-logo.png";

const logos = [
  { src: reavlyLogo, alt: "Reavly" },
  { src: labiaLogo, alt: "LABiA" },
  { src: resenameLogo, alt: "Reseñame.cl" },
  { src: s3Logo, alt: "S3 Construcciones" },
  { src: corpusMundumLogo, alt: "Corpus Mundum" },
  { src: jewelryLogo, alt: "AA Jewelry" },
];

const allLogos = [...logos, ...logos, ...logos];

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border/50 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Marcas que han acelerado su crecimiento con nosotros
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden select-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee items-center gap-0">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
