import React from 'react'
import styled from 'styled-components'
import { useGlobalState } from '../../../context/GlobalState'
import { Link } from 'react-router-dom'
const Container = styled.div`
 height : 60vh;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
 padding : 10px 20px
`
const TitleSummary = styled.h3`
 text-align : center;
 font-size : 28px;
 margin : 30px 0px
`
const ItemContainer = styled.div`
 margin : 15px 0
`
const ItemText = styled.h4`
 display : flex;
 justify-content : space-between;
 align-items : center;
 font-size :${props => props.main === 'total' ? '22px' : '20px'}
`
const Button = styled.button`
 width : 100%;
 margin-top : 50px;
 border : none;
 background-color : black;
 color : white;
 font-weight : 500;
 padding : 15px 0px;
 cursor : pointer;
 transition : 0.6s;
 opacity  : ${props => props.cart.length === 0 && `0.3`};
 &:hover{
     opacity : ${props => props.cart.length !== 0 && `0.6`};
 }
`
const Summary = () => {
   const {data} = useGlobalState()
   const {cart} = data
   const total = cart.reduce((a,b) => (
      a += b.price.raw * b.count
   ), 0)
    return (
        <Container>
          <TitleSummary>ORDER SUMMARY</TitleSummary>
          <ItemContainer>
             <ItemText><b>Total  </b>{total}</ItemText>
          </ItemContainer>
          <ItemContainer>
             <ItemText><b>Discount  </b> 0</ItemText>
          </ItemContainer>
          <ItemContainer>
             <ItemText><b>TA:KEIK Xu  </b> 0</ItemText>
          </ItemContainer>
          <ItemContainer >
             <ItemText main = 'total'> <b>SubTotal </b> {total} VND</ItemText>
          </ItemContainer>
          <Link to = '/checkout' style = {{textDecoration : 'none'}}>
            <Button disabled = {cart.length === 0} cart = {cart} >CHECKOUT NOW</Button>
          </Link>
        </Container>
    )
}

export default Summary
