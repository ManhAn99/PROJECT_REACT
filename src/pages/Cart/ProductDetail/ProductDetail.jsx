import React from 'react'
import { Divider } from '@mui/material'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useGlobalState } from '../../../context/GlobalState';
import {mobile} from '../../../responsive'

const Container = styled.div`
 display : flex;
 margin : 15px 0;
 ${mobile({flexDirection : 'column'})}
`
const LeftContainer = styled.div`
 flex : 1;
 display : flex
`
const ImageContainer = styled.div`
 width : 200px;
 height : 200px
`
const Image = styled.img`
 height : 100%;
 width : 100%;
 object-fit : cover
`
const InfoContainer = styled.div`
 display : flex;
 align-items : start;
 justify-content  : center;
 flex-direction : column;
 margin-left : 40px
`
const NameProduct = styled.span`
  font-size : 20px
`
const PriceProduct = styled.span`
margin : 10px 0
`

const RightContainer = styled.div`
 flex : 1;
 display : flex;
 align-items : center;
 justify-content : space-between;
 ${mobile({justifyContent : 'center', marginTop : '10px'})}
`
const AmountContainer = styled.div`
 display : flex;
 border : 0.5px solid lightgray;
 align-items : center;
 width : 100px;
 color : black;
 padding : 0px
`
const ButtonAmount = styled.div`
 flex : 1;
 display : flex;
 align-items : center;
 justify-content : center;
 cursor : pointer;

 
`
const AmountText = styled.span`
 flex : 2;
 display : flex;
 align-items : center;
 justify-content : center;
 border-right : 0.5px solid lightgray;
 border-left : 0.5px solid lightgray;
 height : 30px;
 font-weight : 600
 
`
const DeleteButton = styled.button`
 cursor : pointer;
 margin-right : 10px;
 font-size : 30px;
 border : none;
 background-color : transparent;
 transition : 0.7s;

 &:hover{
     background-color : #237de8;
     color : white
 }
 ${mobile({marginLeft : '10px'})}
`


const ProductDetail = ({item}) => {
    const {increaseCountProduct,decreaseCountProduct,removeProduct} = useGlobalState()
    
    return (
       <> 
        <Container>
            <LeftContainer>
                <ImageContainer>
                    <Image src = {item.media.source} alt = 'name' />
                </ImageContainer>
                <InfoContainer>
                    <NameProduct><b>Name : </b>{item.name}</NameProduct>
                    <PriceProduct><b>Price : </b>{(item.price.raw * item.count).toString()} VND</PriceProduct>
                </InfoContainer>
            </LeftContainer>
            <RightContainer>
                <AmountContainer>
                    <ButtonAmount onClick = {() => increaseCountProduct(item.id)}><AddIcon /></ButtonAmount>
                    <AmountText>{item.count}</AmountText>
                    <ButtonAmount onClick = {() => decreaseCountProduct(item.id)} ><RemoveIcon /></ButtonAmount>
                </AmountContainer>
               <DeleteButton> <DeleteOutlineIcon onClick = {() => removeProduct(item.id)} /></DeleteButton>
            </RightContainer>
        </Container>
        <Divider />
    
    </>
    )
}

export default ProductDetail
