import React, { useEffect, useState } from "react";
import { PLANS, BATCHES, TRIAL_ID } from "./yogadata";
import s from "@/styles/yoga.module.css";

type Props = {
  open: boolean;
  initialPlan: string;
  skipPlanStep: boolean;
  onClose: () => void;
};

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

  const pick = (id: string) => {
    setPlan(id);
    setStep("details");
  };

  return (
    <div className={s.overlay} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book your yoga class"
        onClick={(e) => e.stopPropagation()}
        className={s.modal}
      >
        <button onClick={onClose} aria-label="Close" className={s.close}>
          ×
        </button>

        {step === "plan" && (
          <div className={s.modalBody}>
            <div className={s.step1of}>STEP 1 OF 2</div>
            <h3 className={s.h3} style={{ fontSize: 26, marginTop: 4 }}>Choose your plan</h3>

            <button
              onClick={() => pick(TRIAL_ID)}
              aria-pressed={plan === TRIAL_ID}
              className={`${s.planOpt} ${s.planTrial} ${plan === TRIAL_ID ? s.planSel : ""}`}
            >
              <span className={s.planTag}>FREE TRIAL</span>
              <span>
                <span className={s.planName} style={{ display: "block" }}>14-Day Free Trial</span>
                <span className={s.planSmall}>Full access to live classes. No payment to register.</span>
              </span>
              <span className={s.planPrice}>₹0</span>
            </button>

            <div className={s.planSmall} style={{ margin: "14px 0 8px", fontWeight: 600 }}>Or start with a paid plan</div>
            {PLANS.filter((p) => p.id !== TRIAL_ID).map((p) => (
              <button
                key={p.id}
                onClick={() => pick(p.id)}
                aria-pressed={plan === p.id}
                className={`${s.planOpt} ${plan === p.id ? s.planSel : ""} ${p.id === "1-month" ? s.planRec : ""}`}
              >
                {p.id === "1-month" && <span className={s.planTag}>RECOMMENDED</span>}
                <span>
                  <span className={s.planName} style={{ display: "block" }}>{p.label}</span>
                  <span className={s.planSmall}>₹{p.perDay} / day</span>
                </span>
                <span className={s.planPrice}>{inr(p.price)}</span>
              </button>
            ))}

            <div className={s.modalFoot}>
              <button onClick={() => setStep("details")} className={`${s.btn} ${s.btnBlue} ${s.btnLg} ${s.btnBlock}`}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className={s.modalBody}>
            <div className={s.step1of}>STEP 2 OF 2</div>
            <h3 className={s.h3} style={{ fontSize: 26, marginTop: 4 }}>
              {isTrial ? "Start your free trial" : "Reserve your spot"}
            </h3>
            <div className={s.planBar}>
              <span>
                <b>{selected.label}</b> · {isTrial ? "Free" : inr(selected.price)}
              </span>
              <button type="button" className={s.linkBtn} onClick={() => setStep("plan")}>
                Change
              </button>
            </div>
            <p className={s.fine}>Takes 20 seconds. We'll continue on WhatsApp. No payment needed to register.</p>

            <form onSubmit={onSubmit}>
              <input className={s.field} name="name" type="text" placeholder="Full Name" required autoComplete="name" />
              <input className={s.field} name="phone" type="tel" placeholder="WhatsApp Number" required pattern="[0-9+\s\-]{10,15}" autoComplete="tel" />
              <select className={s.field} name="batch" defaultValue="" required aria-label="Preferred timing">
                <option value="" disabled>Preferred timing</option>
                {Object.entries(BATCHES).map(([group, times]) => (
                  <optgroup key={group} label={group}>
                    {times.map((t) => <option key={t} value={t}>{t}</option>)}
                  </optgroup>
                ))}
              </select>
              <button type="submit" className={`${s.btn} ${s.btnBlue} ${s.btnLg} ${s.btnBlock}`}>
                Book Now
              </button>
            </form>
          </div>
        )}

        {step === "done" && (
          <div className={s.modalBody} style={{ textAlign: "center", padding: "44px 28px" }}>
            <div style={{ fontSize: 44 }}>🪷</div>
            <h3 className={s.h3} style={{ fontSize: 26, marginTop: 6 }}>You're in!</h3>
            <p className={s.lede} style={{ marginTop: 8 }}>
              Tap send in WhatsApp to share your details with us. If it didn't open, use the button below.
            </p>
            <a href={wa} className={`${s.btn} ${s.waBtn} ${s.btnLg}`} style={{ marginTop: 22 }}>
              Open WhatsApp
            </a>
            <div>
              <button onClick={onClose} className={s.linkBtn} style={{ marginTop: 14 }}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YogaModal;
