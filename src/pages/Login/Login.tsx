import { useState } from "react"
import Button from '../../components/Button/Button'
import SignInImage from '/assets/images/sign-in-image.png'
import Logo from '/assets/logo/lendsqr-icon.svg'
import './login.styles.scss'

const Login = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className='background'>
      <section className='header-section'>
        <div className='lendsqr-icon'>
          <img src={Logo} alt='lendsquare icon'/>
        </div>
      </section>
      <section className='login-container'>
        <div className='img-section'>
          <div>
            <img src={SignInImage} alt='illustrative art'/>
          </div>
        </div>
        <div className='form-section'>
            <div className='header'>
              <div>Welcome!</div>
              <div>Enter details to login.</div>
            </div>
            <div className='form-wrapper'>
              <form>
                
                <input type='email' placeholder='Email' className='email' required/>
                
                <div className='password-wrapper'>
                  <input type={showPassword ? "text" : "password"} placeholder='Password' className='password' required/>
                  <span className='show-password' onClick={togglePassword}>
                    { showPassword ? "HIDE" : "SHOW" } 
                  </span>
                  
                </div>
                <div className='forgot-password'>
                  FORGOT PASSWORD?
                </div>
                <div className='login-btn'>
                  <Button buttonType='default' type='button'>LOG IN</Button>
                </div>
              </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login