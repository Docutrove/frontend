import React from 'react'
import './index.scss'
import { Logo } from '../../../../assets'
export default function AdminLogin() {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="content">
          <div className="signin-form"> </div>
        </div>
      </div>
      <div className="right"> </div>
    </div>
  )
}
