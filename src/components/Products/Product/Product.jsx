import React from 'react'
import styled from 'styled-components'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useGlobalState } from '../../../context/GlobalState';
import StarIcon from '@mui/icons-material/Star';
import {mobile} from '../../../responsive'


const Container = styled.div`
 width : 300px;
 height : 55vh;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 transition : all 0.5s ease;
 &:hover{
  transform : scale(1.1)
 };
 ${mobile({width : '85%',height : '65vh'})}
`
const ImageContainer = styled.div`
 width : 100%;
 height : 65%
`
const Image = styled.img`
 width : 100%;
 height : 100%;
 object-fit : cover
`
const InfoProduct = styled.div`
 display : flex;
 flex-direction : column;
 
`
const InfoContainer = styled.div`
 display : flex;
 padding : 15px 10px;
 justify-content : space-between;
 align-items : center
`
const Title = styled.h2`
`
const Price = styled.p`
 margin : 10px 0
`
const ButtonProduct = styled.div`
 display : flex;
 justify-content : space-between;
 flex-direction : column;
 cursor : pointer;
 transition : 0.8s;


`
const ButtonContainer = styled.div`
 &:hover{
    color : blue
}
`
const ButtonDetail = styled.div`
 margin : 15px 0px;
 &:hover{
    color : blue
}
`
const Vote = styled.div`

`

const Product = ({product}) => {
    const {getDetailProduct,addProductToCart} = useGlobalState()
    const votes = [0,1,2,3,4,5]
    return (
        <Container>
            <ImageContainer>
                <Image src = {product.media.source} />
            </ImageContainer>
            <InfoContainer>
                <InfoProduct>
                    <Title>{product.name}</Title>
                    <Price>{product.price.formatted_with_code}</Price>
                    <Vote>
                      {votes.map(vote => (
                          < StarIcon style = {{color : 'yellow'}} />
                      ))}
                      </Vote>
                </InfoProduct>
                <ButtonProduct>
                  <ButtonContainer>
                      <AddShoppingCartOutlinedIcon onClick = {() => addProductToCart(product)}  />
                 </ButtonContainer>
                  <ButtonDetail onClick = {() => getDetailProduct(product)}
                    ><MoreHorizOutlinedIcon />
                  </ButtonDetail>
                </ButtonProduct>
            </InfoContainer>
        </Container>
    )
}

export default Product
