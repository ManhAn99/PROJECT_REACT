import React from 'react'
import styled from 'styled-components'
import { useGlobalState } from '../../context/GlobalState'
import {widerMobile} from '../../responsive'
const Container = styled.div`
 width : 85%;
 display : flex;
 justify-content : space-between;
 ${widerMobile({display : 'none'})}
`
const SelectContainer = styled.select`
 
 padding : 10px 15px;
 border : 1px solid #e7dedd;
 
`
const SelectOption = styled.option``

const SelectProduct = () => {
    const {sortedPrice,typeProduct,} = useGlobalState()
    const handleSort = (value) => {
        sortedPrice(value)
    }
    const handleCategory = (value) => {
        typeProduct(value)
    }
    return (
        <Container>
             <SelectContainer onChange = {(e) => handleCategory(e.target.value)} >
                    <SelectOption disabled selected>Category</SelectOption>
                    <SelectOption value = 'all' >All</SelectOption>
                    <SelectOption value = 'tea' >Tea</SelectOption>
                    <SelectOption value = 'cake' >Cake</SelectOption>
                    <SelectOption  value = 'fruit'>Fruit</SelectOption>
                </SelectContainer>
                <SelectContainer onChange = {(e) => handleSort(e.target.value)}>
                    <SelectOption disabled selected>Price</SelectOption>
                    <SelectOption value = 'newest' >Newest</SelectOption>
                    <SelectOption value = 'highest' >Heighest</SelectOption>
                    <SelectOption value = 'lowest' >Lowest</SelectOption>
                </SelectContainer>
        </Container>
    )
}

export default SelectProduct
