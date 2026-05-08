import heroImg from "@/assets/hero-vipasi.jpg"; // Replace banner image here
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "8%", delay: "0s" },
          { top: "30%", left: "85%", delay: "1.2s" },
          { top: "70%", left: "12%", delay: "2.1s" },
          { top: "55%", left: "78%", delay: "0.6s" },
          { top: "85%", left: "45%", delay: "1.8s" },
        ].map((s, i) => (
          <Sparkles
            key={i}
            className="absolute size-4 text-primary/60 animate-sparkle"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 px-4 sm:px-6 pt-12 lg:pt-20 pb-20 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            New Collection · Autumn '26
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground">
            Drape yourself
            <br />
            in <span className="text-gradient-rose font-script">whispered</span>
            <br />
            elegance.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            Hand-crafted ethnic couture for the modern muse. Where heirloom artistry meets a Y2K romance — softly pink, eternally yours.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group bg-gradient-rose text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium shadow-luxe hover:shadow-glow transition-all duration-500 flex items-center gap-2">
              Shop the Edit
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover-lift">
              Bridal Lookbook
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="font-display text-3xl text-primary">12k+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Happy Brides</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-primary">240+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Artisan Pieces</div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-3xl text-primary">4.9★</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Rated Love</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-rose opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxe">
            {/* Replace banner image here */}
            <img src={heroImg} alt="VIPASI blush pink lehenga editorial" className="w-full h-full object-cover" width={1080} height={1440} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
                <div className="font-display text-lg">Roohi Blush Lehenga</div>
              </div>
              <div className="font-display text-xl text-primary">₹24,800</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-4 glass rounded-2xl px-4 py-3 shadow-soft animate-float hidden sm:block">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Limited Drop</div>
            <div className="font-display text-base">Only 12 pieces</div>
          </div>
        </div>
      </div>
    </section>
  );
}
