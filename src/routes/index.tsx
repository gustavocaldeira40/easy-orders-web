import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from 'pages/auth/Login'
import RecoveryPassword from 'pages/auth/Recovery-Password'
import RecoveryPasswordCode from 'pages/auth/Recovery-Password-Code'
import Register from 'pages/auth/Register'

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recovery-password" element={<RecoveryPassword />} />
      <Route
        path="/recovery-password-code-confirmation"
        element={<RecoveryPasswordCode />}
      />

      {/* 404   */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default MainRoutes
