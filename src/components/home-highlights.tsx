import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail, Sparkles } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { articles } from "@/lib/site-data";

export function HomeHighlights() {
  const [active, setActive] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % articles.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const article = articles[active];
  if (!article) return null;

  const move = (direction: number) => {
    setActive((current) => (current + direction + articles.length) % articles.length);
  };

  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    const normalizedEmail = email.trim().toLowerCase();
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: normalizedEmail, source: "homepage" });
    if (error && error.code !== "23505") {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="highlights-band" aria-label="Latest resources and newsletter">
      <div className="page-container highlights-grid">
        <article className="featured-article" aria-live="polite">
          <div className="flex items-center justify-between gap-4">
            <p className="featured-kicker"><Sparkles className="size-4" /> Fresh from EduHub42</p>
            <div className="flex gap-2">
              <Button variant="bannerGhost" size="icon" onClick={() => move(-1)} aria-label="Previous article"><ArrowLeft /></Button>
              <Button variant="bannerGhost" size="icon" onClick={() => move(1)} aria-label="Next article"><ArrowRight /></Button>
            </div>
          </div>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">{article.category} · {article.readTime}</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">{article.title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/70">{article.excerpt}</p>
          <div className="mt-7 flex items-center justify-between gap-4">
            <Button asChild variant="banner"><Link to="/resources/$slug" params={{ slug: article.slug }}>Read article <ArrowRight /></Link></Button>
            <div className="flex gap-2" aria-label={`Article ${active + 1} of ${articles.length}`}>
              {articles.map((item, index) => <Button key={item.slug} type="button" variant="ghost" size="icon" aria-label={`Show article ${index + 1}`} onClick={() => setActive(index)} className={`slide-dot ${index === active ? "slide-dot-active" : ""}`} />)}
            </div>
          </div>
        </article>

        <aside className="newsletter-panel">
          <span className="newsletter-icon"><Mail className="size-6" /></span>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Stay in the loop</p>
          <h2 className="mt-2 font-display text-3xl font-bold">Grow with us.</h2>
          <p className="mt-3 text-sm leading-6 text-primary-foreground/70">Get practical study advice, opportunities and career guidance in your inbox.</p>
          {status === "success" ? (
            <p className="mt-6 rounded-md border border-accent/50 bg-accent/10 p-4 text-sm font-semibold">You’re on the list. Welcome to the EduHub42 community!</p>
          ) : (
            <form onSubmit={subscribe} className="mt-6 space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <Input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Your email address" className="h-12 border-footer-border bg-background/10 text-primary-foreground placeholder:text-primary-foreground/45" />
              <Button type="submit" variant="banner" size="lg" className="w-full" disabled={status === "loading"}>{status === "loading" ? "Joining…" : "Join the newsletter"}</Button>
              {status === "error" && <p role="alert" className="text-sm text-primary-foreground">Something went wrong. Please try again.</p>}
            </form>
          )}
        </aside>
      </div>
    </section>
  );
}