import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
//actions
import {getCurrentUserAdmin} from '../../../../redux/admin/admin.action'
//responsive
import {mobile} from '../../../../responsive'

const DetailUser = () => {
    const dispatch = useDispatch()
    const {currentUserAdmin} = useSelector(state => state.adminData)
    const {displayName,email,photoURL,gender,birthDay,phone,shopName,orderHistory} = currentUserAdmin
    const handleClose = () => {
        dispatch(getCurrentUserAdmin(null))
    }
    return (
        <Container>
             <Wrapper>
                   <LeftContainer>
                       <div className = 'wrapper-left'>
                       <div className="top-left">
                       {
                           photoURL ? (
                              <Avatar sx = {{width : 200, height : 200}} alt= {'name'} src= {photoURL} />
                            ) : (
                               <Avatar sx = {{width : 200, height : 200}} >{ displayName[0]}</Avatar>
                             )
                         }
                         <h2 className = 'name'>{displayName}</h2>
                         <CloseIcon className = 'close' onClick = {handleClose}/>
                       </div>
                       <div className="bottom-left">
                          <h3><MailOutlineIcon className = 'icon-user' /> <span>{email}</span></h3>
                          <h3><CakeIcon  className = 'icon-user'/> <span>{birthDay && birthDay }</span></h3>
                          <h3><WcOutlinedIcon className = 'icon-user' /> <span>{gender && gender}</span></h3>
                          <h3><PhoneAndroidIcon className = 'icon-user' /> <span>{phone && phone}</span></h3>
                          <h3><ShoppingBagIcon className = 'icon-user' /> <span>{shopName && shopName}</span></h3>
                       </div>
                        </div>
                   </LeftContainer>
                   <RightContainer>
                     <div className = 'wrapper-right'>
                       <h2>
                           Total Orders : {orderHistory ? orderHistory.length : 0} 
                           <CloseIcon className = 'close' onClick = {handleClose}/>
                           </h2>
                       {orderHistory && (
                           <div className = 'wrapper-order'>
                             {orderHistory.map((orders,index) => {
                                 const {items,timestamp,total,user} = orders
                                 return (
                                   <OrderContainer>
                                      <h4># {index+1}<span>{timestamp.toDate().toUTCString()}</span>to {user.address}</h4>
                                      {items.map((item,index) => {
                                        const {count,name,price,productImageURL} = item
                                        return (
                                            <ItemContainer key = {index}>
                                              <div className = 'item-left'>
                                                  <img src= {productImageURL} alt= {name} />
                                                  <div className = 'info'>
                                                     <h3 className = 'name'>{name}</h3>
                                                     <h4 className = 'count'>x{count}</h4>
                                                  </div>
                                                   
                                              </div>
                                             <h3 className = 'total-price'> ₫ {price * count}</h3>
                                            </ItemContainer>
                                          )
                                      } )}

                                      <h3 className = 'total-payment'>Total Payment : ₫ {total}</h3>
                                    </OrderContainer>
                                 )
                             })}
                           </div>
                       )}
                     </div>
                   </RightContainer>
             </Wrapper>
        </Container>
    )
}

export default DetailUser
const Container = styled.div`
 position: fixed;
 width: 100%;
 min-height: 100vh;
 z-index : 30;
 top : 0;
 left : 0;
 background-color: rgba(0,0,0,0.4);
 display : flex;
 align-items : center;
 justify-content: center;
 ${mobile({position : "absolute",height : '100%',alignItems : 'flex-start'})}
`
const Wrapper = styled.div`
  width : 90%;
  height : 90vh;
  background-color: white;
  border-radius : 10px;
  display : flex;
  ${mobile({flexDirection : "column",height : 'auto',marginTop : '50px'})}
`
const LeftContainer = styled.div`
   padding : 20px;
   flex : 1;
   border-right : 1px solid #e2dede;
   .wrapper-left {
    display : flex;
    flex-direction : column;
    height : 100%;
    .top-left {
       flex : 1;
       display : flex;
       flex-direction: column;
       justify-content : center;
       align-items : center;
       position: relative;
       .close {
           position : absolute;
           top :0 ;
           right : 0px;
           cursor : pointer;
           color : red;
           display : none;
           ${mobile({display : 'block'})}
       }
       .name {
           padding : 10px 0;
           color : gray
       }
   }
   .bottom-left {
       flex : 1.5;
       display : flex;
       flex-direction: column;
       justify-content: center;
       > h3  {
           margin : 7px 10px ;
           font-size : 19px;
           display : flex;
           align-items: center;
           > span {
               margin : 0 15px;
               color : gray
           }
           .icon-user {
               color : #009879;
           }
       }
   }
   }
  
`
const RightContainer = styled.div`
   flex : 3;
   padding : 15px;
    .wrapper-right {
        height : 100%;
        width : 100%;
        overflow-y: scroll;
        border-radius : 10px;
        > h2 {
            display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
            color : red;
            cursor : pointer;
            ${mobile({display : 'none'})}
        }
        }  
    }
`
const OrderContainer = styled.div`
 border-bottom: 1px solid #dddddd;
 > h4 {
     color : gray;
     >span {
         padding : 0 20px
     }
 }
 > h3 {
     margin-bottom: 7px;
 }
 .total-payment {
     color : #ee4d2d;
   
 }
`
const ItemContainer = styled.div`
 padding : 7px 0;
 display : flex;
 justify-content: space-between;
 >h3 {
     padding-right : 20px
 };
 .item-left {
     >img {
         object-fit : cover;
         width : 80px;
         height : 80px
     }
     display : flex;
   .info {
       padding-left : 10px
   }
 }
`