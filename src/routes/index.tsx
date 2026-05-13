import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site-chrome";
import { Star, ArrowRight, Flame, Clock, MapPin, Instagram, Play, ChevronRight, Sparkles } from "lucide-react";
import heroBao from "@/assets/hero-bao.jpg";
import dishPopcorn from "@/assets/dish-popcorn-chicken.jpg";
import dishDumplings from "@/assets/dish-soup-dumplings.jpg";
import dishBraised from "@/assets/dish-braised-pork.jpg";
import dishNoodles from "@/assets/dish-noodles.jpg";
import dishScallion from "@/assets/dish-scallion.jpg";
import bubbleTea from "@/assets/bubble-tea.jpg";
import wok from "@/assets/cinematic-wok.jpg";
import nightMarket from "@/assets/night-market.jpg";
import spread from "@/assets/spread.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glorious Bao — Modern Taiwanese Street Food in Burnaby, BC" },
      { name: "description", content: "Night market energy, modern flavor. Hand-crafted Taiwanese gua bao, soup dumplings, popcorn chicken & bubble tea in Brentwood, Burnaby. Order online for pickup or delivery." },
      { property: "og:title", content: "Glorious Bao — Modern Taiwanese Street Food" },
      { property: "og:description", content: "Bold flavor. Late-night energy. Vancouver's hidden Taiwanese food gem." },
      { property: "og:image", content: heroBao },
      { property: "og:type", content: "restaurant" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Glorious Bao & Fried Rice",
        servesCuisine: ["Taiwanese", "Asian Street Food"],
        priceRange: "$",
        address: { "@type": "PostalAddress", addressLocality: "Burnaby", addressRegion: "BC", addressCountry: "CA" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "320" },
      }),
    }],
  }),
  component: Home,
});

const FEATURED = [
  { name: "Soul-Pork Gua Bao", img: heroBao, tag: "Signature", tagClass: "tag", desc: "Pillow-soft steamed bun. Slow-braised pork belly. Crushed peanut. Cilantro." },
  { name: "Popcorn Chicken", img: dishPopcorn, tag: "Crispy · Spicy", tagClass: "tag tag-red", desc: "Shatter-crisp Taiwanese fried chicken with basil & chili salt." },
  { name: "Soup Dumplings", img: dishDumplings, tag: "Hand-Folded", tagClass: "tag tag-gold", desc: "Eighteen pleats. Liquid gold inside. The classic xiao long bao." },
  { name: "Braised Pork Rice", img: dishBraised, tag: "Comfort", tagClass: "tag", desc: "Lu rou fan — glossy braise over fluffy rice with tea egg." },
];

const GRID = [
  { name: "Bao", img: heroBao, count: "5 styles" },
  { name: "Dumplings", img: dishDumplings, count: "4 styles" },
  { name: "Rice Bowls", img: dishBraised, count: "6 styles" },
  { name: "Noodles", img: dishNoodles, count: "5 styles" },
  { name: "Street Snacks", img: dishScallion, count: "8 styles" },
  { name: "Bubble Tea", img: bubbleTea, count: "12 styles" },
];

const REVIEWS = [
  { quote: "An absolute hidden gem inside the food court. Restaurant-quality food, better than most spots in Vancouver.", author: "Amy P.", handle: "@amyeats", tag: "Hidden Gem" },
  { quote: "The popcorn chicken is unreal. Crispy, juicy, basil-everywhere. I drove from Surrey just for this.", author: "Ansa F.", handle: "@ansa.foods", tag: "Worth The Drive" },
  { quote: "Soup dumplings here actually have soup. Wrapper is thin. Broth is rich. 10/10.", author: "Sandra B.", handle: "@sandrabao", tag: "Best In BC" },
  { quote: "My new late-night comfort food obsession. Bao + bubble tea = perfect night.", author: "Aly", handle: "@alynightowl", tag: "Late Night Fave" },
];

const BLOG = [
  { title: "What Is Taiwanese Gua Bao? A Beginner's Guide", cat: "Food Guide", img: heroBao, read: "4 min" },
  { title: "Why Soup Dumplings Are So Addictive", cat: "Food Culture", img: dishDumplings, read: "5 min" },
  { title: "Hidden Taiwanese Food Gems Near Brentwood", cat: "Vancouver Eats", img: nightMarket, read: "6 min" },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBao} alt="" width={1920} height={1080} className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.16 0.012 60 / 0.55) 0%, oklch(0.16 0.012 60 / 0.7) 50%, oklch(0.16 0.012 60) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, oklch(0.78 0.19 55 / 0.35), transparent 60%)" }} />
        </div>

        <div className="container-x pt-20 pb-32 md:pt-28 md:pb-44 relative">
          <div className="max-w-4xl float-up">
            <div className="flex items-center gap-3 mb-7">
              <span className="tag"><Sparkles className="w-3 h-3" /> Vancouver's Hidden Gem</span>
              <span className="hidden sm:inline-flex tag tag-gold">★ 4.9 / 5 · 320+ Reviews</span>
            </div>

            <h1 className="display text-[clamp(46px,9vw,140px)] uppercase">
              Night Market<br/>
              <span className="text-gradient italic font-display" style={{ fontWeight: 600 }}>energy.</span><br/>
              Modern flavor.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed">
              Hand-folded soup dumplings. Glistening braised pork. Shatter-crisp chicken. Modern Taiwanese street food, served late, made the way it should be.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#order" className="btn-primary">
                Order Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/menu" className="btn-ghost">
                Explore Menu
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <div className="flex items-center gap-2"><Flame className="w-3.5 h-3.5 text-[color:var(--primary)]" /> Made to Order</div>
              <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[color:var(--primary)]" /> Open Late</div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[color:var(--primary)]" /> Brentwood, BNY</div>
            </div>
          </div>
        </div>

        {/* Floating dish chip */}
        <div className="hidden lg:block absolute right-10 bottom-24 w-72 glow-card rounded-3xl p-4 backdrop-blur">
          <img src={dishPopcorn} alt="Popcorn chicken" className="rounded-2xl aspect-square object-cover w-full" loading="lazy" />
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Trending</div>
              <div className="font-display font-bold text-base">Popcorn Chicken</div>
            </div>
            <span className="tag tag-red">🔥 Hot</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/5 py-5 overflow-hidden bg-background">
        <div className="marquee whitespace-nowrap text-2xl md:text-4xl font-display font-bold uppercase tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0 items-center">
              {["Gua Bao", "★", "Soup Dumplings", "★", "Popcorn Chicken", "★", "Bubble Tea", "★", "Beef Noodle", "★", "Late Night Eats", "★"].map((t, j) => (
                <span key={j} className={j % 2 ? "text-[color:var(--primary)]" : "text-foreground/30"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED MUST-TRY */}
      <section className="section relative">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div className="eyebrow">Must Try</div>
              <h2 className="display text-5xl md:text-7xl mt-4 uppercase">The cravings<br/><span className="text-gradient">start here.</span></h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Four dishes that have become local obsessions. Order one — or all of them.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED.map((d, i) => (
              <article key={d.name} className="glow-card rounded-3xl overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4"><span className={d.tagClass}>{d.tag}</span></div>
                  <div className="absolute bottom-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] opacity-0 group-hover:opacity-100 transition">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">0{i + 1} / 04</div>
                  <h3 className="mt-2 font-display font-bold text-2xl">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={nightMarket} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background), transparent 30%, transparent 70%, var(--background))" }} />
        </div>
        <div className="container-x py-28 md:py-40 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow">Street Food Culture</div>
              <h2 className="display text-5xl md:text-7xl mt-4 uppercase leading-[0.95]">
                Born in the<br/>
                <span className="text-gradient italic" style={{ fontWeight: 600 }}>night market.</span><br/>
                Built for now.
              </h2>
              <p className="mt-7 text-lg text-foreground/80 max-w-xl leading-relaxed">
                In Taiwan, the best food doesn't come from white tablecloths — it comes from sizzling carts, neon-lit alleys, and chefs who've made the same dish ten thousand times.
              </p>
              <p className="mt-4 text-lg text-foreground/70 max-w-xl leading-relaxed">
                We brought that energy to Burnaby. Hand-folded. Made to order. Recipes learned the long way. No shortcuts, no apologies.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/about-us" className="btn-ghost">Our Story <ChevronRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="glow-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-gradient">100%</div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Hand-Folded Daily</div>
              </div>
              <div className="glow-card rounded-2xl p-6 text-center mt-8">
                <div className="text-4xl font-display font-bold text-gradient">4.9★</div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">320+ Reviews</div>
              </div>
              <div className="glow-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-gradient">12hr</div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Slow-Braised Pork</div>
              </div>
              <div className="glow-card rounded-2xl p-6 text-center mt-8">
                <div className="text-4xl font-display font-bold text-gradient">∞</div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Late-Night Energy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE GRID */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow">The Menu</div>
              <h2 className="display text-5xl md:text-7xl mt-4 uppercase">Pick your<br/><span className="text-gradient">poison.</span></h2>
            </div>
            <Link to="/menu" className="btn-ghost">Full Menu <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GRID.map((c, i) => (
              <Link key={c.name} to="/menu" className={`group relative overflow-hidden rounded-3xl glow-card ${i === 0 ? "lg:row-span-2 aspect-[4/5] lg:aspect-auto" : "aspect-square"}`}>
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--primary)]">{c.count}</div>
                  <div className="font-display font-bold text-3xl md:text-4xl mt-1 flex items-center justify-between">
                    {c.name}
                    <ArrowRight className="w-5 h-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={wok} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="container-x py-28 md:py-44 relative">
          <div className="max-w-xl">
            <div className="eyebrow">Behind The Wok</div>
            <h2 className="display text-5xl md:text-7xl mt-4 uppercase">
              <span className="text-gradient italic" style={{ fontWeight: 600 }}>Fire.</span> Smoke.<br/>
              Obsession.
            </h2>
            <p className="mt-7 text-lg text-foreground/80 leading-relaxed">
              Every plate is a small ritual — wok hei rising, steam billowing, sauces glazing. We cook like the lights might go out tomorrow.
            </p>
            <button className="mt-9 inline-flex items-center gap-3 group">
              <span className="grid place-items-center w-14 h-14 rounded-full transition group-hover:scale-110" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <Play className="w-5 h-5 text-[color:var(--primary-foreground)] ml-0.5 fill-current" />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.25em]">Watch the Kitchen</span>
            </button>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center">Loved In Vancouver</div>
            <h2 className="display text-5xl md:text-7xl mt-4 uppercase">Real talk from<br/><span className="text-gradient">real foodies.</span></h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="glow-card rounded-3xl p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex text-[color:var(--primary)] text-sm">{"★★★★★"}</div>
                  <span className="tag tag-red">{r.tag}</span>
                </div>
                <blockquote className="mt-5 text-foreground/85 leading-relaxed flex-1">"{r.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="grid place-items-center w-10 h-10 rounded-full font-display font-bold" style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}>{r.author[0]}</div>
                  <div>
                    <div className="font-bold text-sm">{r.author}</div>
                    <div className="text-xs text-[color:var(--primary)]">{r.handle}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM / GALLERY */}
      <section className="section bg-card/30 border-y border-white/5">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow"><Instagram className="w-3 h-3" /> @gloriousbao</div>
              <h2 className="display text-5xl md:text-7xl mt-4 uppercase">Tagged.<br/><span className="text-gradient">Devoured.</span></h2>
            </div>
            <a href="#" className="btn-ghost">Follow Us <Instagram className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[heroBao, dishPopcorn, dishDumplings, bubbleTea, dishBraised, dishNoodles, dishScallion, spread].map((src, i) => (
              <a key={i} href="#" className="relative group overflow-hidden rounded-2xl aspect-square">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition grid place-items-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow">Field Notes</div>
              <h2 className="display text-5xl md:text-7xl mt-4 uppercase">Read,<br/><span className="text-gradient">then eat.</span></h2>
            </div>
            <a href="#" className="btn-ghost">All Stories <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG.map((b) => (
              <a key={b.title} href="#" className="group">
                <div className="overflow-hidden rounded-3xl aspect-[4/3] mb-5">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[color:var(--primary)]">
                  <span>{b.cat}</span><span className="text-muted-foreground">·</span><span className="text-muted-foreground">{b.read}</span>
                </div>
                <h3 className="font-display font-bold text-2xl mt-3 group-hover:text-[color:var(--primary)] transition">{b.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section bg-card/30 border-y border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow">Find Us</div>
            <h2 className="display text-5xl md:text-7xl mt-4 uppercase">In the mall.<br/><span className="text-gradient">Out of this world.</span></h2>
            <p className="mt-7 text-lg text-foreground/80 leading-relaxed max-w-lg">
              We live inside Brentwood Mall's food court — which means free parking, easy access, AC in summer, and a perfect 12-minute pit stop between shops.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Free Parking", "All-day"],
                ["Mall Access", "7 days / week"],
                ["Quick Pickup", "Avg 8 min"],
                ["Late Night", "Open till close"],
              ].map(([t, s]) => (
                <li key={t} className="glow-card rounded-2xl p-5">
                  <div className="font-display font-bold text-lg">{t}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s}</div>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact-us" className="btn-primary">Get Directions <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:" className="btn-ghost">Call Ahead</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glow-card">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Brentwood+Town+Centre+Burnaby&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* DELIVERY CTA */}
      <section id="order" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={spread} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.19 55 / 0.25), transparent 65%)" }} />
        </div>
        <div className="container-x py-28 md:py-40 text-center relative">
          <div className="eyebrow justify-center">Hungry?</div>
          <h2 className="display text-6xl md:text-8xl mt-5 uppercase">
            <span className="text-gradient italic" style={{ fontWeight: 600 }}>Crave it.</span><br/>
            Order it. Done.
          </h2>
          <p className="mt-7 text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
            Pickup in 8 minutes. Delivery to your couch. However you want it — we'll bring the night market to you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Uber Eats", "DoorDash", "SkipTheDishes"].map((p) => (
              <a key={p} href="#" className="btn-ghost">{p}</a>
            ))}
          </div>
          <div className="mt-6">
            <a href="#" className="btn-primary !px-10 !py-5 !text-base">
              Order Direct — No Fees <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
