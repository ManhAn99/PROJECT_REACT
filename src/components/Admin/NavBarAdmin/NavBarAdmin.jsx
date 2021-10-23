import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import {useSelector, useDispatch} from 'react-redux'
import { signOutUser } from '../../../redux/user/user.actions';
import { Link ,useLocation} from 'react-router-dom';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
//responsive
import { mobile } from '../../../responsive';

const NavBarAdmin = () => {
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const location = useLocation()
    return (
        <Container>
             {
            currentUser && (
                <>
                {currentUser.photoURL ? (
                    <Avatar sx = {{width : 70, height : 70}}  alt= {'name'} src= {currentUser.photoURL}  />
                ) : (
                    <Avatar >{ currentUser.displayName[0]}</Avatar>
                )}
                <h3>{currentUser.displayName}</h3>
                 <div className = 'admin-option'>
                   <h4><Link to ='/user' ><NoAccountsIcon /><span>My account</span></Link></h4>
                   <h4>
                       <Link to ='/admin-user' className = {`${location.pathname === '/admin-user' && 'path'}`}>
                           <PeopleAltIcon />
                           <span>Users</span>
                    </Link></h4>
                   <h4>
                       <Link to ='/admin-product' className = {`${location.pathname === '/admin-product' && 'path'}`}>
                           <DashboardIcon />
                           <span>Products</span>
                        </Link></h4>
                   <h4>
                       <Link to ='/admin-history' className = {`${location.pathname === '/admin-history' && 'path'}`}>
                           <TimelineIcon />
                           <span>Order's Historys</span>
                           </Link></h4>
                 </div>
                 <button onClick = {() => dispatch(signOutUser())}>Log out</button>
                </>
            )
          }
        </Container>
    )
}

export default NavBarAdmin

const Container = styled.div`
 flex : 1;
 background-color: #f6f6f6;
 display: flex;
 flex-direction: column;
 align-items : center;
 padding-top: 30px;
 min-height : calc(100vh - 84px);

 ${mobile({justifyContent : 'center'})}
 > button {
     width: 50%;
     border : none;
     color : white;
     padding : 5px 0;
     font-weight: 700;
     cursor: pointer;
     margin : 10px 0;
     background-color: green;
 }
 > h3 {
     margin : 10px 0
 };
 .admin-option {
     > h4 {
        > a {
         display : flex;
         align-items : center;
         color : #757575;
         margin : 10px 0;
         text-decoration : none;
         > span {
             margin : 0 6px
         }
     }
     .path{
         color : #ff5521;
     }
     }
 }

 
`
