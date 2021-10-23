import React from 'react'
import styled from 'styled-components'
//components
import Footer from '../components/Footer/Footer'
import HeaderCart from '../components/HeaderCart/HeaderCart'
//responsive
import { mobile } from '../responsive'

const CartLayout = ({children}) => {
    return (
        <Container>
             <HeaderCart />
             <BodyContainer>
                {children}
             </BodyContainer>
             <Footer />
        </Container>
    )
}

export default CartLayout
const Container = styled.div`
min-height: 100vh;
background-color: #f5f5f5;
position: relative;
`
const BodyContainer = styled.div`
 min-height: calc(100vh - 120px);
 border-bottom : 4px solid #e74f13;
 margin-top : 120px;
 padding : 0 90px;
 padding-top : 15px;
 ${mobile({padding : '10px'})}
`