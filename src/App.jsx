import Sidenav from "./components/Sidenav"
import Main from "./components/Main"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Cursor from "./components/Cursor"
import React from "react"

function App() {
  return (
    <div>
      <Cursor />
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
