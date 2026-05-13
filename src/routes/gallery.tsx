import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site-chrome";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Glorious Bao & Fried Rice" },
      { name: "description", content: "A look at the dishes we love to serve. Authentic Taiwanese food in Burnaby, BC." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/3.jpg",
  "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/4.jpg",
  "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/5.jpg",
  "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/3-480x384.jpg",
  "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/4-480x320.jpg",
  "https://www.gloriousbao.com/wp-content/uploads/gloriousbao.com/2021/11/5-480x320.jpg",
];

function GalleryPage() {
  return (
    <Layout>
      <section className="bg-[color:var(--foreground)] text-background py-24">
        <div className="container-x text-center">
          <span className="eyebrow !text-[color:var(--primary)]">Gallery</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-black">A Taste of Glorious</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMAGES.map((src, i) => (
            <img key={i} src={src} alt={`Glorious Bao dish ${i + 1}`} className="rounded-2xl aspect-square object-cover w-full hover:scale-[1.02] transition-transform shadow-md" />
          ))}
        </div>
      </section>
      <section className="bg-[color:var(--primary)] py-16 text-center">
        <a href="/menu" className="inline-flex items-center rounded-full bg-[color:var(--foreground)] text-background px-9 py-4 font-black">Explore Menu</a>
      </section>
    </Layout>
  );
}
