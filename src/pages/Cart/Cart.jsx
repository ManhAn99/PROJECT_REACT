import React from 'react'
import styled from 'styled-components'
import {Navbar,Footer} from '../../components'
import ProductDetail from './ProductDetail/ProductDetail'
import Summary from './Summary/Summary'
import { useGlobalState } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import { mobile } from '../../responsive'
const Container = styled.div``
const Wrapper = styled.div`
 padding : 40px 20px;
`
const TopContainer = styled.div`
 display : flex;
 justify-content : space-between;
 align-items : center
`
const LeftTopContainer = styled.div`
 display : flex
`
const ButtonTop = styled.button`
 cursor : pointer;
 padding : 10px 20px;
 border :${props => props.type === 'filled' ? 'none' : '1px solid black'};
 background-color :${props => props.type === 'filled' ? '#df3517' : 'white'};
 color :${props => props.type === 'filled' ? 'white' : 'black'};
 font-weight : 600;
 transition : 0.6s;
 &:hover{
     ${props => props.type === 'filled' &&  `opacity : 0.6` }
     
 };
 ${mobile({padding : '10px 15px', fontSize : '13px'})}
`
const TitleTop = styled.h1`
 text-align : center;
 margin-left : 20px;
 ${mobile({padding : '5px 10px', fontSize : '20px'})}
`
const SpanItems = styled.span`
 color : #348de6
`
const BottomContainer = styled.div`
 margin : 40px 0 0 0;
 display : flex;
 ${mobile({flexDirection : 'column'})}

`
const BottomLeft = styled.div`
 flex : 3
`
const BottomRight = styled.div`
 flex : 1
`
const ImageNoCartContainer = styled.div`
 margin : 20px 0 0 20px;
 ${mobile({width : '100%',height : '50vh',margin :'20px 0'})}
`
const ImageNoCart = styled.img`
${mobile({width : '100%',height : '100%', objectFit : 'cover'})}
`
const Cart = () => {
    const {data,emptyCart} = useGlobalState()
    const {cart} = data
    const count = cart.map(item => item.count).reduce((a,b) => (
        a += b
    ),0)

    console.log(cart)
    return (
        <Container>
            <Navbar />
             <Wrapper>
                <TopContainer>
                    <LeftTopContainer>
                      <Link to = '/' style = {{textDecoration : 'none'}}>
                          <ButtonTop>CONTINUE SHOPPING</ButtonTop>
                      </Link>
                      <TitleTop>YOUR CART : <SpanItems>{count}</SpanItems></TitleTop>
                    </LeftTopContainer>
                    {cart.length !== 0 && <ButtonTop type = 'filled' onClick = {emptyCart}>EMPTY CART</ButtonTop>}
                </TopContainer>
                {cart.length === 0 ? (
                    <ImageNoCartContainer>
                      <ImageNoCart src = 'https://www.meerabasu.in/assets/images/empty-cart.png' />
                     </ImageNoCartContainer>
                ) : (
                    
                    <BottomContainer>
                    <BottomLeft>
                        {cart.map(item => (
                            <ProductDetail item = {item} key = {item.id} />
                        ))}
                    </BottomLeft>
                    <BottomRight>
                        <Summary />
                    </BottomRight>
                </BottomContainer>
                
                )}
             </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
