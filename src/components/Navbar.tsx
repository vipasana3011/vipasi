import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "New In", to: "/" },
  { label: "Sarees", to: "/" },
  { label: "Lehengas", to: "/" },
  { label: "Kurtis", to: "/" },
  { label: "Co-ords", to: "/" },
  { label: "Festive", to: "/" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-gradient-rose text-primary-foreground text-xs sm:text-sm py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 px-6 font-medium tracking-wider">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>✦ FREE SHIPPING ON ORDERS OVER ₹2,999</span>
              <span>✦ NEW DROP — BLUSH BRIDAL EDIT</span>
              <span>✦ 10% OFF FIRST ORDER · CODE VIPASI10</span>
              <span>✦ SHIPPING WORLDWIDE</span>
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-40 glass border-b border-border/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
            <Menu className="size-5" />
          </button>

          {/* Replace logo here */}
          <Link to="/" className="font-display text-2xl sm:text-3xl tracking-[0.25em] text-gradient-rose font-semibold">
            VIPASI
          </Link>

          <ul className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest text-foreground/80">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-rose group-hover:w-full transition-all duration-500" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 sm:gap-5 text-foreground/80">
            <button aria-label="Search" className="hover:text-primary transition-colors"><Search className="size-5" /></button>
            <button aria-label="Account" className="hidden sm:block hover:text-primary transition-colors"><User className="size-5" /></button>
            <button aria-label="Wishlist" className="hover:text-primary transition-colors relative">
              <Heart className="size-5" />
            </button>
            <button aria-label="Cart" className="hover:text-primary transition-colors relative">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-2 -right-2 size-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">2</span>
            </button>
          </div>
        </nav>

        {open && (
          <ul className="lg:hidden flex flex-col gap-1 px-6 pb-6 text-sm uppercase tracking-widest text-foreground/80 animate-fade-up">
            {navLinks.map((l) => (
              <li key={l.label}><Link to={l.to} className="block py-2 border-b border-border/40">{l.label}</Link></li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
