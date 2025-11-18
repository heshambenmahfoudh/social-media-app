import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/authContext'
import ContextProvider from './context/contextProvider'
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextProvider>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <App />
          <Toaster />
        </BrowserRouter>
      </ContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
