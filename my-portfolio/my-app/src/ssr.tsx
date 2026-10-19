import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { MemoryRouter } from "react-router-dom"
import { PortfolioRoutes } from "./App"

export const renderRoute = (route: string) => renderToString(
  <StrictMode>
    <MemoryRouter initialEntries={[route]}>
      <PortfolioRoutes />
    </MemoryRouter>
  </StrictMode>,
)
