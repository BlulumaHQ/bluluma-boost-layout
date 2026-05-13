import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site-chrome";
import { Star, Award, Clock, ChefHat, ArrowRight, Quote, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glorious Bao & Fried Rice | Online Order | Burnaby, BC" },
      { name: "description", content: "Authentic Taiwanese cuisine in Burnaby, BC. Restaurant-quality bao, fried rice, soup dumplings & gua bao at food court prices. Order online now." },
      { property: "og:title", content: "Glorious Bao & Fried Rice — Authentic Taiwanese in Burnaby" },
      { property: "og:description", content: "Restaurant quality food at food court prices. Order online today." },
      { property: "og:image", content: "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/3.jpg" },
    ],
  }),
  component: Home,
});

const HERO = "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/3.jpg";
const IMG4 = "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/4.jpg";
const IMG5 = "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/5.jpg";

const TESTIMONIALS = [
  { text: "Other reviews are right. This is food prepared at restaurant level of quality, offered at food court prices. I was shocked by how simple egg fried rice could taste so light, yet flavorful.", author: "Rosaline Oh" },
  { text: "Honestly — this was THE BEST meal that my partner and I have had in MONTHS. An absolute gem in the middle of a food court — restaurant quality food, better than most restaurants I've visited in Vancouver.", author: "Amy Prystupa" },
  { text: "Friendly service, excellent! Fresh and tasty food, impressive considering the location in the food court. They go above and beyond for their customers.", author: "Ansa Farooqi" },
  { text: "Glorious is right! Spicy, fresh and made to order. I loved the mango pudding that comes with the combo. Great value and quality — I will definitely be back.", author: "Aly Aly" },
  { text: "Very decent Taiwanese food! The popcorn chicken was delicious with a big portion. The soup dumplings were juicy and tasty. The pork in the gua bao was amazingly tasty!", author: "Sandra Bao" },
];

const SPECIALTIES = [
  { name: "Gua Bao", desc: "Pillowy steamed buns filled with tender, flavor-packed pork.", img: IMG4 },
  { name: "Signature Fried Rice", desc: "Light yet deeply flavorful — a chef's mastery in every grain.", img: IMG5 },
  { name: "Soup Dumplings", desc: "Juicy, hand-crafted xiao long bao. Worth every minute of the wait.", img: HERO },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={HERO} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>
        <div className="container-x pt-24 pb-28 md:pt-36 md:pb-44">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-4 py-1.5 text-xs font-black uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-current" /> Rising Star of Canada's Dining Scene
            </span>
            <h1 className="mt-6 text-[42px] sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">
              Authentic Taiwanese.<br/>
              <span className="text-[color:var(--primary)]">Restaurant Quality.</span><br/>
              Food Court Price.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl">
              Hungry? Order now! Glorious Bao & Fried Rice serves the perfect balance between tradition and innovation — straight to you in Burnaby, BC.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#order" className="btn-primary">Order Online <ArrowRight className="w-4 h-4 ml-2" /></a>
              <Link to="/menu" className="btn-secondary !text-white !border-white">Explore Menu</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-[color:var(--primary)] text-[color:var(--primary)]" /> 5-Star Reviews</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[color:var(--primary)]" /> Made to Order</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-[color:var(--primary)]" /> Restaurant Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[color:var(--primary)] py-6">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[color:var(--primary-foreground)] font-bold text-sm uppercase tracking-wider text-center">
          <span>★ Made to Order</span><span className="opacity-50">•</span>
          <span>Skilled Chef</span><span className="opacity-50">•</span>
          <span>Fresh Ingredients</span><span className="opacity-50">•</span>
          <span>Burnaby, BC</span>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="section bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">Why Glorious</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight">
              Tired of food court food that tastes like… food court food?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We were too. That's why our skilled chef brings true restaurant craft to every dish — light, layered flavors at a price that doesn't bite back.
            </p>
            <ul className="mt-7 space-y-3">
              {["Restaurant-level quality, every plate","Made to order — never sitting under a heat lamp","Authentic Taiwanese recipes, balanced with innovation","Combo meals with creamy mango pudding"].map(t => (
                <li key={t} className="flex gap-3 text-base"><span className="mt-1 grid place-items-center w-5 h-5 rounded-full bg-[color:var(--secondary)] shrink-0"><Check className="w-3 h-3" /></span>{t}</li>
              ))}
            </ul>
            <a href="#order" className="btn-primary mt-8">Hungry? Order Now</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG4} alt="Signature dish" className="rounded-2xl aspect-[4/5] object-cover w-full shadow-xl" />
            <img src={IMG5} alt="Taiwanese specialty" className="rounded-2xl aspect-[4/5] object-cover w-full mt-10 shadow-xl" />
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="section bg-muted">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">What We Serve</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">Let's Explore!</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">Find out what we serve the best here at Glorious Bao & Fried Rice.</p>
            </div>
            <Link to="/menu" className="btn-secondary">View Full Menu</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SPECIALTIES.map(s => (
              <article key={s.name} className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black">{s.name}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-[color:var(--foreground)] text-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !text-[color:var(--primary)]">Loved by Locals</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Real reviews from real foodies</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <figure key={t.author} className="bg-white/5 backdrop-blur rounded-2xl p-7 border border-white/10">
                <Quote className="w-7 h-7 text-[color:var(--primary)]" />
                <blockquote className="mt-4 text-white/90 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--primary)] grid place-items-center text-[color:var(--primary-foreground)] font-black">{t.author[0]}</div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-xs text-[color:var(--primary)] flex">{"★★★★★"}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={HERO} alt="Our story" className="rounded-3xl aspect-[5/4] object-cover w-full shadow-xl" />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">A perfect balance between tradition and innovation.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Glorious Bao & Fried Rice is a rising star of Canada's dining scene. When it comes to authentic Taiwanese cuisine, we are proud to call ourselves the perfect balance between tradition and innovation.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat k="100%" v="Made to Order" />
              <Stat k="5★" v="Customer Reviews" />
              <Stat k="1" v="Burnaby Location" />
            </div>
            <Link to="/about-us" className="btn-secondary mt-8">Learn More</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="order" className="bg-[color:var(--primary)] py-24">
        <div className="container-x text-center text-[color:var(--primary-foreground)]">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">Hungry? Order now!</h2>
          <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto">
            Order your favorite food online at your convenience — fresh, hot, and made to order in Burnaby, BC.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-black bg-[color:var(--foreground)] text-background hover:bg-[color:var(--primary-dark)] transition-all shadow-xl">Online Order <ArrowRight className="w-4 h-4 ml-2" /></a>
            <Link to="/contact-us" className="btn-secondary !border-[color:var(--foreground)]">Contact Us</Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold"><Clock className="w-4 h-4" /> Fresh & made to order — every time</div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-black text-[color:var(--primary-dark)]">{k}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
    </div>
  );
}
