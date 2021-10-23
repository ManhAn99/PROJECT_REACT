import React from 'react'
import styled from 'styled-components'
import Logo from '../../../assets/logo.png'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router'
//responsive
import { mobile } from '../../../responsive'

const HeaderAdmin = () => {
    const location = useLocation()
    return (
        <Container>
            <Link to ='/'> <img src={Logo} alt="logo" /></Link>
             <span>
                 {location.pathname === '/admin-product' 
                  ?
                  'Product Management'
                  :
                  location.pathname === '/admin-user'
                  ?
                  'User Management'
                  :
                  "Order's History Management"
                }
             </span>
     
        </Container>
    )
}

export default HeaderAdmin
const Container = styled.div`
  height: 84px;
 background-color: #f6f6f6;
 padding-left: 100px;
 display: flex;
 align-items: center;
 ${mobile({paddingLeft : "10px"})}
  > a {
    > img {
     width: 130px;

 }
  }
  > span {
      font-weight : 700;
      font-size : 24px;
      padding : 0 30px;
      padding-top : 6px
  }
 
`
