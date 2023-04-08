import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import "../node_modules/bootstrap/dist/css/bootstrap.css" 
import {BrowserRouter} from "react-router-dom"
import FavoritesProvider from "./contexts/FavoritesContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>,
)
