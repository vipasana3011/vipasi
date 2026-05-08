import saree from "@/assets/product-saree.jpg";
import kurti from "@/assets/product-kurti.jpg";
import lehenga from "@/assets/product-lehenga.jpg";
import coord from "@/assets/product-coord.jpg";
import { Heart } from "lucide-react";

// Replace product photos here
const products = [
  { name: "Gulaab Silk Saree", price: "₹18,400", tag: "Bestseller", img: saree },
  { name: "Noor Chikan Kurti", price: "₹6,200", tag: "New", img: kurti },
  { name: "Roohi Bridal Lehenga", price: "₹84,000", tag: "Couture", img: lehenga },
  { name: "Saanjh Co-ord Set", price: "₹12,800", tag: "Limited", img: coord },
  { name: "Mehr Pink Saree", price: "₹16,900", tag: "Trending", img: saree },
  { name: "Aaroh Cream Co-ord", price: "₹11,400", tag: "New", img: coord },
];

export function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Loved by Muses</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Trending <span className="font-script text-gradient-rose">now</span></h2>
        </div>
        <a className="hidden sm:block text-sm uppercase tracking-widest text-primary hover:text-primary/70 cursor-pointer">View all →</a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.slice(0, 8).map((p, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary shadow-soft">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute top-3 left-3 glass text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-primary">{p.tag}</span>
              <button className="absolute top-3 right-3 glass size-9 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Heart className="size-4" />
              </button>
              <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <button className="w-full bg-gradient-rose text-primary-foreground text-xs uppercase tracking-widest py-3 rounded-xl shadow-luxe">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="pt-4 px-1 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg leading-tight">{p.name}</h3>
                <div className="text-xs text-muted-foreground mt-1">★ 4.9 · 240 reviews</div>
              </div>
              <div className="font-display text-lg text-primary whitespace-nowrap">{p.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
