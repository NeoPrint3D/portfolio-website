import { createContext, useEffect, useState } from "react";


const DarkModeContext = createContext(false)
const DarkModeDispatchContext = createContext(null as any)

interface Props {
    children: JSX.Element
}

function DarkModeProvider({ children }: Props) {
    const [darkMode, setDarkMode] = useState(
        () => {
            const darkMode = localStorage.getItem("darkMode")
            return darkMode === "true" ? true : false
        }
    )

    useEffect(() => {
        console.log("darkMode", darkMode)

        if (darkMode) {
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        } else {
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }
       
        localStorage.setItem("darkMode", darkMode.toString())
    }, [darkMode])
    
    return (
        <DarkModeContext.Provider value={darkMode}>
            <DarkModeDispatchContext.Provider value={setDarkMode}>
                {children}
            </DarkModeDispatchContext.Provider>
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeDispatchContext, DarkModeProvider }
