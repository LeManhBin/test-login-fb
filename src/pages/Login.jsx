import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        {/* <h1 className="loginTitle">Choose a Login Method</h1> */}
        <div className="wrapper">
            <div className="left">
                <div className="loginButton google">
                    <span className='icon'><i className="fa-brands fa-google"></i></span>
                    Google
                </div>
                <div className="loginButton facebook">
                    <span className='icon'><i className="fa-brands fa-facebook"></i></span>
                    FaceBook
                </div>
                <div className="loginButton github">
                    <span className='icon'><i className="fa-brands fa-github"></i></span>
                    Github
                </div>
            </div>
            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder='User name'/>
                <input type="password" placeholder='Password'/>
                <button className='submit'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login