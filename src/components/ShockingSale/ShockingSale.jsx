import React from 'react'
import { ShockingSales } from '../../data'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
//responsive
import { mobile } from '../../responsive'

const ShockingSale = () => {
    return (
     <Container>
      <HeaderContainer>
         <h3>TOP PRODUCTS</h3>
      </HeaderContainer>
      <Carousel itemsToShow={6} className = 'carousel-sale' >
        {ShockingSales.map((doc,index) => (
            <ItemContainer key = {index}>
                <img src ={doc.image} alt = {doc.name} />
                <span>{doc.name}</span>
            </ItemContainer>
        ))}
      </Carousel>
    </Container>
    )
}

export default ShockingSale
const ItemContainer = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;
  img {
     width: 100%;
 };
 > span {
     font-weight: 700;
     font-size: 19px;
 }
`
const Container = styled.div`
 background-color: white;
 margin-top: 30px;
 ${mobile({display : "none"})}
`
    
const HeaderContainer = styled.div`
  padding : 20px;
  color : #ff5521;
  border-bottom: 1px solid #e2e0e0;
`

