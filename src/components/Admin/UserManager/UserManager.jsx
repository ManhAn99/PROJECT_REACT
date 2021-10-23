import React from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
//actions
import { getCurrentUserAdmin } from '../../../redux/admin/admin.action';
//responsive
import { mobile } from '../../../responsive';

const UserManager = () => {
    const {allUsers} = useSelector(state => state.adminData)
    const dispatch = useDispatch()
    
    return (
        <TableContainer>
             <thead>
               <tr>
                <Thead >#</Thead>
                <Thead >Name</Thead>
                <Thead >Email</Thead>
                <Thead >Date Created</Thead>
                <Thead >Role</Thead>
                <Thead >Orders</Thead>
                <Thead >More</Thead>
              </tr>
            </thead>
            <tbody>
            {allUsers.map((user,index) => {
                const {email, displayName,userRoles,orderHistory,timestamp} = user
                return(
                    <tr>
                     <Tdata data-label = '#'>{index + 1}</Tdata>
                     <Tdata data-label = 'Name'>{displayName}</Tdata>
                     <Tdata data-label = 'Email'>{email}</Tdata>
                     <Tdata data-label = 'Date Created'>{timestamp.toDate().toUTCString()}</Tdata>
                     <Tdata data-label = 'Role'>{userRoles.map(role => <span>{role}</span>)}</Tdata>
                     <Tdata data-label = 'Orders'>{orderHistory ? (orderHistory.length) : 0}</Tdata>
                     <Tdata data-label = 'More'>
                       <MoreHorizIcon className = 'more' onClick = {() => dispatch(getCurrentUserAdmin(user))} />
                      </Tdata>
                   </tr>
                )
            })}
            </tbody>
        </TableContainer>
    )
}

export default UserManager

const TableContainer = styled.table`
  border-collapse: collapse;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  color : #2a4762;
  font-weight : 700;
  ${mobile({width : "100%"})}
  > thead {
    ${mobile({display : "none"})}
    > tr {
  background-color: #ee4d2d;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}
 }
  > tbody {
   
    tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
   tr:last-of-type {
  border-bottom: 2px solid #ee4d2d;
   } 
  }
`
const Thead = styled.th`
 padding: 12px 15px;
`
const Tdata = styled.td`
padding: 12px 15px;
${mobile({display : "block", width : '100%',textAlign : 'right',position : 'relative',})}
 .more {
   cursor : pointer
 }
 &::before{
  ${mobile({content : "attr(data-label)",position : 'absolute',left : '0'})}

 }
`