import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Inter, Inter_Tight } from "next/font/google";
import YogaModal from "@/components/yogamodal";
import { PLANS, FAQS, TRIAL_ID } from "@/components/yogadata";
import s from "@/styles/yoga.module.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const tight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-tight", display: "swap" });

const TITLE = "Yoga for 35+ | Gentle Live Online Classes | Free 14-Day Trial | Sacred Pause";
const DESC =
  "Gentle, guided live yoga for adults 35+. Less stiffness, better sleep, more energy. Try 14 days free. 45-minute classes, 5 days a week, with a certified 500-hour teacher.";

const PAIN_LEFT = [
  "You wake up stiff, and your back and knees take a while to “start working.”",
  "Hours at a desk have left you with a sore neck and an aching lower back.",
];
const PAIN_RIGHT = [
  "You're tired all day but wide awake at 2 a.m.",
  "The gym feels intimidating, and high-intensity workouts feel risky now.",
];

const BENEFITS: [string, string, string][] = [
  ["Ease aches and stiffness", "Gentle mobility for back, neck, hips and knees.", "M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5"],
  ["Sleep deeply again", "Calming breathwork to wind down at night.", "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"],
  ["Less stress", "Simple ways to settle a racing mind.", "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"],
  ["Strength and balance", "Stay steady and independent every day.", "M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"],
];

const PROFESSIONALS = [
  "45-minute live classes, morning and evening",
  "Desk-friendly neck, shoulder and back relief",
  "Quick stress resets between calls",
];
const RETIRED = [
  "Slower pace with chair and wall support",
  "Joint health, balance and flexibility",
  "Saturday group session to meet people",
];

const PLAN_NOTES: Record<string, string> = {
  "1-month": "A simple way to start.",
  "3-months": "Build a routine. Parents Care Pack +₹1,499.",
  "6-months": "Lower daily cost. Parents Care Pack +₹2,499.",
  "12-months": "Best value for a full year.",
};

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#0E9272" />
    <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Lotus = () => <img src="/logo.png" alt="Sacred Pause" className={s.logo} />;

export default function Yoga() {
  const [modal, setModal] = useState({ open: false, plan: TRIAL_ID, skipPlanStep: false });
  const openModal = (planId?: string) => setModal({ open: true, plan: planId ?? TRIAL_ID, skipPlanStep: Boolean(planId) });
  const closeModal = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  // Scroll-reveal, same idea as the reference site's .rv / .in
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
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const rv = s.rv;

  return (
    <div className={`${s.root} ${inter.variable} ${tight.variable}`}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="yoga for 35+, yoga for seniors, online yoga classes india, yoga for back pain, yoga for retired, live yoga" />
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

      <div className={s.sheet} id="top">
        {/* Nav */}
        <nav className={s.nav}>
          <a href="#top" className={s.brand}>
            <Lotus /> Sacred Pause
          </a>
          <div className={s.navLinks}>
            <a href="#benefits">Benefits</a>
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
          <header className={s.hero}>
            <span className={s.heroBadge}>14 days free · No payment to register</span>
            <h1>
              Your body has carried you this far. Let's help it <span className={s.accent}>go further.</span>
            </h1>
            <p className={s.heroSub}>
              Gentle, guided live yoga for people 35+. Less stiffness, better sleep, more energy.
            </p>
            <div className={s.heroCta}>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                Book Your Free Trial Class
              </button>
              <a href="#pricing" className={`${s.btn} ${s.btnGhost} ${s.btnLg}`}>
                View Plans
              </a>
            </div>
            <p className={s.heroFine}>No experience or flexibility needed. Options for every body.</p>
            <div className={s.heroPicWrap}>
              <img className={s.heroPic} src="https://images.pexels.com/photos/3576284/pexels-photo-3576284.jpeg" alt="Meditating outdoors" />
              <span className={`${s.chip} ${s.chipA}`}><i className={s.chipDot} /> Live · 45 min</span>
              <span className={`${s.chip} ${s.chipB}`}>🌿 14 days free</span>
            </div>
          </header>
        </div>

        {/* Problem */}
        <section className={s.sect}>
          <div className={s.wrap}>
            <div className={`${s.headC} ${rv}`}>
              <span className={s.pill}>Sound familiar?</span>
              <h2 className={s.h2}>Your body is asking for a different kind of care</h2>
            </div>
            <div className={`${s.painStage} ${rv}`}>
              <div className={s.painCol}>
                {PAIN_LEFT.map((t) => (
                  <div key={t} className={s.painCard}>{t}</div>
                ))}
              </div>
              <img className={s.painPhoto} src="https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg" alt="Feeling stiff and tired" />
              <div className={s.painCol}>
                {PAIN_RIGHT.map((t) => (
                  <div key={t} className={s.painCard}>{t}</div>
                ))}
              </div>
            </div>
            <div className={`${s.painNote} ${rv}`}>
              <span className={s.heart}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                  <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2 0 3.7 1.1 4.4 2.7.7-1.6 2.4-2.7 4.4-2.7 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z" />
                </svg>
              </span>
              It doesn't have to be this way.
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits">
          <div className={s.outFrame}>
            <div className={`${s.headC} ${rv}`} style={{ marginBottom: 40 }}>
              <span className={`${s.pill} ${s.outPill}`}>Benefits</span>
              <h2 className={s.h2}>Gentle yoga, real results</h2>
            </div>
            <div className={s.outGrid}>
              {BENEFITS.map(([t, d, icon]) => (
                <div key={t} className={`${s.outCard} ${rv}`}>
                  <div className={s.outIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E9272" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d={icon} />
                    </svg>
                  </div>
                  <h3 className={s.h3}>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", margin: "32px 0 18px" }}>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                Book Your Free Trial Class
              </button>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className={s.sect}>
          <div className={s.wrap}>
            <div className={`${s.headC} ${rv}`}>
              <span className={s.pill}>Who it's for</span>
              <h2 className={s.h2}>Made for the stage of life you're in</h2>
            </div>
            <div className={s.twoCol}>
              <div className={`${s.track} ${rv}`}>
                <h3 className={s.h3} style={{ fontSize: 24 }}>For Working Professionals</h3>
                <p className={s.trackQuote}>“I don't have hours. I just need to feel better.”</p>
                <ul className={s.checks}>
                  {PROFESSIONALS.map((t) => (
                    <li key={t}><Check /> {t}</li>
                  ))}
                </ul>
              </div>
              <div className={`${s.track} ${rv}`}>
                <h3 className={s.h3} style={{ fontSize: 24 }}>For Retired and Semi-Retired Adults</h3>
                <p className={s.trackQuote}>“I have the time. I want to use it well.”</p>
                <ul className={s.checks}>
                  {RETIRED.map((t) => (
                    <li key={t}><Check /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={s.sect} id="pricing" style={{ paddingTop: 20 }}>
          <div className={s.wrap} style={{ maxWidth: 1100 }}>
            <div className={`${s.headC} ${rv}`}>
              <span className={s.pill}>Programs</span>
              <h2 className={s.h2}>Find the plan that fits your life</h2>
              <p className={s.lede}>Unlimited live and recorded classes on every plan.</p>
            </div>

            <div className={`${s.trialCard} ${rv}`}>
              <div>
                <span className={s.heroBadge}>Limited-time offer</span>
                <h3 className={s.h3}>14-Day Free Trial</h3>
                <p>Full access to live classes and recordings. No payment to register.</p>
              </div>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                Start Free Trial
              </button>
            </div>

            <div className={s.pricingGrid}>
              {PLANS.filter((p) => p.id !== TRIAL_ID).map((p) => {
                const featured = p.id === "3-months";
                return (
                  <div key={p.id} className={`${s.pCard} ${featured ? s.pFeatured : ""} ${rv}`}>
                    <div>
                      <span className={s.pName}>{p.label}</span>
                      {featured && <span className={s.pBadge}>Popular</span>}
                    </div>
                    <div className={s.pPrice}>₹{p.price.toLocaleString("en-IN")}</div>
                    <div className={s.pPer}>₹{p.perDay} / day</div>
                    <div className={s.pDivider} />
                    <p className={s.pNote}>{PLAN_NOTES[p.id]}</p>
                    <button
                      className={`${s.btn} ${s.btnBlue} ${s.btnBlock}`}
                      onClick={() => openModal(p.id)}
                    >
                      Get started →
                    </button>
                  </div>
                );
              })}
            </div>
            <p className={s.pricingNote}>
              Live Monday to Friday, 45 minutes. Taught by <b>Ankit Mishra</b>, 500-hour certified, 5 years of experience.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.sect} id="faq" style={{ paddingTop: 20 }}>
          <div className={s.wrap}>
            <div className={`${s.headC} ${rv}`}>
              <span className={s.pill}>FAQ</span>
              <h2 className={s.h2}>Questions, answered</h2>
            </div>
            <div className={`${s.faq} ${rv}`}>
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    <span className={s.faqQ}>{f.q}</span>
                    <span className={s.faqToggle}>+</span>
                  </summary>
                  <p className={s.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
            <p className={s.disclaimer}>
              For general wellness. Not a substitute for medical advice. Please check with your doctor if you have a medical condition.
            </p>
          </div>
        </section>
      </div>

      {/* Final CTA + footer */}
      <div className={s.finalWrap}>
        <div className={s.finalCard}>
          <div className={`${s.finalHead} ${rv}`}>
            <h2 className={s.h2}>It's never too late to feel this good.</h2>
            <p className={s.finalSub}>
              Your first 14 days are on us. No pressure, no commitment.
            </p>
            <div className={s.finalActions}>
              <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
                Claim My Free Trial
              </button>
              <a href="#pricing" className={`${s.btn} ${s.btnOutline} ${s.btnLg}`}>
                View Plans
              </a>
            </div>
          </div>

          <footer className={s.footerCard}>
            <div className={s.footerTop}>
              <div>
                <a href="#top" className={s.brand}>
                  <Lotus /> Sacred Pause
                </a>
                <p className={s.footerSub}>Gentle, guided live yoga for adults 35+.</p>
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
              <span>© {new Date().getFullYear()} Sacred Pause</span>
              <span>
                <Link className={s.footerLink} style={{ display: "inline" }} href="/privacy">Privacy</Link>
                {" · "}
                <Link className={s.footerLink} style={{ display: "inline" }} href="/terms">Terms</Link>
                {" · "}
                <Link className={s.footerLink} style={{ display: "inline" }} href="/cancellation">Cancellation Policy</Link>
                {" · "}
                <a className={s.footerLink} style={{ display: "inline" }} href="#top">Back to top ↑</a>
              </span>
            </div>
          </footer>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className={s.sticky}>
        <button className={`${s.btn} ${s.btnBlue} ${s.btnLg}`} onClick={() => openModal()}>
          Book Your Free Trial Class
        </button>
      </div>

      <a
        className={s.wa}
        href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Sacred%20Pause,%20I%20want%20to%20know%20more%20about%20the%20online%20yoga%20classes"
        aria-label="Chat on WhatsApp"
      >
        <img alt="contact us on whatsapp" src="/WhatsApp.webp" />
      </a>

      <YogaModal open={modal.open} initialPlan={modal.plan} skipPlanStep={modal.skipPlanStep} onClose={closeModal} />
    </div>
  );
}
