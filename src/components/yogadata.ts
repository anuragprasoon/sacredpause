export const TRIAL_ID = "trial";

export const PLANS = [
  { id: TRIAL_ID, label: "14-Day Free Trial", price: 0, perDay: "0", careAddOn: null },
  { id: "1-month", label: "1 Month", price: 399, perDay: "13.3", careAddOn: null },
  { id: "3-months", label: "3 Months", price: 1099, perDay: "12.2", careAddOn: 1499 },
  { id: "6-months", label: "6 Months", price: 1999, perDay: "11.1", careAddOn: 2499 },
  { id: "12-months", label: "12 Months", price: 3699, perDay: "10.13", careAddOn: null },
];

// Live class slots (IST). `h`/`m` are 24-hour values used by the hero countdown.
export const SLOTS = [
  { label: "6:30 AM", h: 6, m: 30 },
  { label: "7:30 AM", h: 7, m: 30 },
  { label: "8:30 PM", h: 20, m: 30 },
  { label: "9:30 PM", h: 21, m: 30 },
];

export const BATCHES = {
  Morning: ["6:30 AM", "7:30 AM"],
  Evening: ["8:30 PM", "9:30 PM"],
};

export const FAQS = [
  {
    q: "How does the 14-day free trial work?",
    a: "Register in under a minute and join our live classes free for 14 days. No payment is needed to register. We'll message you on WhatsApp with your access details, and share the plans before the trial ends.",
  },
  {
    q: "Is yoga safe for me? What about back or knee pain?",
    a: "Yes. Every pose comes with an easy and an advanced version, so you can go at your own pace. If you have back pain, knee pain or high blood pressure, please check with your doctor first and let your teacher know.",
  },
  {
    q: "What if I miss a class?",
    a: "Please don't worry! The recording of every class is uploaded to your member dashboard, so you can practise whenever it suits you. You can also join another live slot that day at no extra cost.",
  },
  {
    q: "What are the class timings?",
    a: "Live classes run at 6:30 AM, 7:30 AM, 8:30 PM and 9:30 PM IST. Pick the slot that suits you and switch whenever you like at no extra cost.",
  },
  {
    q: "What if I don't get the value? (Refund & cancellation)",
    a: "Services are non-refundable by default, but if you're not satisfied, message us on WhatsApp (+91 90655 50642) or email sacredpause@gmail.com within 3 days of getting access. Refunds are processed within 5 to 7 working days.",
  },
  {
    q: "What is the Parents Care Pack?",
    a: "An add-on for the 3-month and 6-month plans that includes a live dietician Q&A, made for the parents in your life.",
  },
];
