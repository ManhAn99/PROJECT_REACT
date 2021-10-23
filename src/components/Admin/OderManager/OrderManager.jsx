import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
//responsive
import { mobile } from '../../../responsive'

const OrderManager = () => {
    const {allHistoryOrders} = useSelector(state => state.adminData)
    
    if(allHistoryOrders.length === 0) return <h2>No Orders Yet</h2>
    return (
        <TableContainer>
              <thead>
               <tr>
                <Thead >#</Thead>
                <Thead >ID</Thead>
                <Thead >User</Thead>
                <Thead >Date</Thead>
                <Thead >Items</Thead>
                <Thead >Total Payment</Thead>
               
              </tr>
            </thead>
            <tbody>
            {allHistoryOrders.map((order,index) => {
                const {items,id,timestamp,total,user} = order
                return(
                    <tr>
                     <Tdata data-label = '#'>{index + 1}</Tdata>
                     <Tdata data-label = 'ID'>{id}</Tdata>
                     <Tdata data-label = 'User'>{user.displayName}</Tdata>
                     <Tdata data-label = 'Date'>{timestamp.toDate().toUTCString()}</Tdata>
                     <Tdata data-label = 'Items'>{items.length}</Tdata>
                     <Tdata data-label = 'Total Payment'> ₫ {total}</Tdata> 
                   </tr>
                )
            })}
            </tbody>
        </TableContainer>
    )
}

export default OrderManager

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
  background-color:  #009879;
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
  border-bottom: 2px solid  #009879;
   } 
  }
`
const Thead = styled.th`
 padding: 12px 15px;

`
const Tdata = styled.td`
padding: 12px 15px;
${mobile({display : "block", width : '100%',textAlign : 'right',position : 'relative'})}

  &::before{
  ${mobile({content : "attr(data-label)",position : 'absolute',left : '0'})}
 }

`