import { Sparkles } from "lucide-react";

export function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-blush p-10 sm:p-16 text-center shadow-luxe">
        <Sparkles className="absolute top-8 left-10 size-5 text-primary/40 animate-sparkle" />
        <Sparkles className="absolute bottom-10 right-12 size-6 text-primary/40 animate-sparkle" style={{ animationDelay: "1.4s" }} />
        <div className="absolute -top-20 -right-20 size-64 rounded-full bg-rose/20 blur-3xl" />

        <div className="relative max-w-xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Pink Letter</div>
          <h2 className="font-display text-4xl sm:text-5xl">Join the <span className="font-script text-gradient-rose">VIPASI</span> circle</h2>
          <p className="mt-4 text-muted-foreground">Early access to drops, styling muses, and a 10% welcome treat.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-6 py-4 rounded-full bg-card/80 border border-border focus:border-primary outline-none text-sm" />
            <button type="submit" className="bg-gradient-rose text-primary-foreground px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium shadow-luxe hover:shadow-glow transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
