import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router'
const HeaderLogin = () => {
    const location = useLocation()
    return (
        <Container>
            <Link to ='/'> <img src={Logo} alt="logo" /></Link>
             <span>
                 {location.pathname === '/login' 
                  ?
                  'Log In'
                  :
                  location.pathname === '/resetPassword'
                  ?
                  'Reset Password'
                  :
                  location.pathname === '/admin'
                  ?
                  'Admin'
                  : 'Sign Up'
                }
             </span>
        </Container>
    )
}

export default HeaderLogin
const Container = styled.div`
 height: 84px;
 background-color: #f6f6f6;
 padding-left: 100px;
 display: flex;
 align-items: center;
  > a {
    > img {
     width: 130px;

 }
  }
 > span {
    font-size: 25px;
    font-weight: 700;
    padding : 10px 0 0 16px
 }

`
