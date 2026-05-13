import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site-chrome";
import { ChefHat, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Glorious Bao & Fried Rice" },
      { name: "description", content: "Glorious Bao & Fried Rice — a rising star of Canada's dining scene. Authentic Taiwanese cuisine in Burnaby, BC." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-[color:var(--foreground)] text-background py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="eyebrow !text-[color:var(--primary)]">Our Story</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-black leading-tight">A balance of tradition & innovation.</h1>
          <p className="mt-6 text-lg text-white/80">Glorious Bao & Fried Rice is a rising star of Canada's dining scene — proud to bring authentic Taiwanese flavors to Burnaby.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src="https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/4.jpg" alt="" className="rounded-3xl shadow-xl aspect-[4/5] object-cover" />
          <div>
            <h2 className="text-4xl md:text-5xl font-black">Restaurant quality, food court price.</h2>
            <p className="mt-5 text-lg text-muted-foreground">When it comes to authentic Taiwanese cuisine, we are proud to call ourselves the perfect balance between tradition and innovation. Every dish is made to order by a skilled chef using fresh ingredients and time-honored techniques.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {[{i:ChefHat,t:"Skilled Chef",d:"Restaurant-trained craft."},{i:Heart,t:"Made With Care",d:"Fresh, made to order."},{i:Award,t:"5-Star Rated",d:"Loved by locals."}].map(({i:Icon,t,d})=>(
                <div key={t} className="rounded-2xl border border-border p-5">
                  <Icon className="w-6 h-6 text-[color:var(--primary-dark)]" />
                  <div className="mt-3 font-black">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--primary)] py-20 text-center text-[color:var(--primary-foreground)]">
        <div className="container-x">
          <h2 className="text-4xl md:text-5xl font-black">Hungry? Order now!</h2>
          <Link to="/menu" className="btn-secondary !border-[color:var(--foreground)] mt-7 inline-flex">Explore Menu</Link>
        </div>
      </section>
    </Layout>
  );
}
