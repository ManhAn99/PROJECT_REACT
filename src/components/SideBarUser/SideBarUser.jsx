import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useLocation,Link } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//responsive
import { mobile } from '../../responsive';

const SideBarUser = () => {
    const {currentUser} = useSelector(state => state.user)
 
    const {displayName, photoURL} = currentUser
    const location = useLocation()
    
    return (
        <Container>
            <ProfileUser>
            {
                photoURL ? (
                    <Avatar sx = {{width : 60, height : 60}} alt= {'name'} src= {photoURL} className = 'avatar' />
                    ) : (
                      <Avatar sx = {{width : 60, height : 60}} >{ displayName[0]}</Avatar>
                  )
            }
                <div>
                    <h4>{displayName}</h4>
                    <h3>
                        <Link to = '/user'><ModeEditOutlineIcon className = 'edit' /></Link>
                        <span>Edit Profile</span>
                    </h3>
                </div>
            </ProfileUser>
            <OptionUser>
                <div>
                    <img src="https://cf.shopee.com.my/file/ba61750a46794d8847c3f463c5e71cc4" alt="account" />
                    <span 
                    style = {{color : `${location.pathname === '/user' ? '#ff5521' : 'black'}`}}
                    ><Link to ='/user'>My Account</Link></span>
                </div>
                <div>
                    <img src="https://cf.shopee.com.my/file/f0049e9df4e536bc3e7f140d071e9078" alt="purchase" />
                    <span 
                    style = {{color : `${location.pathname === '/purchase' ? '#ff5521' : 'black'}`}}
                    ><Link to ='/purchase'>My Purchase</Link></span>
                </div>
                <div>
                    <img src="https://cf.shopee.com.my/file/e10a43b53ec8605f4829da5618e0717c" alt="purchase" />
                    <span>Notifications</span>
                </div>
                <div>
                    <img src="https://cf.shopee.com.my/file/84feaa363ce325071c0a66d3c9a88748" alt="purchase" />
                    <span>My Vouchers</span>
                </div>
                <div>
                    <img src="https://cf.shopee.com.my/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="purchase" />
                    <span>My Shop Coins</span>
                </div>
            </OptionUser>
        </Container>
    )
}

export default SideBarUser
const Container = styled.div`
 width : 230px;
 padding : 15px;
 ${mobile({width :'100%'})}
`
const ProfileUser = styled.div`
 display : flex;
 align-items : center;
 border-bottom : 1px solid #e4e4e4;
 padding-bottom: 20px;
 margin-left : -20px;

 > div {
     margin-left : 20px;
     
     > h4 {
         font-size : 18px;
         font-weight : 700;
     };
     > h3 {
         display : flex;
         align-items : center;
         color : gray;
         font-size : 14px;
         > a {
             color : inherit;
            .edit {
             font-size : 18px;
             cursor : pointer;
             margin-right: 5px;
         }
         }
     }
 }
`
const OptionUser = styled.div`
 padding-top : 20px;
 ${mobile({display :'flex',flexWrap : 'wrap',justifyContent : 'space-between'})}
  > div {
      display : flex;
      align-items : center;
      cursor : pointer;
      transition : 0.6s;
      padding-bottom : 10px;
      ${mobile({width :'calc(100%/2)'})}
      &:hover {
          opacity : 0.7
      }
      > img {
          width : 20px;
          
      }
      > span {
              font-weight : 700;
              font-size : 16px;
              padding : 0 7px;
              > a {
                  text-decoration : none;
                  color : inherit
              }
    }
  }
`