export const expenseSlides = [
  {
    id: "capture",
    title: "Capture & overview",
    description: "Use category tiles, browse and filter transactions, and edit or restore entries when needed.",
  },
  {
    id: "offline",
    title: "PWA & offline sync",
    description: "An installable app with a cached shell, IndexedDB data, and expenses that sync after reconnecting.",
  },
  {
    id: "insights",
    title: "Spending insights",
    description: "Explore trends, recurring payments, payment breakdowns, and a calendar heatmap.",
  },
  {
    id: "reports",
    title: "Excel reports",
    description: "Turn a week, month, or custom date range into a downloadable Excel report.",
  },
  {
    id: "profile",
    title: "Profile & privacy",
    description: "Secure sign-in, profile details, visibility controls, followers, and the option to hide amounts.",
  },
  {
    id: "reminders",
    title: "Helpful reminders",
    description: "Opt in to web push notifications and choose a daily spending reminder time.",
  },
] as const

export type ExpenseSlideId = (typeof expenseSlides)[number]["id"]
