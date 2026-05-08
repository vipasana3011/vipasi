const reviews = [
  { name: "Ananya R.", city: "Mumbai", text: "My Roohi lehenga felt like wearing a love letter. Every petal of embroidery — perfection.", rating: 5 },
  { name: "Ishita M.", city: "Delhi", text: "VIPASI is the only brand that gets soft-girl ethnic right. I bought three sarees in a week.", rating: 5 },
  { name: "Priya K.", city: "Bangalore", text: "Felt like a Y2K Bollywood heroine at my engagement. Compliments still flooding in.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Whispers of Love</div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">From our <span className="font-script text-gradient-rose">muses</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass rounded-3xl p-8 hover-lift">
            <div className="text-gold text-lg tracking-widest mb-4">{"★".repeat(r.rating)}</div>
            <p className="font-display text-xl leading-snug text-foreground/90">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-6 pt-6 border-t border-border/60">
              <div className="font-medium">{r.name}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{r.city}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
