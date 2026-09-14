import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  GraduationCap,
  Handshake,
  MessageSquareQuote,
  Sparkles,
} from "lucide-react";

import heroImage from "@/assets/education-pathways.jpg";
import { BookingForm, ContactForm } from "@/components/forms";
import { HomeHighlights } from "@/components/home-highlights";
import { SocialLinks } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { articles, pillars, siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduHub42 | Education Development & Student Support" },
      { name: "description", content: siteDescription },
      { property: "og:title", content: "EduHub42 | Education Development & Student Support" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "EduHub42", url: "https://www.eduhub42.co.za", email: "info@eduhub42.co.za", telephone: "+27671657897", slogan: "Learn. Grow. Succeed." }) }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="hero-shell">
        <img src={heroImage} alt="Abstract open book forming connected pathways towards education and career growth" className="hero-image" width={1600} height={1104} />
        <div className="hero-overlay" />
        <div aria-hidden className="hero-shape hero-shape-one" />
        <div aria-hidden className="hero-shape hero-shape-two" />
        <div aria-hidden className="hero-dots" />
        <div className="page-container relative z-10 flex min-h-[35rem] items-center pb-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Education Development Enterprise</p>
            <h1 className="display-title max-w-3xl">Empowering Learners. Creating Pathways.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-banner-muted">EduHub42 supports learners throughout their academic, educational and professional journeys through one connected education ecosystem.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="banner" size="lg"><Link to="/book">Book a Session <ArrowRight /></Link></Button>
              <Button asChild variant="bannerGhost" size="lg"><Link to="/pillars">Explore Our Pillars</Link></Button>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-banner-border pt-5 text-xs font-bold uppercase tracking-[0.16em] text-banner-muted">
              <span>Learn</span><ArrowRight className="size-4 text-accent" /><span>Grow</span><ArrowRight className="size-4 text-accent" /><span>Succeed</span>
            </div>
          </div>
        </div>
      </section>

      <HomeHighlights />

      <section className="journey-strip border-b border-border bg-background py-7">
        <div className="page-container grid gap-3 md:grid-cols-3">
          {[
            [GraduationCap, "I need academic support", "/book"],
            [Building2, "I need help accessing education", "/pillars"],
            [BriefcaseBusiness, "I need career support", "/pillars"],
          ].map(([Icon, label, to]) => {
            const JourneyIcon = Icon as typeof GraduationCap;
            return <Link key={label as string} to={to as "/book" | "/pillars"} className="journey-link"><span className="journey-icon"><JourneyIcon className="size-6" /></span><span>{label as string}</span><ArrowRight className="ml-auto size-4 text-muted-foreground" /></Link>;
          })}
        </div>
      </section>

      <section className="section-pad">
        <div className="page-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">About EduHub42</p>
            <h2 className="section-title mt-4">More Than Tutoring.</h2>
            <p className="body-lead mt-6">EduHub42 is an Education Development Enterprise dedicated to transforming education, empowering learners and creating meaningful pathways towards lifelong success.</p>
            <p className="mt-5 leading-7 text-muted-foreground">Our approach extends beyond traditional tutoring. We are developing an integrated education ecosystem designed to support learners across key stages of their academic, educational and professional journeys.</p>
            <Button asChild variant="outline" size="lg" className="mt-8"><Link to="/about">Discover our purpose <ArrowRight /></Link></Button>
          </div>
          <div className="growth-stack">
            {["LEARN", "GROW", "SUCCEED"].map((word, index) => <div key={word} className={`growth-word growth-word-${index + 1}`}><span>0{index + 1}</span><strong>{word}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad muted-band">
        <div className="page-container">
          <p className="eyebrow">One ecosystem. Multiple pathways.</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5"><h2 className="section-title">Our Pillars</h2><p className="max-w-lg text-muted-foreground">Connected support for each stage of a learner’s journey—from the classroom to opportunity and the workplace.</p></div>
          <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-accent/40 lg:block" />
            {pillars.map((pillar, index) => <PillarCard key={pillar.id} pillar={pillar} index={index} />)}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-primary">Building pathways for every stage of the journey.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-container">
          <p className="eyebrow">How EduHub42 works</p><h2 className="section-title mt-4">Your Journey Starts Here.</h2>
          <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Identify", "Understand your academic, educational or career needs."],
              ["02", "Develop", "Access the support, resources and guidance you need."],
              ["03", "Connect", "Access opportunities, institutions and pathways."],
              ["04", "Progress", "Move confidently towards your next stage."],
            ].map(([number, title, text]) => <div key={number} className="process-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad dark-band" id="booking">
        <div className="page-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="eyebrow">Book a session</p><h2 className="section-title mt-4">How Can We Help You?</h2><p className="mt-6 max-w-md leading-7 text-primary-foreground/75">Choose the path that fits your needs. Our team will review your request and connect you with the right support.</p></div>
          <div className="rounded-md bg-background p-4 text-foreground sm:p-7">
            <Tabs defaultValue="guardian">
              <TabsList className="grid h-auto w-full grid-cols-2 bg-secondary p-1"><TabsTrigger value="guardian" className="py-3">Parent / Guardian</TabsTrigger><TabsTrigger value="self" className="py-3">Learner / Student</TabsTrigger></TabsList>
              <TabsContent value="guardian" className="mt-7"><p className="mb-6 font-semibold">Booking academic support for a learner?</p><BookingForm mode="guardian" /></TabsContent>
              <TabsContent value="self" className="mt-7"><p className="mb-6 font-semibold">Looking for academic support for yourself?</p><BookingForm mode="self" /></TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-container">
          <p className="eyebrow">Community voices</p><h2 className="section-title mt-4">What Our Community Says</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[ ["The Good News is that both students passed to the next grade. David got code 6 (70% from getting 40%) on Afrikaans — I’m very happy!", "RockLove K"], ["I got 17/50 in my term 1 control test. After getting assistance with EduHub42 I got 34/50 — I’m so grateful for the steady improvement.", "Gemima L"], ["My daughter was on the verge of failing the year. After getting the expert tutors at EduHub42, my daughter passed and is currently getting consistent tutoring with the EduHub42 monthly packages. Best tutoring services in Cape Town!", "Anonymous"] ].map(([quote, name], index) => <blockquote key={name} className={`testimonial-card testimonial-card-${index + 1}`}><MessageSquareQuote className="size-7 text-accent" /><p className="mt-5 font-display text-xl leading-8">“{quote}”</p><footer className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{name}</footer></blockquote>)}
          </div>
        </div>
      </section>

      <section className="section-pad muted-band">
        <div className="page-container">
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Knowledge for the journey</p><h2 className="section-title mt-4">Resources</h2></div><Button asChild variant="outline"><Link to="/resources">View all resources <ArrowRight /></Link></Button></div>
          <div className="mt-10 grid gap-x-8 md:grid-cols-3">{articles.slice(0, 3).map((article) => <ArticlePreview key={article.slug} article={article} />)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-container grid gap-12 lg:grid-cols-2">
          <div><p className="eyebrow">Partnerships & organisations</p><h2 className="section-title mt-4">Let’s Build Better Pathways Together.</h2><p className="body-lead mt-6">EduHub42 welcomes opportunities to collaborate with schools, institutions, organisations and other stakeholders who share our commitment to education and learner development.</p>
            <Dialog><DialogTrigger asChild><Button size="lg" className="mt-8"><Handshake /> Partner With Us</Button></DialogTrigger><DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto"><DialogHeader><DialogTitle>Partnership Enquiry</DialogTitle><DialogDescription>Tell us about your organisation and the pathway you would like to build together.</DialogDescription></DialogHeader><ContactForm partnership /></DialogContent></Dialog>
          </div>
          <div className="border-l border-border pl-8 md:pl-12"><Sparkles className="size-8 text-accent" /><h3 className="mt-6 font-display text-3xl font-bold">Stay Connected</h3><p className="mt-4 max-w-md text-muted-foreground">Follow EduHub42 for learning guidance, opportunities and updates from across our education ecosystem.</p><div className="mt-7"><SocialLinks /></div></div>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-12 text-primary-foreground">
        <div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-accent">Make an impact with us</p><h2 className="mt-2 font-display text-3xl font-bold">Join the EduHub42 team.</h2></div><Button asChild variant="banner" size="lg"><Link to="/careers">Explore Careers <ArrowRight /></Link></Button></div>
      </section>
    </>
  );
}

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const Icon = pillar.icon;
  return <article className="pathway-card relative"><div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Icon className="size-6" /></div><span className="mt-7 block text-xs font-extrabold text-accent">0{index + 1}</span><h3 className="mt-2 text-2xl font-bold">{pillar.name}</h3><p className="mt-1 text-sm font-semibold text-primary">{pillar.category}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.description}</p><ul className="mt-5 space-y-2">{pillar.services.slice(0, 4).map((service) => <li key={service} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{service}</li>)}</ul><Button asChild variant="link" className="mt-6 h-auto p-0"><Link to="/pillars" hash={pillar.id}>Explore {pillar.name} <ArrowRight /></Link></Button></article>;
}

function ArticlePreview({ article }: { article: (typeof articles)[number] }) {
  return <article className="article-card"><span className="eyebrow">{article.category}</span><h3 className="mt-4 text-xl font-bold leading-7">{article.title}</h3><p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{article.excerpt}</p><p className="mt-6 text-xs text-muted-foreground">{article.author} · {article.date}</p><Link to="/resources/$slug" params={{ slug: article.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Read article <ArrowRight className="size-4" /></Link></article>;
}
