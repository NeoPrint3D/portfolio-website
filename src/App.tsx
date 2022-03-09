import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useContext } from 'react'
import { MenuContext } from "./context/menuContext";
import { DarkModeContext } from "./context/darkModeContext";
import lightBg from "./assets/lightBg.svg";
import darkBg from "./assets/darkBg.svg";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));



function App() {
  const isOpen = useContext(MenuContext)
  const darkMode = useContext(DarkModeContext)


  return (

    <div style={{ backgroundImage: `url(${!darkMode ? lightBg : darkBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className={`${darkMode ? 'fade-in2 ' : ' fade-in1'} body`}>
      <Menu isVisable={isOpen} />
      <Header />
      <Suspense fallback={
        <main className="min-h-screen">Loading...</main>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
