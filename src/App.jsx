import Sidenav from "./components/Sidenav.jsx"
import Main from "./components/Main.jsx"
import Work from "./components/Work.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Cursor from "./components/Cursor.jsx"

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
