import React from 'react'
import {useNavigate} from 'react-router-dom';
import FacebookLoginButton from './FacebookLoginButton';

const Navbar = ({user}) => {
  const navigate = useNavigate()
  
  const onHome = () => {
    navigate("/")
  }

  const loginPage = () => {
    navigate('/login')
  }
  return (
    <div className='navbar'>
        <span className='logo' onClick={onHome}>Lama App</span>
        {
          user ?
          <ul className='list'>
            <li className='listItem'>
                <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" className='avatar' />
            </li>
            <li className="listItem">Mạnh Bin</li>
            <li className="listItem">Logout</li>
          </ul> :
          <span onClick={loginPage}>Login</span>
        }

<FacebookLoginButton />
    </div>
  )
}

export default Navbar