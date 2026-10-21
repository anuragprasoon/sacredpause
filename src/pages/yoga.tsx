import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import YogaModal from "@/components/yogamodal";
import { PLANS, BATCHES, FAQS, TRIAL_ID } from "@/components/yogadata";

const TITLE = "Online Yoga Classes | Join Free 14-Day Trial | Sacred Pause";
const DESC =
  "Try live yoga free for 14 days. 45-minute classes, 5 days a week, with a certified 500-hour teacher. Real-time posture correction, HD recordings and plans from ₹399/month.";

const SLIDES = [
  "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
  "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
  "https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg",
];

const Icon = ({ d }: { d: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E524A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

const FEATURES = [
  { t: "14-day FREE trial", d: "M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" },
  { t: "Daily LIVE classes", d: "M3 7h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3zM18 10l4-2v8l-4-2" },
  { t: "Real-time posture feedback", d: "M20 6L9 17l-5-5" },
  { t: "HD recordings, 24x7", d: "M5 3l14 9-14 9z" },
  { t: "Switch batches freely", d: "M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" },
];

const BENEFITS = [
  ["More energy, better sleep", "Wake up feeling lighter and help your nervous system wind down before bed."],
  ["Move better", "Ease stiffness and build strength in the back, hips and knees."],
  ["Teacher-led & safe", "Not a pre-recorded video. A real teacher watches your camera and corrects you live."],
  ["A routine that sticks", "Simple 45-minute sessions that favour consistency over intensity."],
];

const Heading = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`urbanist text-[40px] max-sm:text-[32px] font-extrabold leading-tight inline-block border-b-2 border-dashed pb-2 ${light ? "text-white border-[#E4A689]" : "text-[#171612] border-[#2E524A]"}`}>
    {children}
  </h2>
);

export default function Yoga() {
  const [open, setOpen] = useState<number | null>(0);
  const [slide, setSlide] = useState(0);
  const [modal, setModal] = useState({ open: false, plan: TRIAL_ID, skipPlanStep: false });
  const openModal = (planId?: string) =>
    setModal({ open: true, plan: planId ?? TRIAL_ID, skipPlanStep: Boolean(planId) });
  const closeModal = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta name="keywords" content="online yoga classes, live yoga, yoga for professionals, yoga for parents, yoga membership india" />
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

      {/* Hero carousel */}
      <section className="relative h-[85vh] min-h-[520px] overflow-hidden bg-[#172525] urbanist text-white">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Online yoga class"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#172525] via-[#172525]/60 to-[#172525]/20" />
        <div className="relative h-full flex flex-col justify-end items-center text-center p-10 pb-20">
          <span className="bg-[#E4A689] text-black text-[13px] font-bold rounded-full px-4 py-1 mb-4">14 DAYS FREE · NO PAYMENT TO REGISTER</span>
          <h1 className="font-extrabold text-[64px] max-sm:text-[42px] leading-[1.05]">
            Live daily yoga,
            <br />
            from your home
          </h1>
          <p className="text-[20px] mt-3 text-[#EBDBCB]">For busy professionals &amp; parents</p>
          <button onClick={() => openModal()} className="p-4 px-8 bg-white text-black mt-6 rounded-full font-semibold hover:bg-[#E4A689] transition-colors">
            Start Free 14-Day Trial
          </button>
          <div className="flex gap-2 mt-8">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2 rounded-full transition-all ${i === slide ? "w-6 bg-white" : "w-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-[#F9FFE8] urbanist text-[#171612] py-8 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          {FEATURES.map((f) => (
            <div key={f.t} className="flex flex-col items-center gap-2" data-aos="fade-up">
              <Icon d={f.d} />
              <span className="text-[14px] font-semibold">{f.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-white urbanist text-[#171612] p-10 text-center overflow-x-hidden">
        <Heading>Live class schedule</Heading>
        <p className="mt-4 text-[#2E524A]">45 minutes, Monday to Friday. Pick the batch that fits your day.</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8 max-w-[800px] mx-auto">
          {Object.entries(BATCHES).map(([group, times], i) => (
            <div
              key={group}
              data-aos={i === 0 ? "fade-right" : "fade-left"}
              className={`flex-1 rounded-xl p-8 ${i === 0 ? "bg-[#E8E8EB]" : "bg-[#2E524A] text-white"}`}
            >
              <div className={`font-bold text-[20px] mb-4 ${i === 0 ? "" : "text-[#EBDBCB]"}`}>{group}</div>
              <div className="flex gap-2 flex-wrap justify-center">
                {times.map((t) => (
                  <span key={t} className={`rounded-full px-4 py-2 text-[14px] font-semibold ${i === 0 ? "bg-white" : "bg-white/15"}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[14px] text-[#2E524A]">Saturday: group discussion &amp; doubts session with your teacher.</p>
        <button onClick={() => openModal()} className="mt-6 p-3 px-6 bg-[#2E524A] text-white rounded-full font-semibold">
          Join Free for 14 Days
        </button>
      </section>

      {/* Teacher */}
      <section className="sm:flex bg-black text-white urbanist overflow-hidden">
        <div className="sm:w-[50%] p-10 sm:p-16 flex flex-col justify-center" data-aos="fade-right">
          <span className="text-[#E4A689] text-[16px]">YOUR TEACHER</span>
          <h2 className="text-[40px] max-sm:text-[32px] font-extrabold leading-tight">
            Ankit Mishra.
            <br />
            Making yoga simple.
          </h2>
          <p className="text-[18px] mt-3 font-semibold text-[#EBDBCB]">Certified 500-hour teacher · 5 years of experience</p>
          <p className="font-light mt-3">
            Every class is designed to be easy to follow and safe to practise. Your teacher watches your camera stream live and gives real-time posture correction and safety feedback, something no pre-recorded video can do.
          </p>
          <div>
            <button onClick={() => openModal()} className="mt-6 p-3 px-6 bg-[#E4A689] text-black rounded-full font-semibold">
              Try a Class Free
            </button>
          </div>
        </div>
        <img
          alt="Yoga teacher"
          data-aos="fade-left"
          src="https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg"
          className="sm:w-[50%] w-full h-[360px] sm:h-auto object-cover"
        />
      </section>

      {/* Pricing */}
      <section className="p-10 bg-white urbanist text-black text-center" id="pricing">
        <Heading>Simple Plans. No surprises.</Heading>
        <ul className="max-w-[560px] mx-auto text-left mt-6 space-y-2 text-[#2E524A]">
          {[
            "Live, teacher-led classes 5 days a week",
            "Saturday group discussion & doubts session",
            "Unlimited HD recordings, 24x7 replay library",
            "Flexible batches at no extra cost",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-[#E4A689] font-bold">✓</span>
              {t}
            </li>
          ))}
        </ul>
        <div
          data-aos="zoom-in"
          className="max-w-[900px] mx-auto mt-8 rounded-2xl bg-gradient-to-r from-[#172525] to-[#2E524A] text-white p-8 sm:flex items-center justify-between gap-6 text-left"
        >
          <div>
            <span className="bg-[#E4A689] text-black text-[12px] font-bold rounded-full px-3 py-1">START HERE</span>
            <div className="text-[32px] max-sm:text-[26px] font-extrabold mt-3">14-Day Free Trial</div>
            <p className="text-[#EBDBCB]">Full access to live classes, recordings and your teacher's feedback. No payment needed to register.</p>
          </div>
          <button
            onClick={() => openModal()}
            className="max-sm:mt-5 whitespace-nowrap bg-white text-black font-semibold rounded-full p-4 px-8 hover:bg-[#E4A689] transition-colors"
          >
            Start Free Trial
          </button>
        </div>
        <p className="mt-8 text-[#2E524A] font-semibold">Ready to commit? Pick a plan</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch mt-4">
          {PLANS.filter((p) => p.id !== TRIAL_ID).map((p) => {
            const hl = p.id === "3-months";
            return (
              <div
                key={p.id}
                data-aos="fade-up"
                className={`relative rounded-xl p-8 sm:w-[240px] text-center flex flex-col ${hl ? "bg-[#172525] text-white" : "bg-[#E8E8EB]"}`}
              >
                {hl && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E4A689] text-black text-[12px] font-bold rounded-full px-3 py-1">
                    MOST POPULAR
                  </span>
                )}
                <div className="font-semibold">{p.label}</div>
                <div className="text-[36px] font-extrabold my-2">₹{p.price.toLocaleString("en-IN")}</div>
                <div className={hl ? "text-[#E4A689]" : "text-[#2E524A]"}>₹{p.perDay} / day</div>
                {p.careAddOn && (
                  <div className="text-[13px] my-3 opacity-80">
                    Parents Care Pack with live dietician Q&amp;A: ₹{p.careAddOn.toLocaleString("en-IN")}
                  </div>
                )}
                <button
                  onClick={() => openModal(p.id)}
                  className={`mt-auto p-3 rounded-full font-semibold ${hl ? "bg-white text-black" : "bg-[#2E524A] text-white"}`}
                >
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>
      </section>


      {/* Benefits */}
      <section className="bg-[#E8E8EB] urbanist text-[#171612] p-10 text-center">
        <Heading>Why people stay</Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto mt-8 text-left">
          {BENEFITS.map(([t, d]) => (
            <div key={t} className="bg-white rounded-xl p-6" data-aos="fade-up">
              <div className="text-[20px] font-bold text-[#2E524A]">{t}</div>
              <p className="mt-2 text-[15px]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="p-10 bg-white urbanist text-black" id="faq">
        <div className="text-center mb-8">
          <Heading>Frequently asked questions</Heading>
        </div>
        <div className="max-w-[800px] mx-auto">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[#E8E8EB]">
              <button
                className="w-full flex justify-between items-center text-left py-4 font-semibold text-[18px]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="text-[#E4A689] text-[24px] ml-4">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="pb-4 text-[#2E524A]">{f.a}</p>}
            </div>
          ))}
        </div>
        <p className="text-center text-[12px] mt-8 text-[#2E524A] max-w-[800px] mx-auto">
          Our classes are for general health and wellness and do not replace medical advice, diagnosis or treatment. If you have a medical condition, please consult your doctor before starting.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#172525] urbanist text-white text-center p-16 max-sm:pb-28">
        <h2 className="text-[48px] max-sm:text-[34px] font-extrabold leading-tight">
          Easy to start.
          <br />
          <span className="text-[#E4A689]">Easier to continue.</span>
        </h2>
        <p className="mt-4 text-[#EBDBCB]">Your first 14 days are on us.</p>
        <button onClick={() => openModal()} className="p-4 px-8 bg-white text-black mt-6 rounded-full font-semibold hover:bg-[#E4A689] transition-colors">
          Start Free 14-Day Trial
        </button>
      </section>

      {/* Sticky mobile CTA */}
      <button onClick={() => openModal()} className="sm:hidden fixed bottom-0 inset-x-0 z-10 urbanist bg-[#E4A689] text-[#172525] text-center font-bold p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.25)]">
        Start Free 14-Day Trial
      </button>

      <YogaModal open={modal.open} initialPlan={modal.plan} skipPlanStep={modal.skipPlanStep} onClose={closeModal} />

      <div className="fixed bottom-16 sm:bottom-2 right-2">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Sacred%20Pause,%20I%20want%20to%20know%20more%20about%20the%20online%20yoga%20classes">
          <img alt="contact us on whatsapp" src="/WhatsApp.webp" className="w-[50px] hover:scale-150" />
        </a>
      </div>
    </>
  );
}
