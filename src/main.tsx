import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { MenuProvider } from "./context/menuContext"
import { DarkModeProvider } from "./context/darkModeContext"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
