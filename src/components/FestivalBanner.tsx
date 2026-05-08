import banner from "@/assets/banner-festival.jpg"; // Add your custom campaign banner
import bridal from "@/assets/banner-bridal.jpg";
import { ArrowUpRight } from "lucide-react";

export function FestivalBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[420px] shadow-luxe group">
        <img src={banner} alt="Festive collection" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
        <div className="relative h-full p-8 sm:p-12 flex flex-col justify-end text-primary-foreground max-w-md">
          <div className="text-xs uppercase tracking-[0.3em] mb-4 text-cream/90">Limited Edition Drop</div>
          <h3 className="font-display text-4xl sm:text-5xl leading-tight">The Diwali <span className="font-script">edit</span></h3>
          <p className="mt-3 text-sm text-cream/80">Glowing brocades, festive blush, and gold that never sleeps.</p>
          <button className="mt-6 self-start bg-cream text-foreground px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2">
            Shop Festive <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden min-h-[420px] shadow-luxe group">
        <img src={bridal} alt="Bridal couture" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="relative h-full p-8 flex flex-col justify-end text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] mb-3 text-cream/90">Couture</div>
          <h3 className="font-display text-3xl sm:text-4xl">Bridal <span className="font-script">atelier</span></h3>
          <button className="mt-4 self-start text-xs uppercase tracking-widest underline underline-offset-4">Discover →</button>
        </div>
      </div>
    </section>
  );
}
