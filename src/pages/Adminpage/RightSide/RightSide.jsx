import React  from 'react'
import styled from 'styled-components'
import ProductAdmin from './ProductAdmin/ProductAdmin'
import {useSelector} from 'react-redux'
const RightSide = ({setToggle}) => {
    const {products} = useSelector(state => state.productData)
    const total = products.length
    return (
        <Container>
            <button onClick = {() => setToggle(true)}>Add product</button>
            <h2>Total : {total}</h2>
            {products && (
                <ListProduct>
                    {products.map(product => (
                        <ProductAdmin product = {product} key = {product.id} />
                    ))}
                </ListProduct>
            )}
        </Container>
    )
}

export default RightSide
const Container = styled.div`
 flex : 6;
 min-height: calc(100vh - 84px);
 padding : 30px;

 > button {
     cursor : pointer;
     border : none;
     color : white;
     padding : 10px 15px;
     background-color:  #e74f13;
     font-size: 16px;
     margin-bottom: 20px;
    
 }
`
const ListProduct = styled.div`
 display: flex;
 flex-direction: column;
`