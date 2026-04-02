import { useState } from "react"
import ULOStudentPortal from './ULOStudentPortal'
import ULODashboard from './ULODashboard'

export default function App() {
  const [page, setPage] = useState("login")

  if (page === "dashboard") {
    return <ULODashboard />
  }

  return <ULOStudentPortal onLogin={() => setPage("dashboard")} />
}