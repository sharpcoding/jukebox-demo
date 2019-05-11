import React from "react"
import logo from "../../assets/svg/logo.svg"
import { AppHeader, AppLogo, AppLink } from "./components"

export const App: React.FC = () => {
  return (
    <div>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </div>
  )
}
