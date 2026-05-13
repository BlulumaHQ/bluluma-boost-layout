import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site-chrome";
import { MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Glorious Bao & Fried Rice" },
      { name: "description", content: "Visit Glorious Bao & Fried Rice in Burnaby, BC. Get in touch or order online today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-[color:var(--foreground)] text-background py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="eyebrow !text-[color:var(--primary)]">Get In Touch</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-black">Contact Us</h1>
          <p className="mt-5 text-white/80">We'd love to hear from you. Reach out about catering, group orders, or just to say hi.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black">Send us a message</h2>
            {sent ? (
              <div className="mt-8 rounded-2xl bg-[color:var(--secondary)] p-8 text-[color:var(--secondary-foreground)] font-bold">Thanks! We'll get back to you soon.</div>
            ) : (
              <form className="mt-8 space-y-4" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <input required placeholder="Your name" className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none focus:border-[color:var(--primary)]" />
                <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none focus:border-[color:var(--primary)]" />
                <input placeholder="Phone (optional)" className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none focus:border-[color:var(--primary)]" />
                <textarea required rows={5} placeholder="Your message" className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none focus:border-[color:var(--primary)] resize-none" />
                <button type="submit" className="btn-primary"><Send className="w-4 h-4 mr-2" /> Send Message</button>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border p-7 bg-card">
              <MapPin className="w-6 h-6 text-[color:var(--primary-dark)]" />
              <div className="font-black mt-3">Visit Us</div>
              <p className="text-muted-foreground mt-1">Burnaby, BC, Canada</p>
            </div>
            <div className="rounded-2xl border border-border p-7 bg-card">
              <Clock className="w-6 h-6 text-[color:var(--primary-dark)]" />
              <div className="font-black mt-3">Order Online</div>
              <p className="text-muted-foreground mt-1">Order your favorite food online at your convenience.</p>
              <a href="#" className="btn-primary mt-4 !py-2.5 !px-5 !text-sm">Online Order</a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Burnaby%2C+BC&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
