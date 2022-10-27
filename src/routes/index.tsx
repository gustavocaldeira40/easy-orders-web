import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from 'pages/auth/Login'
import RecoveryPassword from 'pages/auth/Recovery-Password'
import RecoveryPasswordCode from 'pages/auth/Recovery-Password-Code'
import Register from 'pages/auth/Register'
import Dashboard from 'pages/app/Dashboard'
import ChangePassword from 'pages/app/Change-Password'
import UserData from 'pages/app/User-Data'
import UserSettings from 'pages/app/User-Settings'

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

      {/* App */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/user-data" element={<UserData />} />
      <Route path="/user-settings" element={<UserSettings />} />

      {/* 404   */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default MainRoutes
