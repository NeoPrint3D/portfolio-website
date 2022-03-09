import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Sling as Hamburger } from "hamburger-react"
import { MenuContext, MenuDispatchContext } from "../context/menuContext"
import { LazyMotion, m, domAnimation } from "framer-motion"
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { DarkModeDispatchContext, DarkModeContext } from "../context/darkModeContext"
//@ts-ignore
import Headroom from "react-headroom"


function Header() {
    const isOpen = useContext(MenuContext)
    const setIsOpen = useContext(MenuDispatchContext)

    const darkMode = useContext(DarkModeContext)
    const setDarkMode = useContext(DarkModeDispatchContext)



    return (
        <Headroom>
            <LazyMotion features={domAnimation}>
                <header className="grid grid-cols-3 items-center h-24 rounded-b-3xl shadow-2xl bg-gradient">
                    <div className="button-primary ml-5">
                        <Hamburger
                            toggled={isOpen}
                            onToggle={() => setIsOpen(!isOpen)}
                            rounded={true}
                            direction="right"
                        />
                    </div>
                    <Link to="/" className="flex justify-center text-7xl font-logo font-extrabold ">
                        <div className="group flex items-center transition-shadow duration-700 py-0.5 px-5  group-hover:shadow-2xl   rounded-full">
                            <p className=" text-gradient-primary bounce-in">DJR</p>
                            <m.div
                                initial={{ x: -500, scale: 10, y: "50vh" }}
                                animate={{
                                    x: 0, scale: 1, y: 0, transition: {
                                        duration: .75,
                                        ease: "easeInOut",
                                    },
                                }}><p className="transition-all duration-700 font-logo text-7xl text-primary-red group-hover:scale-150  group-hover:-translate-y-2 group-hover:text-blue-500  dark:group-hover:text-purple-500 ">.</p>
                            </m.div>
                        </div>
                    </Link>
                    <div className="flex justify-end items-center ">
                        <button onClick={() => setDarkMode(!darkMode)} className="mr-5 button-primary">
                            {!darkMode ? <BsSun size={45} /> : <BsMoonStars size={45} />}
                        </button>
                    </div>
                </header>
            </LazyMotion>
        </Headroom>
    )
}

export default Header