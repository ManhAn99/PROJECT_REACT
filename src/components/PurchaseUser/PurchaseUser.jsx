import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
//components
import OrderedHistory from './OrderedHistory/OrderedHistory'
import { Link } from 'react-router-dom';

const NoOrderYet = () => {
   return(
       <NoOrderContainer>
            <div>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png" alt="empty" />
                <h5>You don't have any orders</h5>
                <button><Link to ='/'>Go Shopping Now</Link></button>
            </div>
       </NoOrderContainer>
   )
}

const PurchaseUser = () => {
    const {currentUser} = useSelector(state => state.user)
    const {orderHistory} = currentUser
    if(!orderHistory) {
        return <NoOrderYet />
    }
    return (
        <Container>
            <TopContainer>
                <div className="wrapper">
                    <h4>Completed</h4>
                </div>
            </TopContainer>
            <BodyContainer>
              {orderHistory.map((order,index) => (
                  <OrderedHistory order = {order} key = {index} />
              ))}
            </BodyContainer>
        </Container>
    )
}

export default PurchaseUser
const Container = styled.div`
 background-color: #f5f5f5;
 flex : 1
`
const TopContainer = styled.div`
 background-color: white;
 .wrapper {
     padding: 15px 0;
     width: 200px;
     display : flex;
     justify-content: center;
     border-bottom: 3px solid #ff5521;
     >h4 {
         color : #ff5521;
         font-size: 18px;
     }
 }
`
const BodyContainer = styled.div`
 margin-top : 20px;

 min-height : 70vh
`
const NoOrderContainer = styled.div`
 background-color: white;
 flex : 1;
 margin-top : 20px;
 min-height : 70vh;
 display : flex;
 padding-top : 50px;
 justify-content : center;
 > div {
     display : flex;
     flex-direction : column;
     align-items : center;
     > h5 {
         color : gray;
         margin : 10px 0;
         font-size : 17px
     }
     img {
         width : 108px;
         height : 108px;
         object-fit : cover
     }
     > button {
        border : none;
        margin-top : 20px;
        > a {
            color : white;
           cursor : pointer;
           background-color: #ee4d2d;
           padding : 10px 30px;
           font-size : 18px;
           text-decoration : none;
           transition : 0.5s;
           &:hover {
               opacity : 0.7
           }
        }
         
     }
 }
`