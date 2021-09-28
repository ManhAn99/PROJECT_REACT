import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useGlobalState} from '../../context/GlobalState'
import { Link,useLocation } from 'react-router-dom';
import {mobile} from '../../responsive'
const Container = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  height : 60px;
  background-color : #297fe4;
  padding : 5px 20px;
  ${mobile({padding : '0 15px'})}
`
const Left = styled.div`
 flex : 1;
 
`
const Title = styled.h1`
 font-size : 28px;
 font-weight : 600;
 color : white;
 ${mobile({fontSize : '24px'})}
`
const Center = styled.div`
 flex : 1
`
const InputContainer = styled.div`
 display : flex;

 background-color : white;
 width : 250px;
 padding : 5px 0px;
 ${mobile({width : '200px'})}
`
const Input = styled.input`
 border: none;
 flex : 8;
 padding : 0px 15px;
 &:focus{
     outline : none
 };
 ${mobile({width : '100%'})}
 
`
const Right = styled.div`
 flex : 1;
 display : flex;
 align-items : center;
 justify-content : flex-end;
 cursor : pointer;

`
const SelectContainer = styled.select`
 margin : 0 7px;
 padding : 6px;
 border : none;
 ${mobile({display : 'none'})};

`
const SelectOption = styled.option``

const Navbar = () => {
    const {sortedPrice,typeProduct,searchProduct,data} = useGlobalState()
    const {cart} = data
    const count = cart.map(product => product.count).reduce((a,b) => (
        a += b
    ),0)
    const location = useLocation()
    const handleSort = (value) => {
        sortedPrice(value)
    }
    const handleCategory = (value) => {
        typeProduct(value)
    }
    const handleSearch =(value) => {
        searchProduct(value)
    }
   
    return (

        <Container>
           <Left>
             <Link to = '/' style = {{textDecoration : 'none'}}><Title>TA:KEIK</Title></Link> 
            </Left> 
      {
        location.pathname === '/' && (
            <>
             <Center>
                <InputContainer>
                 <Input placeholder = 'Search' onChange = {(e) => handleSearch(e.target.value)} />
                 <SearchOutlinedIcon style = {{flex : '1',color : 'lightgray'}} />
               </InputContainer>
              </Center>
       
                <Right>
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
                <Badge badgeContent={count} color="error">
                 <Link to ='/cart' style = {{textDecoration : 'none'}}>
                     <ShoppingCartOutlinedIcon  style = {{color : 'white'}} />
                  </Link>
              </Badge>
             </Right>
            </>
            )}
        </Container>
    )
}

export default Navbar
