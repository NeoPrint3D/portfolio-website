import { MenuContext, MenuDispatchContext } from "../context/menuContext"
import { useContext } from "react"
import { Sling as Hamburger } from "hamburger-react"
import { AnimatePresence, LazyMotion, m } from "framer-motion"
import { Link } from "react-router-dom"



function Menu({ isVisable }: { isVisable: Boolean }) {
    const isOpen = useContext(MenuContext)
    const setIsOpen = useContext(MenuDispatchContext)

    const loadFeature = () => import("./feature").then(res => res.default)


    return (
        <AnimatePresence>
            {isVisable &&
                <LazyMotion features={loadFeature}>
                    <div className="flex h-screen w-full fixed  bg-black/40 z-50  ">
                        <m.div className={`grid grid-rows-7 h-screen w-screen sm:w-[30rem] bg-gradient-to-b from-primary-white to-gray-300 dark:from-gray-900 dark:to-primary-gray bubble-in`}
                            initial={{ x: "-100%" }}
                            animate={{
                                x: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            exit={{
                                x: "-100%",
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            <div className="flex items-center h-24 ml-5 row-span-2">
                                <div className="hover:scale-110 w-fit p-2 rounded-full hover:shadow-2xl transition-all duration-700 text-primary-red hover:text-blue-500 dark:hover:text-purple-500 z-[90rem] ">
                                    <Hamburger
                                        toggled={isOpen}
                                        onToggle={() => setIsOpen(false)}
                                        rounded={true}
                                        direction="right"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-7 row-span-4 ">
                                <Link to="/" className="flex justify-center  ">
                                    <button className="flex transition-shadow duration-700 hover:shadow-2xl p-2.5 rounded-2xl"
                                        onClick={() => setIsOpen(false)}>
                                        <p className="text-6xl text-gradient-primary">Home</p>
                                    </button>
                                </Link>

                                <Link to="/about" className="flex justify-center  ">
                                    <button className="flex transition-shadow duration-700 hover:shadow-2xl p-2.5 rounded-2xl"
                                        onClick={() => setIsOpen(false)}>
                                        <p className="text-6xl text-gradient-primary">About</p>
                                    </button>
                                </Link>

                                <Link to="/projects" className="flex justify-center  ">
                                    <button className=" transition-shadow duration-700 hover:shadow-2xl p-2.5 rounded-2xl"
                                        onClick={() => setIsOpen(false)}>
                                        <p className="text-6xl text-gradient-primary">Projects</p>
                                    </button>
                                </Link>


                                <Link to="/contact" className="flex justify-center  ">
                                    <button className="flex transition-shadow duration-700 hover:shadow-2xl p-2.5 rounded-2xl"
                                        onClick={() => setIsOpen(false)}>
                                        <p className="text-6xl text-gradient-primary">Contact</p>
                                    </button>
                                </Link>











                            </div>
                        </m.div>
                        <button className="hidden sm:block w-full h-screen" onClick={() => setIsOpen(false)} />
                    </div>
                </LazyMotion>
            }
        </AnimatePresence>
    )
}

export default Menu
