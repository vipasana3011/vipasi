import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Trending } from "@/components/Trending";
import { FestivalBanner } from "@/components/FestivalBanner";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIPASI — Luxury Ethnic Couture for the Modern Muse" },
      { name: "description", content: "Hand-crafted Indian ethnic couture: sarees, lehengas, kurtis & co-ords. Y2K vintage feminine luxury, made in India." },
      { property: "og:title", content: "VIPASI — Luxury Ethnic Couture" },
      { property: "og:description", content: "Drape yourself in whispered elegance. Hand-crafted ethnic couture for the modern muse." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Trending />
        <FestivalBanner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
