import { createRoot } from "react-dom/client"

import "./index.css"

import logo from "./assets/shared/logo.svg"
import hamburgerIcon from "./assets/shared/icon-hamburger.svg"
import bgHomeMobile from "./assets/home/background-home-mobile.jpg"

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-cover" style={{ backgroundImage: `url(${bgHomeMobile})` }}>
      <div className="p-6 sticky top-0 flex items-center justify-between">
        <img src={logo} className="w-10 h-10" />
        <img src={hamburgerIcon} className="w-6 shrink-0" />
      </div>
      <div className="grow flex flex-col">
        <div className="mt-6 px-6">
          <p className="text-center tracking-[2.7px] text-blue">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="mt-4 text-center text-80 font-serif text-white">SPACE</h1>
          <p className="mt-4 text-center leading-7 text-blue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="grow flex items-center justify-center">
          <a href="#" className="inline-block w-[150px] h-[150px] flex items-center justify-center bg-white text-20 tracking-[1.25px] font-serif rounded-full">
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById("app")).render(<App />)