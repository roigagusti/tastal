import React from 'react'
import { LoginHeader,LoginCard,LoginFooter } from '../components/Login/login.js';

export const Login = () => {
  return (
    <div className="login">
      <LoginHeader />
      <LoginCard />
      <LoginFooter />
    </div>
  )
}

export default Login;