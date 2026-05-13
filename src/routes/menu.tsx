import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site-chrome";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Glorious Bao & Fried Rice" },
      { name: "description", content: "Explore our authentic Taiwanese menu — gua bao, fried rice, soup dumplings, popcorn chicken and more. Made to order in Burnaby, BC." },
    ],
  }),
  component: MenuPage,
});

const SECTIONS = [
  {
    title: "Bao & Buns",
    items: [
      { name: "Gua Bao (Pork)", desc: "Pillowy steamed bun, braised pork belly, pickled mustard greens, peanut, cilantro." },
      { name: "Crispy Chicken Bao", desc: "Hand-breaded chicken, house slaw, sweet chili glaze." },
      { name: "Veggie Bao", desc: "Marinated tofu, cucumber, scallion, hoisin." },
    ],
  },
  {
    title: "Signature Fried Rice",
    items: [
      { name: "Egg Fried Rice", desc: "Light, fragrant, perfectly seasoned — a chef's classic." },
      { name: "Chicken Nugget Combo", desc: "Crispy chicken, fried rice and a side of mango pudding." },
      { name: "Spicy Beef Fried Rice", desc: "Bold heat, tender beef, scallion, chili oil." },
    ],
  },
  {
    title: "Dumplings & Snacks",
    items: [
      { name: "Soup Dumplings (Xiao Long Bao)", desc: "Hand-folded, juicy and tender. Worth the wait." },
      { name: "Popcorn Chicken", desc: "Crispy bites tossed with Taiwanese basil and five-spice." },
      { name: "Mango Pudding", desc: "Made with all milk — silky, sweet, refreshing." },
    ],
  },
];

function MenuPage() {
  return (
    <Layout>
      <section className="bg-[color:var(--foreground)] text-background py-24">
        <div className="container-x text-center">
          <span className="eyebrow !text-[color:var(--primary)]">Our Menu</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-black">Let's Explore</h1>
          <p className="mt-4 max-w-xl mx-auto text-white/75">Find out what we serve the best — restaurant quality, made to order.</p>
          <a href="#order" className="btn-primary mt-7 inline-flex">Online Order</a>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          {SECTIONS.map(s => (
            <div key={s.title}>
              <h2 className="text-2xl font-black border-b-2 border-[color:var(--primary)] pb-3">{s.title}</h2>
              <ul className="mt-6 space-y-6">
                {s.items.map(i => (
                  <li key={i.name}>
                    <div className="font-black text-lg">{i.name}</div>
                    <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="bg-[color:var(--primary)] py-20 text-center text-[color:var(--primary-foreground)]">
        <div className="container-x">
          <h2 className="text-4xl md:text-5xl font-black">Hungry? Order now!</h2>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <a href="#" className="inline-flex items-center rounded-full bg-[color:var(--foreground)] text-background px-9 py-4 font-black">Online Order</a>
            <Link to="/contact-us" className="btn-secondary !border-[color:var(--foreground)]">Contact</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
