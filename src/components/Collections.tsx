import saree from "@/assets/product-saree.jpg";
import kurti from "@/assets/product-kurti.jpg";
import lehenga from "@/assets/product-lehenga.jpg";
import coord from "@/assets/product-coord.jpg";

// Replace collection images here
const collections = [
  { name: "Sarees", count: "82 pieces", img: saree, span: "lg:col-span-2 lg:row-span-2" },
  { name: "Lehengas", count: "46 pieces", img: lehenga, span: "" },
  { name: "Kurtis", count: "118 pieces", img: kurti, span: "" },
  { name: "Co-ord Sets", count: "34 pieces", img: coord, span: "lg:col-span-2" },
];

export function Collections() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Curated Universe</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Featured <span className="font-script text-gradient-rose">collections</span></h2>
        </div>
        <p className="text-muted-foreground max-w-sm">Soft silhouettes, heirloom embroidery, and a palette poured straight from rose gardens.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[280px]">
        {collections.map((c) => (
          <a key={c.name} className={`group relative rounded-3xl overflow-hidden shadow-soft hover-lift cursor-pointer ${c.span}`}>
            <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-90">{c.count}</div>
              <div className="font-display text-2xl sm:text-3xl mt-1">{c.name}</div>
              <div className="mt-3 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">Explore →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
