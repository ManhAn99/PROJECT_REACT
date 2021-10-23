import React ,{useState}from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Badge } from '@mui/material';
import logo from '../../assets/logobrand.png'
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {useSelector, useDispatch} from 'react-redux'
import { signOutUser } from '../../redux/user/user.actions';

import {motion} from 'framer-motion'
import ReviewCart from './ReviewCart/ReviewCart';
//responsive
import { mobile } from '../../responsive';

const HeaderMain = () => {
    const history = useHistory()
    const {currentUser} = useSelector(state => state.user)
    const  {carts} = useSelector(state => state.checkoutData)
    const [toggle,setToggle] = useState(false)
    const [toggleViewCart,setToggleViewCart] = useState(false)
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    const handleMove = () => {
        setToggle(true)
    }
    const handleLeave = () => {
        setToggle(false)
    }
    const handleMoveViewCart = () => {
        setToggleViewCart(true)
    }
    const handleLeaveViewCart = () => {
        setToggleViewCart(false)
    }
    const handleSubmit = e => {
      e.preventDefault()
 
      history.push(`/searchProduct?name=${search}`)
    }
    const handleSignOut = () => {
        dispatch(signOutUser())  
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
                                  <li 
                                    style = {{paddingLeft : '10px'}} 
                                    onClick = {() => setToggle(!toggle)} 
                                    onMouseOver = {handleMove} 
                                    onMouseLeave = {handleLeave} >
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
                                           <span onClick = {handleSignOut} >Logout</span>
                                        </motion.div>
                                    )}
                                  </li>
                              )
                          }
                          <li>    
                               {(currentUser && currentUser.userRoles.includes('admin')) && (
                                    <span >
                                        <Link to = '/admin-product' style = {{display : 'flex', alignItems : 'center'}}>
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
               <LeftBottomContainer> 
                  <Link to = '/'>
                   <Image src = {logo} alt = 'logo' />
                   <span>Shopee</span>
                   </Link>
                </LeftBottomContainer>
                <CenterContainer>
                    <SearchContainer onSubmit = {handleSubmit} >
                        <Input 
                        value = {search}
                        onChange = {(e) => setSearch(e.target.value)}
                        placeholder = 'Search for products , brands and shopee' />
                      <SearchButton type = 'submit'>
                         <SearchOutlinedIcon />
                      </SearchButton>
                    </SearchContainer>
                </CenterContainer>
               <CartContainer  onMouseLeave = {handleLeaveViewCart}>
                <Badge badgeContent={carts.length}  color = 'error' onMouseOver = {handleMoveViewCart} >
                  <Link to ='/cart' ><ShoppingCartOutlinedIcon className = 'cart' /></Link>
                </Badge>
               {toggleViewCart && (
                    <motion.div
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                   
                    >
                   <ReviewCart />
                 </motion.div>
               )}
               </CartContainer>
            </BottomContainer>
        </Container>
    )
}

export default HeaderMain
const Container = styled.div`
 height : 120px;
 background-color: #ff5521;
 padding : 0 80px;
 position : fixed;
 top : 0;
 left : 0;
 width: 100%;
 z-index : 1000;
 ${mobile({padding : '0 10px'})}
`
const TopContainer = styled.div`
 height: 34px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const TopLeftContainer = styled.div`
 ${mobile({display : 'none'})};
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
         };
         
       }
  }
`
const TopRightContainer = styled.div`
  ${mobile({width : "100vh"})}

  > ul {
      display : flex;
      align-items: center;
      ${mobile({width : "100%",justifyContent : 'space-between'})}
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
            font-size : 19px
         }
          > span {
              padding : 0 10px;
             
              > a {
                  text-decoration : none;
                  color : white;      
              }
      
          }
          .name {
              margin-left: -15px;
          }
          .toggle {
            position: absolute;
            background-color: white;
            z-index : 1000;
            min-width : 150px;
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
`
const BottomContainer = styled.div`
 height: calc(100% - 34px);
 margin-left: -10px;
 color : white;
 display : flex;
 align-items: center;
 justify-content: space-between;
 .cart {
     color : white;
     font-size : 30px
 }

`
const LeftBottomContainer = styled.div`
 
 flex : 1;
 > a {
    display : flex;
    align-items: center;
    text-decoration : none;
    color : white;
    > span {
     font-size : 35px;
     margin-top: 10px;
     ${mobile({fontSize : "26px",marginRight : '6px'})}
 }
 }
`
const Image = styled.img`
 width: 70px;
 ${mobile({width : "50px"})}
`
const CenterContainer = styled.div`
 flex : 3.5;
 
`
const SearchContainer = styled.form`
 width: 100%;
 display : flex;
 align-items: center;
 background-color: white;
 padding : 2px;
 height: 40px;

`
const Input = styled.input`
 flex : 1;
 height: 90%;
 border : none;
 padding-left: 10px;
 font-size : 15px;
 ${mobile({fontSize : "13px"})}
 &:focus {
     outline: none;
 }

`
const SearchButton = styled.button`
 background-color:#ff5521 ;
 height: 90%;
 width: 60px;
 display: flex;
 justify-content : center;
 align-items: center;
 cursor : pointer;
 color : white;
 border : none;
 transition : 0.5s;
 &:hover {
     opacity : 0.6
 }
`

const CartContainer = styled.div`
 flex : 1;
 display : flex;
 justify-content: center;
 cursor : pointer;
 position : relative
`
