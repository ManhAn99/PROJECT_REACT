import React from 'react'
import styled from 'styled-components'
import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import {useHistory} from 'react-router-dom'
//responsive
import { mobile } from '../../../../responsive';

const OrderedItem = ({item,timestamp}) => {
    const {name,id,category,count,price,productImageURL} = item
    const history = useHistory()
    const handleBuyAgain = () => {
        history.push(`/showProduct/${id}`)
    }
    return (
        <Container>
            <TopContainer>
                <InfoShopContainer>
                   <div className="left-shop">
                     <h4 className = 'category'>{category}</h4>
                     <h6 className="chat">
                       <ForumIcon className = 'icon' />
                       Chat
                     </h6>
                     <h6 className="store">
                       <StorefrontIcon className = 'icon' />
                       View Store
                     </h6>
                   </div>
                   <div className="right-shop">
                     <h5 className = 'shipping-success'>
                        <LocalShippingOutlinedIcon className = 'icon-shipping' />
                      SUCCESS SHIPPING
                     </h5>
                   </div>
                </InfoShopContainer>
                <InfoProductContainer>
                      <img src={productImageURL} alt= {name} />
                      <div className="name">
                          <h3 className = 'name'>{name}</h3>
                          <h3 className="count">x {count}</h3>
                      </div>
                      <h3 className="price">  
                        ₫ {price * count}
                      </h3>
                </InfoProductContainer>
            </TopContainer>
            <BottomContainer>
                <h4 className = 'timestamp'>{timestamp.toDate().toUTCString()}</h4>
               <div className = 'bottom'>
                 <div className="total">
                     <LocalAtmIcon className = 'icon-total' />
                     <h4 className = 'total-payment'>Total Payment : </h4>
                     <h3 className = 'total-price'> ₫ {price * count} </h3>
                 </div>
                 <div className="buttons">
                     <button onClick = {handleBuyAgain}>Buy Again</button>
                 </div>
               </div>
            </BottomContainer>
        </Container>
    )
}

export default OrderedItem

const Container = styled.div`
 background-color: white;
 margin : 15px 0
`
const TopContainer = styled.div`
 padding : 0 25px;
 height : 168px;
 border-bottom: 1px solid #e6e6e6;
 display : flex;
 flex-direction: column;
`
const InfoShopContainer = styled.div`
 border-bottom: 1px solid #e6e6e6;
 flex : 1;
 display : flex;
 align-items: center;
 justify-content: space-between;
 .left-shop,.chat,.store,.shipping-success{
     display : flex;
     align-items: center;
 }
 .chat {
     margin : 0 10px;
     background-color: #ee4d2d;
     color :white
 }
 .store {
     color : gray;
     border : 1px solid #dddcdc
 }
 .chat,.store{
   padding : 3px 10px;
   font-size : 12px
 }
 .icon {
     font-size : 16px;
     margin-right: 5px;
 }
 .shipping-success {
   color : #2dad9c;
   .icon-shipping {
       margin : 0 10px
   }
 }
`
const InfoProductContainer = styled.div`
 flex : 2;
 padding : 10px 0;
 display : flex;
 justify-content: space-between;
 align-items: center;
 > img {
     width : 90px;
     height : 90px;
     object-fit: cover;
 }
 >div {
     flex : 1;
      align-self : flex-start;
     display : flex;
     flex-direction: column;
     padding-left : 20px;
     color : gray;
     .count {
         margin-top : -10px
     }
 }
 .price {
     color :  #ee4d2d;
 }
`
const BottomContainer = styled.div`
 height : 142px;
 background-color : #fffefb;
 padding : 20px 25px;
 display : flex;
 justify-content: space-between;
 ${mobile({height : 'auto'})}
 .timestamp {
     align-self : flex-end;
     ${mobile({alignSelf : 'flex-start'})}
 }
 .bottom {
     display : flex;
     flex-direction: column;
     justify-content: space-between;
     ${mobile({width : '100%'})}
     .total {
     display : flex;
     align-items: center;
     ${mobile({width : '100%',justifyContent : 'flex-end'})}
    .icon-total,.total-price {
        color :  #ee4d2d;
    }
    .total-payment {
        padding : 0 15px 0 5px
    }
    .total-price {
        font-size : 27px
    }
 }
 }

 .buttons {
     display : flex;
     justify-content: flex-end;
     >button {
         color : white;
         cursor : pointer;
         background-color: #ee4d2d;
         border : none;
         padding : 9px 50px;
         font-weight : 700;
         font-size : 16px;
         transition : 0.5s;
         &:hover {
             opacity : 0.6
         }
     }
 }
`