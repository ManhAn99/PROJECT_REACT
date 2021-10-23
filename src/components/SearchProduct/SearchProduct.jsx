import React,{useEffect} from 'react'
import styled from 'styled-components'
import {useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//actions
import { getFilterProduct } from '../../redux/product/product.action';
//components
import FilterCard from '../FilterCard/FilterCard';
import TopFilter from '../TopFilter/TopFilter';
//images
import NoResult from '../../assets/noresult.png'


const  useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SearchProduct = () => {
    const {products,filterProduct} = useSelector(state => state.productData)

    const dispatch = useDispatch()
    let query = useQuery();
    const name = query.get('name')
    const filterProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))

    useEffect(() => {
      dispatch(getFilterProduct(filterProducts))
    }, [name])
   
    if(filterProduct.length === 0) {
        return (
            <img 
            src= {NoResult} 
            alt="noresult" 
            style = {{width : '400px', objectFit : 'cover',margin : 'auto', display : 'block'}} />
        )
    }
 
   
    return (
        <Container>
            <TopFilter searchName = {name} />
            <BodyContainer>
                {filterProduct.map(product => (
                    <FilterCard key = {product.id} product = {product} />
                ))}
            </BodyContainer>
        </Container>
    )
}

export default SearchProduct
const Container = styled.div`
 padding-top: 10px;
 min-height : 100vh
`

const BodyContainer = styled.div`
 display : flex;
 flex-wrap : wrap;
 margin-left : -10px
`