import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard/ProductCard'
//responsive
import { mobile } from '../../responsive'

const ProductList = () => {
    const {products} = useSelector(state => state.productData)
    const [visible,setVisible] = useState(12)
    const length = products.length
  
    const handleClickMoreItem = () => {
        setVisible(visible >= length ? length : (visible + 12))
    }
    if(!products) return null
    return (
        <Container>
            <TopContainer>
                <WrapperTop>
                  <h3>DAILY DISCOVER</h3>
                </WrapperTop>
            </TopContainer>
            <ProductContainer>
                {products.slice(0,visible).map(product => (
                    <ProductCard key = {product.id} product = {product} />
                ))}
            </ProductContainer>
                {!(visible >= length) && (
                    <button onClick = {handleClickMoreItem}>See More</button>      
                )}
        </Container>
    )
}

export default ProductList
const Container = styled.div`
 margin-top: 30px;
 > button {
     margin-top: 40px ;
     display : block;
     margin : 40px auto 0;
     padding : 10px 0 ;
     width : 390px;
     border-radius: 3px;
     background-color: white;
     border : 1px solid #e9e9e9;
     color : #686666;
     display: flex;
     justify-content: center;
     font-size: 16px;
     font-weight: 700;
     cursor : pointer;
     transition : 0.6s;
     &:hover {
         color : #e2850a
     }
 }
`
const TopContainer = styled.div`
 background-color: white;

`
const WrapperTop = styled.div`
 width : 225px;
 padding : 15px 46px;
 border-bottom: 4px solid #ee4d2d;
 > h3 {
     color :#ee4d2d
 }
`
const ProductContainer = styled.div`

 display : flex;
 flex-wrap : wrap;
 margin-left: -10px;
 ${mobile({padding : "0 10px"})}
`
