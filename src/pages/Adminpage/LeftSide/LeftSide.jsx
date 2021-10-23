import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import {useSelector, useDispatch} from 'react-redux'
import { signOutUser } from '../../../redux/user/user.actions';

const LeftSide = () => {
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
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
                <button className = 'account'>My account</button>
                <button className = 'signout' onClick = {() => dispatch(signOutUser())}>Sign out</button>
                </>
            )
          }
        </Container>
    )
}

export default LeftSide
const Container = styled.div`
 flex : 1;
 background-color: #f6f6f6;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 30px;
 > h3 {
     margin : 10px 0
 }
 > button {
     width: 50%;
     border : none;
     color : white;
     padding : 5px 0;
     font-weight: 700;
     cursor: pointer;
 }
 .account {
     margin : 10px 0;
     background-color: green;
 }
 .signout {
     background-color: #f3a81c;
 }

`