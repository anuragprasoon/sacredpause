import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Inter, Fraunces, Caveat } from "next/font/google";
import YogaModal from "@/components/yogamodal";
import { PLANS, FAQS, TRIAL_ID } from "@/components/yogadata";
import s from "@/styles/yoga.module.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-serif", display: "swap" });
const hand = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hand", display: "swap" });

const TITLE = "Yoga seekho. Sahi tareeke se. Roz. | Live Yoga Classes | Sacred Pause";
const DESC = "Live teacher har pose sikhata hai. Ghar se, phone pe. 14 din free trial.";

const CTA = "Book your class for Free Now";

const STEPS: [string, string, string][] = [
  ["Slot chuno", "6:30 AM · 7:30 AM · 8:30 PM · 9:30 PM", "M12 8v4l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"],
  ["Join karo", "Phone ya TV pe.", "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2"],
  ["Yoga with Us", "Yoga karo sath me", "M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6M12 15c0-3 2.5-5 7-5 0 4-3 5-7 5"],
];

const PROBLEMS: [string, string, string, string][] = [
  ["M7 3v9h10M7 12v9M17 12v9", "Gardan & Kamar", "Desk job wale", "/yoga#pricing"],
  ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z", "Neend & Stress", "Raat ko dimaag band nahi hota", "/yoga#pricing"],
  ["M12 4v16M6 8h12M6 8l-3 6a3 3 0 0 0 6 0L6 8zM18 8l-3 6a3 3 0 0 0 6 0l-3-6z", "Pet & Weight", "Gym chhoot gaya", "/yoga#pricing"],
  ["M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6M12 15c0-3 2.5-5 7-5 0 4-3 5-7 5", "Zero Se Shuru", "Kabhi yoga nahi kiya", "/yoga#pricing"],
];

// TODO: replace the placeholder portraits with real member photos (put files in /public and use "/name.jpg").
const TESTIMONIALS: { q: string; name: string; role: string; photo: string }[] = [
  { q: "3 hafte mein gardan ka dard 70% kam.", name: "Rohit", role: "Software Engineer, Pune", photo: "https://i.pravatar.cc/160?img=12" },
  { q: "Bachon ka tiffin dene ke baad, 7:30 wali class meri apni 20 minute hai.", name: "Sunita", role: "Teacher, Jaipur", photo: "https://i.pravatar.cc/160?img=47" },
  { q: "Gym chorha, yeh pakda. 6 kg kam.", name: "Amit", role: "Sales Manager, Lucknow", photo: "https://i.pravatar.cc/160?img=33" },
];

const Logo = () => <img src="/logo.png" alt="Sacred Pause" className={s.logo} width={84} height={50} />;

const BASE_MONTHLY = 399;
const MONTHS: Record<string, number> = { "1-month": 1, "3-months": 3, "6-months": 6, "12-months": 12 };

const dly = (i: number) => ({ "--d": i } as React.CSSProperties);

export default function Yoga() {
  const [modal, setModal] = useState({ open: false, plan: TRIAL_ID, skipPlanStep: false });
  const openModal = (planId?: string) => setModal({ open: true, plan: planId ?? TRIAL_ID, skipPlanStep: Boolean(planId) });
  const closeModal = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [heroInView, setHeroInView] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const picRef = useRef<HTMLDivElement>(null);

  // Sticky bar appears once the hero scrolls out of view
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHeroInView(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll motion: progress bar + gentle hero-image parallax (no re-renders)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (picRef.current) picRef.current.style.transform = `translateY(${Math.min(y, 600) * 0.06}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(`.${s.rv}`);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(s.rvIn);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const rv = s.rv;

  return (
    <div className={`${s.root} ${inter.variable} ${serif.variable} ${hand.variable}`}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta name="author" content="Sacred Pause" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:image" content="https://sacredpause.in/thumb.png" />
        <meta property="og:url" content="https://sacredpause.in/yoga" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content="https://sacredpause.in/thumb.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={s.progress} aria-hidden>
        <div className={s.progressBar} ref={barRef} />
      </div>

      <div className={s.sheet} id="top">
        {/* Nav */}
        <nav className={s.nav}>
          <a href="#top" className={s.brand}>
            <Logo /> Sacred Pause
          </a>
          <div className={s.navLinks}>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className={s.navRight}>
            <Link href="/" className={s.navSite}>Retreats</Link>
            <button className={`${s.btn} ${s.btnBlue}`} onClick={() => openModal()}>
              Free Trial
            </button>
          </div>
        </nav>

        {/* Hero */}
        <div className={s.heroFrame}>
          <header className={s.hero} ref={heroRef}>
            <div className={s.heroGrid}>
              <div className={s.heroText}>
                <span className={s.heroBadge}>14 Days free trial</span>
                <h1>
                  Yoga seekho. Ghar baithe.{" "}
                  <span className={s.accent}>
                    Roz.
                    <svg className={s.squiggle} viewBox="0 0 120 14" preserveAspectRatio="none" aria-hidden>
                      <path d="M3 9 C 18 2, 32 14, 50 7 S 88 3, 117 9" />
                    </svg>
                  </span>
                </h1>
                <p className={s.heroSub}>Learn yoga with a real teacher. From home. Daily.</p>
                <div className={s.heroCta}>
                  <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                    {CTA}
                  </button>
                  <span className={s.note}>
                    <svg className={s.noteArrow} viewBox="0 0 70 50" fill="none" aria-hidden>
                      <path d="M66 6 C 46 4, 20 12, 10 40" />
                      <path d="M3 30 L10 41 L21 34" />
                    </svg>
                    pehle 14 din free
                  </span>
                </div>
              </div>

              <div className={s.heroArt} ref={picRef}>
                <span className={s.blob} aria-hidden />
                <img
                  className={s.heroPic}
                  src="https://images.pexels.com/photos/3576284/pexels-photo-3576284.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Ghar par yoga"
                  width={520}
                  height={640}
                />
                <span className={s.sticker}>
                  Live
                  <br />
                  teacher
                </span>
              </div>
            </div>
          </header>
        </div>

        {/* How to get started: a winding path */}
        <section className={s.sect}>
          <div className={s.wrap}>
            <div className={`${s.headL} ${rv}`}>
              <span className={s.script}>easy as 1-2-3</span>
              <h2 className={s.h2}>How to get started</h2>
            </div>
            <div className={s.path}>
              <svg className={s.pathLine} viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden>
                <path d="M167 60 C 300 -10, 380 170, 500 130 S 720 0, 833 60" />
              </svg>
              {STEPS.map(([t, d, icon], i) => (
                <div key={t} className={`${s.step} ${i === 1 ? s.stepLow : ""} ${rv}`} style={dly(i)}>
                  <div className={s.stepIcon}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#17401C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d={icon} />
                    </svg>
                    <span className={s.stepNo}>{i + 1}</span>
                  </div>
                  <h3 className={s.h3}>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <div className={`${s.sectionCta} ${rv}`}>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                {CTA}
              </button>
            </div>
          </div>
        </section>

        {/* Pick your problem */}
        <section className={s.sect} style={{ paddingTop: 0 }}>
          <div className={s.wrap}>
            <div className={`${s.headL} ${rv}`}>
              <span className={s.script}>apna wala chuno</span>
              <h2 className={s.h2}>Aapko kya theek karna hai?</h2>
            </div>
            <div className={s.problemGrid}>
              {PROBLEMS.map(([icon, t, sub, href], i) => (
                <Link key={t} href={href} className={`${s.problemCard} ${s[`tone${i}`]} ${rv}`} style={dly(i)}>
                  <span className={s.problemIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#17401C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d={icon} />
                    </svg>
                  </span>
                  <span>
                    <b className={s.problemTitle}>{t}</b>
                    <span className={s.problemSub}>{sub}</span>
                  </span>
                  <span className={s.problemArrow} aria-hidden>→</span>
                </Link>
              ))}
            </div>
            <div className={`${s.sectionCta} ${rv}`}>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                {CTA}
              </button>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className={s.proofFrame}>
          <div className={`${s.headC} ${rv}`} style={{ marginBottom: 36 }}>
            <h2 className={s.h2}>Here's what our members say</h2>
          </div>
          <div className={s.testiRow}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.name} className={`${s.testi} ${s[`tilt${i}`]} ${rv}`} style={dly(i)}>
                <span className={s.quoteMark} aria-hidden>“</span>
                <blockquote>{t.q}</blockquote>
                <div className={s.testiHead}>
                  <span className={s.avatar}>
                    {t.name[0]}
                    <img src={t.photo} alt={t.name} width={56} height={56} loading="lazy" />
                  </span>
                  <figcaption>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          <div className={`${s.proofCta} ${rv}`}>
            <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
              {CTA}
            </button>
          </div>
        </section>

        {/* Pricing */}
        <section className={s.sect} id="pricing">
          <div className={s.wrap}>
            <div className={`${s.plansPanel} ${rv}`}>
              <h2 className={s.h2}>Membership Plans</h2>
              <p className={s.plansSub}>All plans start after free trial.</p>
              <div className={s.planRows}>
                {PLANS.filter((p) => p.id !== TRIAL_ID && p.id !== "1-month").map((p) => {
                  const off = Math.round(((BASE_MONTHLY * MONTHS[p.id] - p.price) / (BASE_MONTHLY * MONTHS[p.id])) * 100);
                  return (
                    <button key={p.id} className={s.planRow} onClick={() => openModal(p.id)}>
                      <span>
                        <b className={s.planRowName}>{MONTHS[p.id]} Months</b>
                        <span className={s.planRowOff}>{off}% Off</span>
                      </span>
                      <span className={s.planRowPrice}>
                        ₹{p.price.toLocaleString("en-IN")}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </span>
                    </button>
                  );
                })}
              </div>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg} ${s.plansCta}`} onClick={() => openModal()}>
                Choose your plan →
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.sect} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.wrap}>
            <div className={`${s.headC} ${rv}`} style={{ marginBottom: 32 }}>
              <h2 className={s.h2}>Frequently asked questions</h2>
            </div>
            <div className={`${s.faq} ${rv}`}>
              {FAQS.map((f, i) => (
                <details key={f.q} open={faqOpen === i}>
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      setFaqOpen(faqOpen === i ? null : i);
                    }}
                  >
                    <span className={s.faqQ}>{f.q}</span>
                    <span className={s.faqToggle} />
                  </summary>
                  <p className={s.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Close + footer */}
      <div className={s.finalWrap}>
        <div className={s.finalCard}>
          <span className={`${s.leaf} ${s.leafA}`} aria-hidden />
          <span className={`${s.leaf} ${s.leafB}`} aria-hidden />
          <div className={`${s.finalHead} ${rv}`}>
            <h2 className={s.h2}>
              Kal se nahi. <span className={s.accent}>Aaj se.</span>
            </h2>
            <p className={s.finalSub}>14 din free mein shuru karo. Slot pasand na aaye, toh kabhi bhi badal lo.</p>
            <div className={s.finalActions}>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                Book your class for Free Now
              </button>
            </div>
          </div>

          <footer className={s.footerCard}>
            <div className={s.footerTop}>
              <div>
                <a href="#top" className={s.brand}>
                  <Logo /> Sacred Pause
                </a>
                <p className={s.footerSub}>Live yoga, ghar se. Roz.</p>
              </div>
              <div className={s.footerLinks}>
                <div>
                  <div className={s.footerTitle}>Program</div>
                  <a className={s.footerLink} href="#pricing">Pricing</a>
                  <a className={s.footerLink} href="#faq">FAQ</a>
                </div>
                <div>
                  <div className={s.footerTitle}>Sacred Pause</div>
                  <Link className={s.footerLink} href="/">Yoga Retreats</Link>
                  <Link className={s.footerLink} href="/about">About Us</Link>
                  <Link className={s.footerLink} href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className={s.footerDivider} />
            <div className={s.footerBottom}>
              <span>© {new Date().getFullYear()} Sacred Pause · General wellness ke liye, medical advice nahi.</span>
              <span>
                <Link className={s.footerLink} style={{ display: "inline" }} href="/privacy">Privacy</Link>
                {" · "}
                <Link className={s.footerLink} style={{ display: "inline" }} href="/terms">Terms</Link>
                {" · "}
                <Link className={s.footerLink} style={{ display: "inline" }} href="/cancellation">Cancellation Policy</Link>
              </span>
            </div>
          </footer>
        </div>
      </div>

      {/* Sticky mobile CTA, shown once the hero scrolls out */}
      <div className={`${s.sticky} ${!heroInView ? s.stickyShow : ""}`} aria-hidden={heroInView}>
        <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()} tabIndex={heroInView ? -1 : 0}>
          {CTA}
        </button>
      </div>

      <a
        className={`${s.wa} ${!heroInView ? s.waUp : ""}`}
        href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Sacred%20Pause,%20I%20want%20to%20know%20more%20about%20the%20online%20yoga%20classes"
        aria-label="Chat on WhatsApp"
      >
        <img alt="" src="/WhatsApp.webp" width={50} height={50} loading="lazy" />
      </a>

      <YogaModal open={modal.open} initialPlan={modal.plan} skipPlanStep={modal.skipPlanStep} onClose={closeModal} />
    </div>
  );
}
