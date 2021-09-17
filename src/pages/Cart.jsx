import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Footer from '../components/Footer'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Divider} from '@material-ui/core'
import { mobile } from '../responsive'
import {Link} from 'react-router-dom'
const Container = styled.div``
const Wrapper = styled.div`
 padding : 20px;
 ${mobile({padding : '10px'})}
`
const Title = styled.h1`
 font-weight : 300;
 text-align : center;
`
const Top = styled.div`
 display : flex;
 align-items : center;
 justify-content : space-between;
 padding : 20px
`
const TopButton = styled.button`
 padding : 10px;
 font-weight : 600;
 cursor : pointer;
 border : ${props => props.type === 'filled' && 'none'};
 background-color : ${props => props.type === 'filled' ? 'black' : 'transparent'};
 color : ${props => props.type === 'filled' && 'white'}
`
const TopText = styled.span`
 text-decoration  : underline;
 margin : 0 10px;
 cursor : pointer;
 ${mobile({display : 'none'})}
`
const TopTexts = styled.div``
const Bottom = styled.div`
 display : flex;
 justify-content : space-between;
 padding : 20px;
 ${mobile({flexDirection : 'column'})}
`
const Info = styled.div`
 flex : 3
`
const Product = styled.div`
 display : flex;
 justify-content : space-between;
 padding : 15px 0px;
 ${mobile({flexDirection : 'column'})}
`
const ProductDetail = styled.div`
 flex : 2;
 display : flex
`
const Image = styled.img`
 width : 200px
`
const Details = styled.div`
 padding : 20px;
 display : flex;
 flex-direction : column;
 justify-content : space-between
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
 width : 20px;
 height : 20px;
 border-radius : 50%;
 background-color : ${props => props.color}

`
const ProductSize = styled.div``
const PriceDetail = styled.div`
 flex : 1;
 display : flex;
 align-items : center;
 justify-content : center;
 flex-direction : column
`
const ProductAmountContainer = styled.div`
 display : flex;
 align-items : center;
 margin-bottom : 20px
`
const ProductAmount = styled.div`
 font-size : 24px;
 margin : 5px;
 ${mobile({margin : '5px 15px'})}
`
const ProductPrice  = styled.div`
 font-size : 30px;
 font-weight : 300
`
const Summary = styled.div`
 flex : 1;
 border : 0.5px solid lightgray;
 padding : 20px;
 border-radius : 10px;
 height : 50vh

`
const SummaryTitle = styled.h1`
 font-weight :200
`
const SummaryItem = styled.div`
 margin : 30px 0;
 display : flex;
 justify-content : space-between;
 font-weight : ${props => props.type === 'total' && '500'};
 font-size : ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
 width : 100%;
 padding : 10px;
 background-color : black;
 color : white;
 border : none;
 font-weight : 500;
 cursor : pointer
`
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Anouncement />
            <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
              <TopButton><Link to = '/' style = {{color : 'black', textDecoration : 'none'}}>CONTINUE SHOPPING</Link></TopButton>
                 <TopTexts>
                   <TopText>Shopping Bag(2) </TopText>
                   <TopText>Your Wishlist(0)</TopText>
                 </TopTexts>
                 <TopButton type = 'filled'><Link to = '/' style = {{color : 'white', textDecoration : 'none'}}>CHECKOUT NOW</Link></TopButton>
              </Top>

              <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                          <Image src = 'https://vcdn-sohoa.vnecdn.net/2021/02/21/iphone-13-3062-1613925981.jpg' />
                          <Details>
                              <ProductName><b>Product : </b>IPHONE 13</ProductName>
                              <ProductId><b>ID : </b>12321232</ProductId>
                              <ProductColor color = 'yellow'/>
                              <ProductSize><b>Size : </b> 12</ProductSize>
                          </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                              <AddIcon /> 
                              <ProductAmount>2</ProductAmount>
                              <RemoveIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$399</ProductPrice>
                        </PriceDetail>

                    </Product>
                    <Divider />
                    <Product>
                        <ProductDetail>
                          <Image src = 'https://vcdn-sohoa.vnecdn.net/2021/02/21/iphone-13-3062-1613925981.jpg' />
                          <Details>
                              <ProductName><b>Product : </b>IPHONE 13</ProductName>
                              <ProductId><b>ID : </b>12321232</ProductId>
                              <ProductColor color = 'yellow'/>
                              <ProductSize><b>Size : </b> 12</ProductSize>
                          </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                              <AddIcon /> 
                              <ProductAmount>2</ProductAmount>
                              <RemoveIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$399</ProductPrice>
                        </PriceDetail>

                    </Product>
                
                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>$1000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Estimated Shipping</SummaryItemText>
                      <SummaryItemPrice>$100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Shipping Discount</SummaryItemText>
                      <SummaryItemPrice>$20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type = 'total'>
                      <SummaryItemText>Total</SummaryItemText>
                      <SummaryItemPrice>$2000</SummaryItemPrice>
                    </SummaryItem>
                    <Button><Link to = '/' style = {{color : 'white', textDecoration : 'none'}}>CHECKOUT NOW</Link></Button>
                </Summary> 
              </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
