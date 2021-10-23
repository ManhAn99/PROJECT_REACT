import React from 'react'
import styled from 'styled-components'
import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
//responvise
import { mobile } from '../../../responsive';

const Shop = () => {
    return (
        <Container>
            <InfoShop>
                <img src="https://cf.shopee.com.my/file/415401361ab85e5109721af12409233f_tn" alt="shop-name" />
                <DescShop>
                     <h3>nuritari.my</h3>
                     <h4>Active 1 hour ago</h4>
                     <ButtonContainer>
                       <button className = 'chat-now'>
                           <ForumIcon />
                           Chat Now
                       </button>
                       <button className = 'view-shop'>
                           <StorefrontIcon />
                           View Shop
                       </button>
                     </ButtonContainer>
                </DescShop>
            </InfoShop>
            <InfoProduct>
               <InfoProductTop>
                  <div>
                      Ratings 
                      <span>8.2k</span>
                  </div>
                  <div className = 'info-middle'>
                    Response Rate
                      <span>100%</span>
                  </div>
                  <div>
                    Joined
                      <span>18 months ago</span>
                  </div>
               </InfoProductTop>
               <InfoProductBottom>
                  <div>
                      Products
                      <span>820</span>
                  </div>
                  <div className = 'info-middle'>
                      Response Time
                      <span>within minutes</span>
                  </div>
                  <div>
                   Follower
                      <span>17.7k</span>
                  </div>
               </InfoProductBottom>
            </InfoProduct>
        </Container>
    )
}

export default Shop
const Container = styled.div`
 background-color: white;
 margin : 15px 0;
 display : flex;


`
const InfoShop = styled.div`
 flex : 1;
 padding : 25px;
 display : flex;
 align-items: center;
 > img {
     border-radius: 50%;
     border : 1px solid #e4e4e4;
     width: 80px;
     height : 80px;
     object-fit : cover
 }
`
const DescShop = styled.div`
  margin-left: 20px;
  > h4 {
      color : gray;
      font-size : 16px
  }
`
const ButtonContainer = styled.div`
 margin-top: 10px;
 margin-left: -10px;
 display : flex;
 > button {
     width : 120px;
     cursor : pointer;
     margin-left: 10px;
     display: flex;
     align-items: center;
     justify-content: center;
     padding : 5px 0;
     font-weight : 700
 }
 .chat-now {
    background-color: #fcddd2;
    border: 1px solid #f05d40 ;
    color : #f05d40;
    
 }
 .view-shop {
    background-color: transparent;
    color : #999999;
    border: 1px solid #d3d2d2;
 }
`
const InfoProduct = styled.div`
 flex : 1.5;
 padding : 25px;
 display: flex;
 flex-direction : column;
 justify-content: space-evenly;
 ${mobile({display  : 'none'})}
 
`
const InfoProductTop = styled.div`
 display : flex;
 align-items: center;
justify-content: space-between;
> div {
    display: flex;
    font-weight : 700;
    flex : 1;
    > span {
        color : #f05d40;
        margin-left: 10px;
    }
 }
 
`
const InfoProductBottom = styled.div`
 display : flex;
 align-items: center;
 justify-content: space-between;
 > div {
    display: flex;
    font-weight : 700;
    flex : 1;
    > span {
        color : #f05d40;
        margin-left: 10px;
    }
 }
`