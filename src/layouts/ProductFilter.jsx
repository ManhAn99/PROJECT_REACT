import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import HeaderMain from '../components/HeaderMain/HeaderMain'
//responsive
import { mobile } from '../responsive'

const ProductFilter = ({children}) => {
    const ref = useRef(null)
    useEffect(() => {
       ref.current.scrollIntoView({
        behavior : 'smooth'
    })
    },[])
    return (
        <Container>
            <div ref = {ref} className = 'ref'></div>
            <HeaderMain />
            <BodyContainer>
                <Wrapper>
                 {children}
                </Wrapper>
            </BodyContainer>
        </Container>
    )
}

export default ProductFilter
const Container = styled.div`
 position : relative;
 .ref {
     position: absolute;
     top : 0
 }
`
const BodyContainer = styled.div`
  margin-top: 120px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 120px);
`
const Wrapper = styled.div`
 padding : 0 90px;
 padding-bottom : 30px;
 ${mobile({padding : "0 10px"})}
`