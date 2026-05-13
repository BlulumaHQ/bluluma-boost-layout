import { Link } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";

const LOGO = "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/Logo-TM.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about-us", label: "About" },
  { to: "/contact-us", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
      <div className="container-x flex items-center justify-between h-[90px]">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="Glorious Bao & Fried Rice" style={{ height: 75 }} />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-bold uppercase tracking-wider hover:text-[color:var(--primary-dark)] data-[status=active]:text-[color:var(--primary-dark)]">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#order" className="btn-primary !py-2.5 !px-5 !text-sm">Online Order</a>
        </div>
      </div>
    </header>
  );
}

export function StickyCTA() {
  return (
    <>
      {/* Desktop right side */}
      <a href="#order"
         className="btn-sticky hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 rounded-l-2xl rounded-r-none px-5 py-6 text-sm font-bold shadow-2xl uppercase tracking-widest"
         style={{ writingMode: "vertical-rl" }}>
        Order Now →
      </a>
      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex gap-2">
        <a href="tel:" className="btn-secondary flex-1 !py-3 !text-sm gap-2"><Phone className="w-4 h-4" /> Call</a>
        <a href="#order" className="btn-primary flex-1 !py-3 !text-sm">Order Now</a>
      </div>
    </>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--foreground)] text-background pt-20 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="text-2xl font-black tracking-tight">Glorious Bao<br/><span className="text-[color:var(--primary)]">& Fried Rice</span></div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">Authentic Taiwanese cuisine — restaurant quality at food court prices. A rising star of Canada's dining scene.</p>
          </div>
          <div className="hidden md:block md:col-span-1" aria-hidden />
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-white/75">
              {NAV.map(n => <li key={n.to}><Link to={n.to} className="hover:text-[color:var(--primary)]">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Specialties</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Gua Bao</li><li>Fried Rice</li><li>Soup Dumplings</li><li>Popcorn Chicken</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Visit</h4>
            <p className="text-sm text-white/75 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Burnaby, BC, Canada</p>
            <a href="#order" className="btn-primary mt-5 !py-2.5 !px-5 !text-sm">Online Order</a>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-white/50">
          © {year} Glorious Bao & Fried Rice. All rights reserved. | Web Design by{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--primary)] underline-offset-2 hover:underline">Bluluma</a>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
