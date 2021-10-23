import React ,{useState}from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link,useHistory, useLocation} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {useSelector, useDispatch} from 'react-redux'
import { signOutUser } from '../../redux/user/user.actions';
import {motion} from 'framer-motion'
//responsive
import { mobile } from '../../responsive';

const HeaderCart = () => {
    const {currentUser} = useSelector(state => state.user)
    const location = useLocation()
    const history = useHistory()
    const [toggle,setToggle] = useState(false)
    const dispatch = useDispatch()
    const handleMove = () => {
        setToggle(true)
    }
    const handleLeave = () => {
        setToggle(false)
    }
    const moveToHome = () => {
        history.push('/')
    }
    return (
        <Container>
           <TopContainer>
           <TopLeftContainer>
                     <ul>
                         <li>
                             Seller Center
                         </li>
                         <li className = 'download'>Download</li>
                         <li>
                             <span>Follow us on</span>
                             <FacebookOutlinedIcon />
                             <InstagramIcon />
                         </li>
                     </ul>
                </TopLeftContainer>
                <TopRightContainer>
                      <ul>
                          <li>
                              <NotificationsOutlinedIcon /> Notifications
                          </li>
                          <li>
                              <HelpOutlineOutlinedIcon /> Help
                          </li>
                          {!currentUser && (
                              <li style = {{paddingLeft : '10px'}}>
                               <span><Link to ='/signup'>Sign up</Link></span>
                               <span><Link to ='/login'>Login</Link></span>
                            </li>
                          )}
                          {
                              currentUser && (
                                  <li style = {{paddingLeft : '10px'}} onMouseOver = {handleMove} onMouseLeave = {handleLeave} >
                                     <>  
                                      <span>
                                          {
                                              currentUser.photoURL ? (
                                                <Avatar sx = {{width : 24, height : 24}} alt= {'name'} src= {currentUser.photoURL} className = 'avatar' />
                                              ) : (
                                                <Avatar sx = {{width : 24, height : 24}} >{ currentUser.displayName[0]}</Avatar>
                                              )
                                          }
                                      </span>
                                     <span className = 'name'>{currentUser.displayName}</span>
                                    </>
                                    {toggle && (
                                         <motion.div 
                                          initial = {{opacity : 0}}
                                          animate = {{opacity : 1}}
                                          exit = {{opacity : 0}}
                                          className = 'toggle' 
                                          onMouseLeave = {handleLeave}>
                                            <div></div>
                                           <span><Link to = '/user'>My account</Link></span>
                                           <span onClick = {() => dispatch(signOutUser())} >Logout</span>
                                        </motion.div>
                                    )}
                                  </li>
                              )
                          }
                          <li>    
                               {(currentUser && currentUser.userRoles.includes('admin')) && (
                                    <span >
                                        <Link to = '/admin' style = {{display : 'flex', alignItems : 'center'}}>
                                          <AdminPanelSettingsIcon />
                                           Admin
                                        </Link>
                                    </span>
                                )}  
                          </li>
                      </ul>
                </TopRightContainer>
           </TopContainer>
           <BottomContainer>
              <div> 
               <BottomLeftContainer>
                   <img 
                   onClick = {moveToHome}
                   src="data:image/png;base64,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" alt="" />
                    <h3>Shopee</h3>
               </BottomLeftContainer>
               <h4>{location.pathname === '/cart' ? "Shopping Cart" : 'Checkout'}</h4>
               </div>
           </BottomContainer>
        </Container>
    )
}

export default HeaderCart
const Container = styled.div`
 height : 120px;
 background-color: white;
 position: fixed;
 width: 100%;
 top : 0;
 left : 0;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 z-index : 10;

`
const TopContainer = styled.div`
   height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e74f13;
  padding : 0 90px;
  ${mobile({padding : '0 10px'})}

`

const TopLeftContainer = styled.div`

> ul {
      display : flex;
      align-items: center;
    
      .download{
        border-right : 1px solid #d6d2d2;
        border-left : 1px solid #d6d2d2;

      }
       > li {
           list-style: none;
           color : white;
           font-size : 14px;
           display: flex;
           align-items: center;
           padding : 0 10px;
           cursor: pointer;
           > .MuiSvgIcon-root {
            margin : 0 5px;
            font-size : 19px
         }
       }
  }
  ${mobile({display : 'none'})}
`
const TopRightContainer = styled.div`
  > ul {
      display : flex;
      align-items: center;
      ${mobile({justifyContent : 'space-between'})}
       > li {
           list-style: none;
           position: relative;
           color : white;
           font-size : 14px;
           display: flex;
           align-items: center;
           padding : 0 5px;
           cursor : pointer;
           > .MuiSvgIcon-root {
            margin : 0 5px;
            font-size : 19px;
         }
          > span {
              padding : 0 10px;
              > a {
                  text-decoration : none;
                  color : white
              }
              
          }
          .name {
              margin-left: -15px;
          }
          .toggle {
            position: absolute;
            background-color: white;
            z-index : 1000;
            min-width : 100px;
            top : 30px;
            display : flex;
            flex-direction: column;
            cursor: pointer;
            padding : 10px;
            justify-content: space-around;
            height: 100px;
            border : 1px solid #c2bfbf;
            align-items : center;
            > span {
                color : black;
                font-size: 16px;
                font-weight: 700;
                transition: 0.5;
                > a {
                    text-decoration : none;
                    color : black;
                }

                &:hover {
                    color : #e74f13
                }
            }
            > div {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent white transparent;
                position: absolute;
                left: 40%;
                top : -10px
            }
          }

       }
  }
  ${mobile({width : '100%'})}
`
const BottomContainer = styled.div`
 padding : 0 90px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 height : calc(120px - 34px);
 > div {
     display : flex;
     align-items: center;
     > h4 {
        color :  #e74f13;
        font-size : 25px;
        margin-bottom : -10px;
        padding : 0 20px;
        border-left : 1px solid  #e74f13;
     }
 }
 ${mobile({padding : '0 10px'})}
`
const BottomLeftContainer = styled.div`
  display : flex;
  align-items: center;
  height: 100%;
  padding : 0 20px;
  > img {
      width : 50px;
      height : 50px;
      object-fit : cover;
      cursor : pointer;
     
  }
  >h3 {
      color :  #e74f13;
      font-size : 27px;
      margin-bottom : -10px;
  }
`