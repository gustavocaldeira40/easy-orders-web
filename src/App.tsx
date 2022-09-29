import React from 'react'
import AppContext from 'context/app'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from 'routes'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from 'styles/globals'

function App() {
  return (
    <AppContext>
      <GlobalStyle />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </AppContext>
  )
}

export default App
