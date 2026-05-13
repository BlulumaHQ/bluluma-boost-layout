import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Send, Flame } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about-us", label: "About" },
  { to: "/contact-us", label: "Contact" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid place-items-center w-9 h-9 rounded-full" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
        <Flame className="w-4 h-4 text-[color:var(--primary-foreground)]" />
      </div>
      <div className="leading-none">
        <div className="font-display font-bold text-[15px] tracking-tight">GLORIOUS BAO</div>
        <div className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground mt-0.5">Taiwanese · Vancouver</div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-white/5">
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link to="/"><Wordmark /></Link>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-[12px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition data-[status=active]:text-[color:var(--primary)]">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#order" className="btn-primary !py-2.5 !px-5 !text-xs">Order Now</a>
        </div>
      </div>
    </header>
  );
}

export function StickyCTA() {
  return (
    <>
      <a href="#order"
         className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 items-center gap-2 rounded-l-2xl rounded-r-none px-4 py-6 text-xs font-bold uppercase tracking-[0.3em]"
         style={{ writingMode: "vertical-rl", background: "var(--gradient-primary)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" }}>
        Order · Now
      </a>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-2">
        <a href="tel:" className="btn-ghost flex-1 !py-3 !text-xs"><Phone className="w-4 h-4" /> Call</a>
        <a href="#order" className="btn-primary flex-1 !py-3 !text-xs">Order Now</a>
      </div>
    </>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-24 pb-8 border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-50" style={{ background: "radial-gradient(ellipse at top, oklch(0.78 0.19 55 / 0.12), transparent 60%)" }} />
      <div className="container-x relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-4">
            <Wordmark />
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Modern Taiwanese street food. Bold flavor, late-night energy — handcrafted in Burnaby, BC.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="grid place-items-center w-9 h-9 rounded-full border border-white/10 hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="grid place-items-center w-9 h-9 rounded-full border border-white/10 hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition"><Send className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="hidden md:block md:col-span-1" aria-hidden />
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] mb-4 text-muted-foreground">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV.map(n => <li key={n.to}><Link to={n.to} className="text-foreground/80 hover:text-[color:var(--primary)] transition">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] mb-4 text-muted-foreground">Eat</h4>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>Gua Bao</li><li>Soup Dumplings</li><li>Popcorn Chicken</li><li>Bubble Tea</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] mb-4 text-muted-foreground">Visit</h4>
            <p className="text-sm text-foreground/80 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--primary)]" /> Brentwood Mall Food Court<br/>Burnaby, BC, Canada</p>
            <a href="#order" className="btn-primary mt-5 !py-2.5 !px-5 !text-xs">Order Online</a>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {year} Glorious Bao & Fried Rice. All rights reserved.</div>
          <div>
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-[color:var(--primary)] hover:underline underline-offset-4">Bluluma</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
