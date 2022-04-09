import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm'

export const AuthRoute = () => {
  return (
    <>
    <Routes>
        <Route path="auth" element={<AuthForm/>}/>
    </Routes>
    </>
  )
}
