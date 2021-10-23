import React from 'react'
import styled from 'styled-components'
import gift1 from '../../assets/sale1.png'
import gift2 from '../../assets/sale2.png'
import gift3 from '../../assets/sale3.png'
//responsive
import { mobile } from '../../responsive'

const Gift = () => {
    return (
        <Container>
            <SubContainer>
                <img src={gift1} alt="" />
            </SubContainer>
            <SubContainer>
               <img src={gift2} alt="" />
            </SubContainer>
            <SubContainer>
               <img src={gift3} alt="" />
            </SubContainer>
        </Container>
    )
}

export default Gift

const Container = styled.div`
 display: flex;
 margin : 20px 0;
 margin-left: -15px;
 ${mobile({display : "none"})}
`
const SubContainer = styled.div`
  flex : 1;
  margin-left: 15px;
  
  img {
      width: 100%;
      object-fit: cover;
  }
`
