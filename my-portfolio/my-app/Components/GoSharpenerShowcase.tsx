import { ArrowRight, FileSpreadsheet, RefreshCw, ShieldCheck } from "lucide-react"
import type { GoSharpenerSlideId, MatchRule } from "./goSharpenerSlides"
import GoSharpenerLogo from "./GoSharpenerLogo"
import "./GoSharpenerShowcase.css"

type MatchStatus = "Matched" | "Review" | "Not matched"

const rules: { id: MatchRule; label: string }[] = [
  { id: "admission", label: "Admission no." },
  { id: "email", label: "Email" },
  { id: "name", label: "Class + name" },
]

const sampleMatches: Record<MatchRule, { student: string; value: string; status: MatchStatus }[]> = {
  admission: [
    { student: "Student 01", value: "ADM-1042", status: "Matched" },
    { student: "Student 02", value: "ADM-2087", status: "Review" },
    { student: "Student 03", value: "ADM-9999", status: "Not matched" },
  ],
  email: [
    { student: "Student 01", value: "student01@example.test", status: "Review" },
    { student: "Student 02", value: "student02@example.test", status: "Matched" },
    { student: "Student 03", value: "student03@example.test", status: "Not matched" },
  ],
  name: [
    { student: "Student 01", value: "10 · Student 01", status: "Matched" },
    { student: "Student 02", value: "10 · Student 02", status: "Review" },
    { student: "Student 03", value: "11 · Student 03", status: "Not matched" },
  ],
}

const PreparationSlide = () => (
  <div className="wm-go-layout wm-go-preparation">
    <div className="wm-glass-card wm-go-prep-card">
      <p className="wm-card-label">School sheet · raw data</p>
      <div className="wm-go-prep-table" aria-label="Illustrative school sheet before cleaning">
        <span>Name</span><span>Class</span><span>Admission</span>
        <span> Student 01 </span><span>Class 10</span><span> ADM-1042 </span>
        <span>student 02</span><span>10th</span><span>ADM-2087</span>
      </div>
      <p className="wm-go-prep-note">Inspect gaps, spacing, and inconsistent formats</p>
    </div>
    <div className="wm-go-prep-transform" aria-hidden="true">
      <span>Excel</span><ArrowRight size={28} />
    </div>
    <div className="wm-glass-card wm-go-prep-card wm-go-prep-ready">
      <p className="wm-card-label">Processing sheet · ready</p>
      <div className="wm-go-prep-table" aria-label="Illustrative processing sheet after cleaning">
        <span>Name</span><span>Class</span><span>Admission</span>
        <span>Student 01</span><span>10</span><span>ADM-1042</span>
        <span>Student 02</span><span>10</span><span>ADM-2087</span>
      </div>
      <div className="wm-go-prep-tags"><span>Clean text</span><span>Standardize</span><span>Validate</span></div>
    </div>
  </div>
)

const MappingSlide = ({ rule, replayKey, onRuleChange }: {
  rule: MatchRule
  replayKey: number
  onRuleChange: (rule: MatchRule) => void
}) => {
  const rows = sampleMatches[rule]
  return (
    <div className="wm-mapping-scene">
      <div className="wm-rule-picker" role="group" aria-label="Student matching rule">
        <span>Match by</span>
        {rules.map((item) => (
          <button key={item.id} type="button" aria-pressed={rule === item.id} onClick={() => onRuleChange(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      <div key={replayKey} className="wm-flow-grid wm-mapping-grid">
        <div className="wm-glass-card">
          <p className="wm-card-label">Sample student records</p>
          {rows.map((row) => <div className="wm-student-row" key={row.student}><span>{row.student}</span><small>{row.value}</small></div>)}
        </div>
        <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
        <div className="wm-glass-card">
          <p className="wm-card-label">Mapping results</p>
          {rows.map((row) => (
            <div className={`wm-result wm-result-${row.status.toLowerCase().replace(" ", "")}`} key={row.student}>
              <span>{row.student}</span><strong>{row.status}</strong>
            </div>
          ))}
        </div>
      </div>
      <p className="wm-sample-note">Illustrative records only</p>
    </div>
  )
}

const ResultsSlide = () => (
  <div className="wm-go-layout wm-go-results">
    <div className="wm-glass-card wm-go-analysis">
      <p className="wm-card-label">Student data analysis</p>
      <div className="wm-go-stat wm-go-stat-matched"><span>Matched</span><strong>72%</strong><i style={{ width: "72%" }} /></div>
      <div className="wm-go-stat wm-go-stat-review"><span>Review</span><strong>18%</strong><i style={{ width: "18%" }} /></div>
      <div className="wm-go-stat wm-go-stat-missed"><span>Not Matched</span><strong>10%</strong><i style={{ width: "10%" }} /></div>
      <p className="wm-go-caption">Sample distribution for this animation</p>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-go-workbook">
      <FileSpreadsheet size={32} aria-hidden="true" />
      <strong>Mapping results.xlsx</strong>
      <span>Separate sheets, one clear export</span>
      <div className="wm-go-sheets"><i>Matched</i><i>Review</i><i>Not Matched</i></div>
    </div>
  </div>
)

const ConverterSlide = () => (
  <div className="wm-go-layout wm-go-converter">
    <div className="wm-glass-card wm-go-source">
      <p className="wm-card-label">Source file</p>
      <div className="wm-go-file"><FileSpreadsheet size={23} aria-hidden="true" /><div><strong>school-records.xlsx</strong><span>Worksheet: Students</span></div></div>
      <div className="wm-go-source-line"><span>School</span><strong>Verified</strong></div>
      <div className="wm-go-source-line"><span>Input</span><strong>CSV or XLSX</strong></div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-glass-card wm-go-output">
      <p className="wm-card-label">Converted preview</p>
      <div className="wm-go-table"><span>NAME</span><span>CLASS</span><span>EMAIL</span><span>Student 01</span><span>10</span><span>Ready</span><span>Student 02</span><span>11</span><span>Ready</span></div>
      <div className="wm-go-downloads"><span>Download CSV</span><span>Download XLSX</span></div>
    </div>
  </div>
)

const SyncSlide = () => (
  <div className="wm-go-sync">
    <div className="wm-go-browser wm-go-browser-left"><div className="wm-go-browser-bar"><i /><i /><i /><span>Tab A · School file</span></div><div className="wm-go-browser-body"><strong>Worksheet selected</strong><span>Students · 120 rows</span><small>Workspace updated</small></div></div>
    <div className="wm-go-sync-center"><RefreshCw size={29} aria-hidden="true" /><strong>Change shared</strong><span>Revision checked</span></div>
    <div className="wm-go-browser wm-go-browser-right"><div className="wm-go-browser-bar"><i /><i /><i /><span>Tab B · Mapping</span></div><div className="wm-go-browser-body"><strong>Latest workspace</strong><span>Students · 120 rows</span><small>View refreshed</small></div></div>
  </div>
)

const RollbackSlide = () => (
  <div className="wm-go-rollback">
    <div className="wm-glass-card wm-go-rollback-steps">
      <p className="wm-card-label">Rollback preparation</p>
      <div><span>01</span><strong>Verify school</strong><small>Confirm the target school</small></div>
      <div><span>02</span><strong>Check input file</strong><small>Preview CSV or Excel rows</small></div>
      <div><span>03</span><strong>Analyze changes</strong><small>Review affected records</small></div>
    </div>
    <div className="wm-flow-arrow" aria-hidden="true"><ArrowRight size={28} /></div>
    <div className="wm-go-rollback-preview"><ShieldCheck size={30} aria-hidden="true" /><span className="wm-go-in-progress">Currently working on</span><strong>Change analysis</strong><p>Preview first. Confirm only after reviewing the impact.</p><div>Preview only · No changes applied</div></div>
  </div>
)

const GoSharpenerShowcase = ({ slideId, replayKey, rule, onRuleChange }: {
  slideId: GoSharpenerSlideId
  replayKey: number
  rule: MatchRule
  onRuleChange: (rule: MatchRule) => void
}) => (
  <div className="wm-go-scene">
    <div className="wm-go-brand"><GoSharpenerLogo /></div>
    {slideId === "mapping" ? <MappingSlide rule={rule} replayKey={replayKey} onRuleChange={onRuleChange} /> : (
      <div key={`${slideId}-${replayKey}`} className="wm-go-animated">
        {slideId === "preparation" && <PreparationSlide />}
        {slideId === "results" && <ResultsSlide />}
        {slideId === "converter" && <ConverterSlide />}
        {slideId === "sync" && <SyncSlide />}
        {slideId === "rollback" && <RollbackSlide />}
      </div>
    )}
  </div>
)

export default GoSharpenerShowcase
