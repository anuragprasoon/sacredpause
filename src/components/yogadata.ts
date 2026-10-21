export const TRIAL_ID = "trial";

export const PLANS = [
  { id: TRIAL_ID, label: "14-Day Free Trial", price: 0, perDay: "0", careAddOn: null },
  { id: "1-month", label: "1 Month", price: 399, perDay: "13.3", careAddOn: null },
  { id: "3-months", label: "3 Months", price: 1099, perDay: "12.2", careAddOn: 1499 },
  { id: "6-months", label: "6 Months", price: 1999, perDay: "11.1", careAddOn: 2499 },
  { id: "12-months", label: "12 Months", price: 3699, perDay: "10.13", careAddOn: null },
];

export const BATCHES = {
  Morning: ["6:30 AM", "7:30 AM", "8:30 AM"],
  Evening: ["5:00 PM", "6:00 PM", "7:00 PM"],
};

export const FAQS = [
  {
    q: "How does the 14-day free trial work?",
    a: "Register in under a minute and join our live classes free for 14 days. No payment is needed to register. We'll message you on WhatsApp with access details, and share plans before the trial ends.",
  },
  {
    q: "Is yoga safe at my age? What about back or knee pain?",
    a: "Yes. Classes are designed for adults 35+, with gentler options for joints, strength and balance. For back pain, knee pain or high blood pressure, check with your doctor first and tell your teacher.",
  },
  {
    q: "What if I miss a class?",
    a: "Every session is recorded in HD and added to your dashboard, so you can practise anytime. You can also join any other live batch that day at no extra cost.",
  },
  {
    q: "What are the class timings?",
    a: "45 minutes, Monday to Friday, with a Saturday doubts session. Mornings at 6:30, 7:30 and 8:30 AM; evenings at 5:00, 6:00 and 7:00 PM. You just need a mat, comfortable clothes and a chair or wall for support.",
  },
  {
    q: "What if I don't get the value? (Refund)",
    a: "Services are non-refundable by default, but if you're not satisfied, message us on WhatsApp (+91 90655 50642) or email sacredpause@gmail.com within 3 days of getting access. Refunds are processed in 5 to 7 working days.",
  },
  {
    q: "What is the Parents Care Pack?",
    a: "An add-on for the 3-month and 6-month plans that includes a live dietician Q&A, made for the parents in your life.",
  },
];
