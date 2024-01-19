import { createRoot } from "react-dom/client"

import "./index.css"

const App = () => {
  return (
    <div>
      <p className="font-serif">Space Tourism</p>
      <p className="font-sans">Space Tourism</p>
    </div>
  )
}

createRoot(document.getElementById("app")).render(<App />)