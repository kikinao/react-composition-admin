import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/index'
import { RouterProvider } from 'react-router-dom'
import './style/reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
