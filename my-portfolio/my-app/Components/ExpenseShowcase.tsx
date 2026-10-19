import { ArrowRight, Bell, FileSpreadsheet, WifiOff } from "lucide-react"
import type { ExpenseSlideId } from "./expenseSlides"
import "./ExpenseShowcase.css"

const CaptureSlide = () => (
  <div className="wm-flow-grid">
    <div className="wm-glass-card">
      <p className="wm-card-label">Incoming transactions</p>
      <div className="wm-transaction"><span>Groceries</span><strong>₹2,450</strong></div>
      <div className="wm-transaction"><span>Transport</span><strong>₹860</strong></div>
      <div className="wm-transaction"><span>Subscriptions</span><strong>₹499</strong></div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-glass-card wm-chart-card">
      <p className="wm-card-label">Spending overview</p>
      <div className="wm-chart-bars" aria-hidden="true">
        <span className="wm-bar" style={{ height: "45%" }} />
        <span className="wm-bar" style={{ height: "72%" }} />
        <span className="wm-bar" style={{ height: "55%" }} />
        <span className="wm-bar" style={{ height: "88%" }} />
        <span className="wm-bar" style={{ height: "65%" }} />
      </div>
      <p className="wm-chart-caption">Categories · History · Filters · Edit/restore</p>
    </div>
  </div>
)

const OfflineSlide = () => (
  <div className="wm-expense-feature wm-offline-layout">
    <div className="wm-offline-device">
      <div className="wm-device-top"><span>TrackExpense</span><WifiOff size={15} aria-hidden="true" /></div>
      <p className="wm-device-kicker">Available offline</p>
      <div className="wm-device-tile">Food <strong>₹320</strong></div>
      <div className="wm-device-tile">Transport <strong>₹140</strong></div>
      <div className="wm-device-pending">+ Expense saved locally</div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-offline-stack">
      <div className="wm-offline-step"><span>01</span><div><strong>Service worker</strong><small>Cached app shell & assets</small></div></div>
      <div className="wm-offline-step"><span>02</span><div><strong>IndexedDB</strong><small>Tiles · transactions · heatmap · pending expenses</small></div></div>
      <div className="wm-offline-step"><span>03</span><div><strong>Back online</strong><small>Queued expenses sync to the API</small></div></div>
    </div>
  </div>
)

const InsightsSlide = () => (
  <div className="wm-expense-feature wm-insights-layout">
    <div className="wm-glass-card wm-heatmap-card">
      <p className="wm-card-label">Expense heatmap</p>
      <div className="wm-heatmap" aria-hidden="true">
        {Array.from({ length: 35 }, (_, index) => (
          <span
            key={index}
            className={`wm-heat-level-${(index * 7 + Math.floor(index / 5)) % 4}`}
            style={{ animationDelay: `${180 + index * 22}ms` }}
          />
        ))}
      </div>
      <p className="wm-feature-note">Patterns across the month</p>
    </div>
    <div className="wm-insight-stack">
      <div className="wm-glass-card wm-recurring-card">
        <p className="wm-card-label">Recurring payments</p>
        <div className="wm-insight-row"><span>Streaming</span><strong>Monthly</strong></div>
        <div className="wm-insight-row"><span>Internet</span><strong>Monthly</strong></div>
      </div>
      <div className="wm-glass-card wm-breakdown-card">
        <div className="wm-donut" aria-hidden="true" />
        <div><p className="wm-card-label">Breakdown</p><strong>Trends by payment mode</strong></div>
      </div>
    </div>
  </div>
)

const ReportsSlide = () => (
  <div className="wm-expense-feature wm-reports-layout">
    <div className="wm-glass-card wm-range-card">
      <p className="wm-card-label">Choose a date range</p>
      <div className="wm-range-pill">Previous week</div>
      <div className="wm-range-pill">Previous month</div>
      <div className="wm-range-pill wm-range-selected">Custom dates <span>01 Mar → 31 Mar</span></div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-report-file">
      <FileSpreadsheet size={34} aria-hidden="true" />
      <strong>Expense report</strong>
      <span>Formatted .xlsx</span>
      <div className="wm-report-lines" aria-hidden="true"><i /><i /><i /></div>
    </div>
  </div>
)

const ProfileSlide = () => (
  <div className="wm-expense-feature wm-profile-layout">
    <div className="wm-glass-card wm-profile-card">
      <div className="wm-profile-avatar">SM</div>
      <strong>Your profile</strong>
      <span>Sign in · name · status · photo</span>
      <div className="wm-profile-followers">Connections & followers <b>View</b></div>
    </div>
    <div className="wm-glass-card wm-privacy-card">
      <p className="wm-card-label">In your control</p>
      <div className="wm-privacy-row"><span>Private account</span><i aria-hidden="true" /></div>
      <div className="wm-privacy-row"><span>Hide amounts</span><i aria-hidden="true" /></div>
      <p className="wm-feature-note">Protected account and profile settings</p>
    </div>
  </div>
)

const RemindersSlide = () => (
  <div className="wm-expense-feature wm-reminder-layout">
    <div className="wm-glass-card wm-reminder-settings">
      <p className="wm-card-label">Notification settings</p>
      <div className="wm-reminder-row"><span>Push notifications</span><strong>On</strong></div>
      <div className="wm-reminder-row"><span>Daily reminder</span><strong>9:00 PM</strong></div>
      <p className="wm-feature-note">Choose a time that works for you</p>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-push-card">
      <div className="wm-push-icon"><Bell size={22} aria-hidden="true" /></div>
      <div><strong>TrackExpense</strong><p>Time to log today’s expenses.</p></div>
      <span>now</span>
    </div>
  </div>
)

const ExpenseShowcase = ({ slideId, replayKey }: { slideId: ExpenseSlideId; replayKey: number }) => (
  <div key={`${slideId}-${replayKey}`} className="wm-expense-scene">
    {slideId === "capture" && <CaptureSlide />}
    {slideId === "offline" && <OfflineSlide />}
    {slideId === "insights" && <InsightsSlide />}
    {slideId === "reports" && <ReportsSlide />}
    {slideId === "profile" && <ProfileSlide />}
    {slideId === "reminders" && <RemindersSlide />}
  </div>
)

export default ExpenseShowcase
