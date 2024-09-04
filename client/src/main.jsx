import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store.js'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store ={store}>
   <StoreContextProvider>
   <App />
   </StoreContextProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
