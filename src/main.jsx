import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routs/MainRouts.jsx'
import AuthProvider from './provider/Authprovider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
    
    <Toaster />
  </React.StrictMode>,
)
