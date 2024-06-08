import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import {
  Logo,
  FirstLoginImage,
  SecondLoginImage,
  ThirdLoginImage,
  FourthLoginImage,
  PasswordImage,
} from '../../../../assets'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    navigate('/admin/dashboard')
  }

  return (
    <div className="grid-container-signIn">
      <div className="form-tables">
        <div className="docuadmin">
          <img className="logoImage" src={Logo} alt="Logo" />
          <span className="admins">Admin Panel</span>
        </div>
        <div className="form-propers">
          <span className="signintxt">Sign In</span>
          <form onSubmit={handleSubmit}>
            <div className="bongus">
              <label className="label" htmlFor="email">
                Email Address:
              </label>
              <input
                className="bolala"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="example@docutrove.com"
                required
              />
            </div>
            <div className="bonga">
              <label className="label" htmlFor="password">
                Password:
              </label>
              <div className="password-input-container">
                <input
                  className="bolale"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your Password..."
                  required
                />

                <img
                  className="passwordimg"
                  src={PasswordImage}
                  alt="Password"
                />
              </div>
            </div>

            <button type="submit" className="button-cta">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="container-images">
        <div className="big-image">
          <div className="image-wrapper">
            <img src={FirstLoginImage} alt="First Image" />
          </div>
        </div>
        <img className="sec-image" src={SecondLoginImage} alt="Second Image" />
        <img className="third-image" src={ThirdLoginImage} alt="Third Image" />
        <img
          className="fourth-image"
          src={FourthLoginImage}
          alt="Fourth Image"
        />
      </div>
    </div>
  )
}

export default SignIn
