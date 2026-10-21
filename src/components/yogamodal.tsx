import React, { useEffect, useState } from "react";
import { PLANS, BATCHES, TRIAL_ID } from "./yogadata";

type Props = {
  open: boolean;
  initialPlan: string;
  skipPlanStep: boolean;
  onClose: () => void;
};

const inputClass = "urbanist rounded p-3 w-full border border-[#172525]/30 mb-3 bg-white text-black";
const WA_NUMBER = "919065550642";
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const waLink = (d: { name: string; phone: string; plan: string; batch: string }) =>
  `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(
    `Hi, I am ${d.name}. I want to start yoga classes.\n\nPlan: ${d.plan}\nPreferred timing: ${d.batch}\nMy WhatsApp number: ${d.phone}`
  )}`;

const YogaModal: React.FC<Props> = ({ open, initialPlan, skipPlanStep, onClose }) => {
  const [step, setStep] = useState<"plan" | "details" | "done">("plan");
  const [plan, setPlan] = useState(initialPlan);
  const [wa, setWa] = useState("");

  useEffect(() => {
    if (!open) return;
    setPlan(initialPlan);
    setStep(skipPlanStep ? "details" : "plan");
    setWa("");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, initialPlan, skipPlanStep, onClose]);

  if (!open) return null;
  const selected = PLANS.find((p) => p.id === plan) ?? PLANS[0];
  const isTrial = selected.id === TRIAL_ID;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const link = waLink({
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      plan: selected.label,
      batch: String(fd.get("batch") ?? ""),
    });
    setWa(link);
    setStep("done");
    // Runs inside the submit gesture, so browsers allow it; fall back to same-tab if blocked.
    if (!window.open(link, "_blank")) window.location.assign(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 urbanist" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book your yoga class"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#F9FFE8] text-black w-full sm:max-w-[520px] max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl"
      >
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-3 text-[28px] leading-none text-[#172525]">
          ×
        </button>

        {step === "plan" && (
          <div className="p-7 pb-0">
            <div className="text-[#2E524A] text-[12px] font-bold tracking-wide">STEP 1 OF 2</div>
            <h3 className="text-[26px] font-extrabold mb-4">Choose your plan</h3>

            <button
              onClick={() => { setPlan(TRIAL_ID); setStep("details"); }}
              aria-pressed={plan === TRIAL_ID}
              className={`w-full text-left bg-[#172525] text-white rounded-xl p-5 mt-5 mb-4 relative border-2 ${plan === TRIAL_ID ? "border-[#E4A689]" : "border-transparent opacity-80"}`}
            >
              <span className="absolute -top-3 left-4 bg-[#E4A689] text-black text-[11px] font-bold rounded-full px-3 py-1">
                RECOMMENDED · FREE
              </span>
              <div className="flex justify-between items-center gap-3">
                <div>
                  <div className="text-[20px] font-extrabold">14-Day Free Trial</div>
                  <div className="text-[14px] text-[#EBDBCB]">Full access to live classes. No payment to register.</div>
                </div>
                <div className="text-[24px] font-extrabold text-[#E4A689]">₹0</div>
              </div>
            </button>

            <div className="text-[13px] font-semibold text-[#2E524A] mb-2">Or start with a paid plan</div>
            {PLANS.filter((p) => p.id !== TRIAL_ID).map((p) => (
              <button
                key={p.id}
                onClick={() => { setPlan(p.id); setStep("details"); }}
                aria-pressed={plan === p.id}
                className={`w-full flex justify-between items-center text-left rounded-xl p-4 mb-2 border-2 ${plan === p.id ? "bg-[#2E524A]/10 border-[#2E524A]" : "bg-white border-[#172525]/20"}`}
              >
                <div>
                  <div className="font-bold">{p.label}</div>
                  <div className="text-[13px] text-[#2E524A]">₹{p.perDay} / day</div>
                </div>
                <div className="font-extrabold text-[18px]">{inr(p.price)}</div>
              </button>
            ))}

            <div className="sticky bottom-0 -mx-7 px-7 py-4 mt-2 bg-[#F9FFE8] border-t border-[#172525]/10">
              <button onClick={() => setStep("details")} className="w-full bg-[#172525] text-white font-semibold p-4 rounded-full">
                Next · {isTrial ? "Start Free Trial" : selected.label}
              </button>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="p-7">
            <div className="text-[#2E524A] text-[12px] font-bold tracking-wide">STEP 2 OF 2</div>
            <h3 className="text-[26px] font-extrabold">{isTrial ? "Start your free trial" : "Reserve your spot"}</h3>
            <div className="flex items-center justify-between bg-white rounded-lg px-4 py-2 my-3 text-[14px]">
              <span>
                <b>{selected.label}</b> · {isTrial ? "Free" : inr(selected.price)}
              </span>
              <button type="button" className="text-[#2E524A] underline" onClick={() => setStep("plan")}>
                Change
              </button>
            </div>
            <p className="text-[13px] text-[#2E524A] mb-4">Takes 20 seconds. We'll continue on WhatsApp. No payment needed to register.</p>

            <form onSubmit={onSubmit}>
              <input className={inputClass} name="name" type="text" placeholder="Full Name" required autoComplete="name" />
              <input className={inputClass} name="phone" type="tel" placeholder="WhatsApp Number" required pattern="[0-9+\s\-]{10,15}" autoComplete="tel" />
              <select className={inputClass} name="batch" defaultValue="" required aria-label="Preferred timing">
                <option value="" disabled>Preferred timing</option>
                {Object.entries(BATCHES).map(([group, times]) => (
                  <optgroup key={group} label={group}>
                    {times.map((t) => <option key={t} value={t}>{t}</option>)}
                  </optgroup>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-[#172525] text-white font-semibold p-4 rounded-full"
              >
                {isTrial ? "Start My Free Trial on WhatsApp" : "Reserve My Spot on WhatsApp"}
              </button>
            </form>
          </div>
        )}

        {step === "done" && (
          <div className="p-10 text-center">
            <div className="text-[48px]">🪷</div>
            <h3 className="text-[26px] font-extrabold text-[#2E524A]">You're in!</h3>
            <p className="mt-2">Tap send in WhatsApp to share your details with us. If it didn't open, use the button below.</p>
            <a href={wa} className="inline-block mt-6 bg-[#25D366] text-black font-semibold px-8 py-3 rounded-full">
              Open WhatsApp
            </a>
            <div>
              <button onClick={onClose} className="mt-4 text-[14px] text-[#2E524A] underline">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YogaModal;
