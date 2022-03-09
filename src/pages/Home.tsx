import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"

function Home() {
    return (
        <><main className="flex justify-center items-center  ">
            <div className="mockup-code h-[25rem] w-[40rem] md:w-[55rem] md:h-[30rem]  shadow-2xl shadow-blue-500 dark:shadow-purple-600 terminal">
                <div className="text-3xl">
                    <pre data-prefix="$" className="flex">
                        <code className="text-white font-semibold">

                            <Typewriter
                                onInit={
                                    typewriter => {
                                        typewriter
                                            .pauseFor(1000)
                                            .typeString("Hello, my name is <span class='text-emphasis'>Drew Ronsman</span>")
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .typeString("I'm a <span class='text-emphasis'>full-stack</span> web developer.")
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .typeString("Check out my <a href='/projects' class='hover:text-purple-300 hover:scale-150 text-emphasis'>Projects.</a>")
                                            .start()
                                    }}
                                options={{
                                    cursorClassName: "cursor",
                                    cursor: "|",
                                }} />
                        </code>
                    </pre>
                </div>
            </div>


        </main>
            <main className="body">
                test

            </main>
        </>


    )
}

export default Home