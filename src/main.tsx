import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { LikesProvider } from './context/LikesContext'
import App from './App'

import './styles/token.css'
import './styles/ui.css'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/iwamad-practice/">
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)