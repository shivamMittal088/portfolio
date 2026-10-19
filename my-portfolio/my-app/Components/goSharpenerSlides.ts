export const goSharpenerSlides = [
  {
    id: "preparation",
    title: "School sheet preparation",
    description: "Manually analyze student data, sanitize the school sheet with advanced Excel methods, and prepare a consistent processing sheet.",
  },
  {
    id: "mapping",
    title: "Student matching",
    description: "Compare school and student records by admission number, email, or full name and class.",
  },
  {
    id: "results",
    title: "Review & analysis",
    description: "Analyze Matched, Review, and Not Matched groups, then export the available results as workbook sheets.",
  },
  {
    id: "converter",
    title: "Format conversion",
    description: "Verify a school, select a CSV or Excel worksheet, preview the converted rows, and download CSV or XLSX.",
  },
  {
    id: "sync",
    title: "Synced workflows",
    description: "Keep the same workspace in step across browser tabs with change notifications and revision checks.",
  },
  {
    id: "rollback",
    title: "Rollback review",
    description: "Check a rollback file and preview affected records before confirming any database changes.",
  },
] as const

export type GoSharpenerSlideId = (typeof goSharpenerSlides)[number]["id"]
export type MatchRule = "admission" | "email" | "name"
