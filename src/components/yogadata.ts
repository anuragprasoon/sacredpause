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
    a: "Register in under a minute, pick your preferred batch and join our live classes free for 14 days. No payment is needed to register. Our team will message you on WhatsApp with your access details, and before the trial ends we'll share the plans if you'd like to continue.",
  },
  {
    q: "Who should be taking our program?",
    a: "Our program is designed for 35+ professionals and for parents aged 45–60 who want a gentle, guided and consistent yoga routine from home.",
  },
  {
    q: "How many classes are there in a month, and how many batches?",
    a: "Classes are 45 minutes long, 5 days a week, in a small live group. Saturday is a group discussion / doubts session. You can pick from 6 daily batches: mornings at 6:30, 7:30 and 8:30 AM, and evenings at 5:00, 6:00 and 7:00 PM.",
  },
  {
    q: "What if I miss a class?",
    a: "Please don't worry at all! One of the biggest perks of our online studio is that you never truly miss a class. The HD recording of every session is uploaded to your member dashboard, so you can practise whenever it suits you. You can also simply join any of our other daily live batches at no extra cost. And if you miss all the live batches for the day, your WhatsApp tracking keeps your habit streak alive as long as you log back in the next available day.",
  },
  {
    q: "Who will be teaching?",
    a: "Ankit Mishra, a certified 500-hour yoga teacher with 5 years of experience.",
  },
  {
    q: "Why is it priced at just ₹399 a month?",
    a: "You get unlimited live and recorded classes (every live stream plus a 24x7 replay library), expert instruction with real-time posture correction and safety feedback from a live instructor who sees your camera, and a premium studio experience in your living room with zero commute. It works out to about ₹13 a day, less than the cost of a coffee.",
  },
  {
    q: "What if I didn't get the value? (Refund & cancellation)",
    a: "All services are non-refundable by default. However, if you are not satisfied, a refund can be provided if you tell us by email (sacredpause@gmail.com) or on WhatsApp (+91 90655 50642) within 3 days of getting access. Refunds are processed within 5 to 7 working days from the time you notify us. In the unlikely event of defective or unsatisfactory service, you can also request an extension/replacement within the same 3 days.",
  },
  {
    q: "What is the Parents Care Pack?",
    a: "An add-on for the 3-month and 6-month plans that includes a live dietician Q&A, built for the parents in your life.",
  },
];
