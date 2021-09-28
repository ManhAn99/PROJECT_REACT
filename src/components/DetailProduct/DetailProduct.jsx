import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../responsive'
import { useGlobalState } from '../../context/GlobalState'
import StarIcon from '@mui/icons-material/Star';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #efebebcc;
  display : flex;
  align-items : center;
  justify-content : center;
  z-index : 100
`
const Wrapper = styled.div`
 background-color : white;
 width : 90%;
 height : 90%;
 display : flex;
 justify-content : space-between;
 ${mobile({flexDirection : 'column'})}
`
const ImageContainer = styled.div`
 flex : 1;
 ${mobile({height : '40vh'})}
`
const Image = styled.img`
 width : 100%;
 height : 100%;
 object-fit : cover
`
const InfoContainer = styled.div`
 flex : 1;
 padding : 50px;
 display : flex;
 flex-direction : column;
 justify-content : space-between;
 ${mobile({padding : '10px 20px'})};
 
 
`
const TextInfo = styled.div`
${mobile({display : 'flex', justifyContent : 'space-between', alignItems : 'center'})}
`
const Info = styled.div`
`
const Title = styled.h1`
 font-size : 50px;
 ${mobile({fontSize : '30px'})}
`
const Desc = styled.p`
font-size : 18px;
font-weight : 600;
color :#4D5058;
${mobile({margin : '10px 0px', fontSize : '15px'})}
`
const Price = styled.p`
 margin : 25px 0px;
 font-size : 24px;
 font-weight : 600;
 ${mobile({margin : '0', fontSize : '18px'})}
`
const CategoryContainer = styled.div`
${mobile({margin : '10px 0px', display : 'flex',justifyContent : 'space-between',alignItems : 'center'})}
`
const Category = styled.h3`
 margin : 25px 0px;
 ${mobile({margin : '0px', fontSize : '18px'})}
`
const ButtonContainer = styled.div`
 display : flex;
 ${mobile({justifyContent : 'space-between'})}
 
`
const Button = styled.button`
 cursor : pointer;
 padding : 10px 30px;
 background-color : ${props => props.active === 'add' ? 'black' : 'white'};
 color : ${props => props.active === 'add' ? 'white' : 'black'};
 border : ${props => props.active === 'add' ? 'none' : '1px solid black'};
 margin-left : ${props => props.active === 'add' ? '0px' : '20px'};
 font-weight : 600;
 ${mobile({padding : '10px 20px', fontSize : '14px'})}

`
const Vote = styled.div``
const votes = [1,2,3,4,5]
const DetailProduct = ({detailProduct}) => {
   const {hideDetailProduct,addProductToCart} = useGlobalState()

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src = {detailProduct.media.source} />
                </ImageContainer>

                <InfoContainer>
                    <Info>
                      <TextInfo>
                        <Title>{detailProduct.name}</Title>
                        <Price>{detailProduct.price.formatted_with_code}</Price>
                      </TextInfo>
                      <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum natus nisi corrupti sapiente libero odit voluptatum, culpa ipsam laudantium cupiditate. Vero similique laudantium fugiat inventore tempore quo aspernatur eaque itaque.</Desc>
                     <CategoryContainer>
                       <Category><b>Category : </b>{detailProduct.categories.map(category => (
                          category.name
                        ))}</Category>
                        <Vote>
                      {votes.map(vote => (
                          < StarIcon style = {{color : 'yellow'}} />
                       ))}
                      </Vote>
                     </CategoryContainer>
                    </Info>
                    <ButtonContainer>
                        <Button active = 'add' onClick = {() => addProductToCart(detailProduct)} >ADD TO CART</Button>
                        <Button active = 'back' onClick = {hideDetailProduct} >BACK TO HOME</Button>
                    </ButtonContainer>
                    
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default DetailProduct

