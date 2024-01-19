import { useState } from "react"
import classnames from "classnames"
import { createRoot } from "react-dom/client"

import "./index.css"

import logo from "./assets/shared/logo.svg"
import hamburgerIcon from "./assets/shared/icon-hamburger.svg"
import closeIcon from "./assets/shared/icon-close.svg"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const bgClasses = 
    "bg-[url('./assets/home/background-home-mobile.jpg')]" + " " +
    "md:bg-[url('./assets/home/background-home-tablet.jpg')]" + " " +
    "lg:bg-[url('./assets/home/background-home-desktop.jpg')]"

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div 
        className={classnames("fixed z-10 right-0 w-2/3 h-full backdrop-blur-3xl transition-transform", {
          "translate-x-full": !isMenuOpen,
          "translate-x-0": isMenuOpen,
        })}
      >
        <div className="mt-8 pr-6 flex justify-end">
          <button type="button" onClick={() => closeMenu()}>
            <img src={closeIcon} />
          </button>
        </div>
        <ul className="mt-16">
          {["HOME", "DESTINATION", "CREW", "TECHNOLOGY"].map((item, index) => {
            const num = index.toString().padStart(2, "0")

            return (
              <li className="mt-6 first:mt-0">
                <a href="#" className="block pl-8 py-1 text-white">
                  <span className="font-bold">{num}</span>
                  <span className="ml-3">{item}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={`h-screen flex flex-col ${bgClasses} bg-cover`}>
        <div className="p-6 sticky top-0 flex items-center justify-between">
          <img src={logo} className="w-10 h-10" />
          <button type="button" onClick={() => openMenu()}>
            <img src={hamburgerIcon} className="w-6 shrink-0" />
          </button>
        </div>
        <div className="grow flex flex-col">
          <div className="mt-6 px-6">
            <p className="text-center tracking-[2.7px] text-blue">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="mt-4 text-center text-80 font-serif text-white">SPACE</h1>
            <p className="mt-4 text-center leading-7 text-blue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="grow flex items-center justify-center">
            <a href="#" className="w-[150px] h-[150px] flex items-center justify-center bg-white text-20 tracking-[1.25px] font-serif rounded-full">
              EXPLORE
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

createRoot(document.getElementById("app")).render(<App />)