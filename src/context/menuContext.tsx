import { createContext, useEffect, useState } from "react"



const MenuContext = createContext(false)
const MenuDispatchContext = createContext(null as any)


interface Props {
    children: JSX.Element
}

function MenuProvider({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <MenuContext.Provider value={isOpen}>
            <MenuDispatchContext.Provider value={setIsOpen}>
                {children}
            </MenuDispatchContext.Provider>
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuDispatchContext, MenuProvider }