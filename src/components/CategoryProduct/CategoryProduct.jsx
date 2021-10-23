import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//actions
import { getFilterProduct } from '../../redux/product/product.action';
import styled from 'styled-components'
//components
import FilterCard from '../FilterCard/FilterCard';
import TopFilter from '../TopFilter/TopFilter';

const  useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


const CategoryProduct = () => {
    const {products,filterProduct} = useSelector(state => state.productData)
    const dispatch = useDispatch()
    let query = useQuery();
    const type = query.get('type')
    const filterProducts = products.filter(product => product.category === type)

    useEffect(() => {
      dispatch(getFilterProduct(filterProducts))
    }, [])
    
   if(!filterProduct) return

    return (
        <Container>
            <TopFilter />
            <BodyContainer>
                {filterProduct.map(product => (
                    <FilterCard key = {product.id} product = {product} />
                ))}
            </BodyContainer>
        </Container>
    )
}

export default CategoryProduct
const Container = styled.div`
 padding-top: 10px;
 min-height : 100vh
`

const BodyContainer = styled.div`
 display : flex;
 flex-wrap : wrap;
 margin-left : -10px
`
