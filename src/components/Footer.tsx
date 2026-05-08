import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const cols = [
  { title: "Shop", links: ["New In", "Sarees", "Lehengas", "Kurtis", "Co-ords", "Festive"] },
  { title: "About", links: ["Our Story", "Atelier", "Sustainability", "Press", "Careers"] },
  { title: "Care", links: ["Contact", "FAQ", "Shipping", "Returns", "Size Guide", "Track Order"] },
  { title: "Legal", links: ["Privacy Policy", "Terms", "Refund Policy", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-gradient-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {/* Replace logo here */}
          <div className="font-display text-3xl tracking-[0.25em] text-gradient-rose font-semibold">VIPASI</div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Hand-crafted ethnic couture for the modern muse. Crafted in India with love, lace and a little Y2K romance.
          </p>
          <div className="text-sm space-y-1 text-foreground/80">
            <div>vipasi.in</div>
            <div>care@vipasi.in</div>
            <div>+91 98765 43210</div>
            <div className="text-xs text-muted-foreground pt-1">Atelier · Mumbai · India</div>
          </div>
          <div className="flex gap-3 pt-2">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} className="size-10 rounded-full glass flex items-center justify-center hover:bg-gradient-rose hover:text-primary-foreground hover:shadow-glow transition-all duration-500 cursor-pointer">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="font-display text-base mb-4 text-primary">{c.title}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}><a className="hover:text-primary cursor-pointer transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© 2026 VIPASI Atelier. All whispers reserved.</div>
          <div className="font-script text-base text-primary">made with love in india ✦</div>
        </div>
      </div>
    </footer>
  );
}
