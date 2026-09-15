import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { articles } from "@/lib/site-data";

export function BlogSlideshow() {
  const loopedArticles = [...articles, ...articles];

  return (
    <section className="highlights-band" aria-labelledby="latest-resources-title">
      <div className="page-container pb-7 pt-12 sm:pt-16">
        <p className="featured-kicker"><Sparkles className="size-4" /> Fresh from EduHub42</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 id="latest-resources-title" className="section-title">Ideas that move you forward.</h2>
          <Button asChild variant="outline"><Link to="/resources">Explore all resources <ArrowRight /></Link></Button>
        </div>
      </div>
      <div className="article-flow" aria-label="Latest EduHub42 resources">
        <div className="article-flow-track">
          {loopedArticles.map((article, index) => (
            <Link key={`${article.slug}-${index}`} to="/resources/$slug" params={{ slug: article.slug }} className="flow-article" aria-hidden={index >= articles.length} tabIndex={index >= articles.length ? -1 : 0}>
              <p className="text-xs font-extrabold uppercase text-accent">{article.category} · {article.readTime}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">{article.title}</h3>
              <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Read article <ArrowRight className="size-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    <section className="newsletter-band" aria-labelledby="newsletter-title">
      <div className="page-container newsletter-layout">
        <div className="min-w-0">
          <span className="newsletter-icon"><Mail className="size-6" /></span>
          <p className="mt-5 text-xs font-extrabold uppercase text-accent">Stay in the loop</p>
          <h2 id="newsletter-title" className="mt-2 font-display text-4xl font-semibold sm:text-5xl">A little inspiration for your inbox.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/75">Get practical study advice, opportunities and career guidance from the EduHub42 community.</p>
        </div>
        <div className="w-full lg:max-w-md">
          {status === "success" ? (
            <p className="rounded-md border border-accent/50 bg-accent/10 p-5 font-semibold">You’re on the list. Welcome to the EduHub42 community!</p>
          ) : (
            <form onSubmit={subscribe} className="space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <Input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Your email address" className="h-13 border-footer-border bg-background text-foreground placeholder:text-muted-foreground" />
              <Button type="submit" variant="banner" size="lg" className="w-full" disabled={status === "loading"}>{status === "loading" ? "Joining…" : "Join our newsletter"}</Button>
              {status === "error" && <p role="alert" className="text-sm text-primary-foreground">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}