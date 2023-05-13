import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./style/index.css"
// import AOS library
import AOS from 'aos'
import "aos/dist/aos.css"

// add AOS init
AOS.init()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
