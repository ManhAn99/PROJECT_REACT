import React from 'react'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import ImageBrand from '../../assets/logobrand.png'
import SignUp from '../../components/SignUp/SignUp'
import Footer from '../../components/Footer/Footer'
//responsive
import { mobile } from '../../responsive'

import styled from 'styled-components'
const SignUpPage = () => {
    return (
        <Container>
            <HeaderLogin />
            <Wrapper>     
              <WrapperLeft>
                  <InfoContainer>
                      <ImageContainer>
                          <Image src=  {ImageBrand} />
                      </ImageContainer>
                     <InfoBottom>
                       <NameBrand>
                         Shopee 2.0
                      </NameBrand>
                    </InfoBottom>
                  </InfoContainer>
              </WrapperLeft>
              <WrapperRight>
               <SignUp /> 
              </WrapperRight>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default SignUpPage
const Container = styled.div``
const Wrapper = styled.div`
 min-height: 100vh;
 background-color: #ff5722;
 display : flex;
 color : white;
 ${mobile({flexDirection : "column",padding : '10px'})}
`
const WrapperLeft = styled.div`
 flex: 1.5;
 display: flex;

 justify-content: center;

`
const InfoContainer = styled.div`
 margin-top: 50px;
 width: 100%;
 flex-direction: column;
 position: relative;
 max-width: 300px;
`
const ImageContainer = styled.div`
  width: 100%;
`
const Image = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`
const NameBrand = styled.h1`
font-size:50px;
text-align : center;
padding-left: 40px;

`

const InfoBottom = styled.div`
 position: absolute;
 top : 280px
`
const WrapperRight = styled.div`
 flex : 1;
 margin-top: 60px;
 ${mobile({display : "flex",justifyContent : 'center'})}
`
