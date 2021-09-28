import React from 'react'
import styled from 'styled-components'
import Product from './Product/Product'
import SelectProduct from '../SelectProduct/SelectProduct'
import { useGlobalState } from '../../context/GlobalState'

const Container = styled.div`
 grid-gap : 2rem;
 display : flex;
 flex-wrap : wrap;
 margin-top : 20px;
 justify-content : center;
`

const Products = () => {
    const {data} = useGlobalState()
    const {TypeProduct} = data
    return (
        <Container id = {1}>
           <SelectProduct />
            {TypeProduct.map(product => (
                <Product product = {product} key = {product.id} />
            ))}
        </Container>
    )
}

export default Products
