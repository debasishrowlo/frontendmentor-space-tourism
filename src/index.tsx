import { createRoot } from "react-dom/client"

import "./index.css"

const App = () => {
  return (
    <div>Space Tourism</div>
  )
}

createRoot(document.getElementById("app")).render(<App />)