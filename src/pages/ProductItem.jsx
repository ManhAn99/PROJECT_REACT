import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { mobile } from '../responsive'
const Container = styled.div``
const Wrapper = styled.div`
 padding : 50px;
 display : flex;
 ${mobile({padding : '10px', flexDirection : 'column'})}
`
const ImageContainer =styled.div`
 flex :1
`
const Image = styled.img`
 width : 100%;
 height :90vh;
 object-fit : cover;
 ${mobile({height : '40vh'})}
`
const InfoContainer = styled.div`
 flex :1;
 padding : 0px 50px;
 ${mobile({padding : '10px'})}
`
const Title = styled.h1`
 font-weight : 200
`
const Desc = styled.p`
 margin : 20px 0px
`
const Price = styled.span`
 font-weigth : 100;
 font-size : 24px
`
const FilterContainer = styled.div`
 width : 50%;
 display : flex;
 justify-content : space-between;
 margin : 30px 0px;
 ${mobile({width : '100%'})}
`
const FilterTitle = styled.span`
 font-size : 20px;
 font-weight : 200
`
const Filter = styled.div`
 display : flex;
 align-items : center;
 justify-content : center
`
const FilterColor = styled.div`
 width : 20px;
 height : 20px;
 border-radius : 50%;
 background-color: ${props => props.color};
 margin : 0px 5px;
 cursor : pointer
`
const FilterSize = styled.select`
 margin-left : 10px;
 padding : 5px
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
 display : flex;
 align-items : center;
 width : 50%;
 justify-content : space-between;
 ${mobile({width : '100%'})}
`
const AmountContainer = styled.div`
 display : flex;
 align-items : center;
 font-weight : 700
`
const Amount = styled.span`
  width : 30px;
  height : 30px;
  border-radius : 10px;
  border : 1px solid teal;
  display : flex;
  align-items : center;
  justify-content : center;
  margin : 0 5px
`
const Button = styled.button`
 padding : 15px;
 border : 2px solid teal;
 background-color : white;
 cursor : pointer;
 font-weight : 500;

 &:hover{
     background-color : whitesmoke
 }
` 

const ProductItem = () => {
    return (
        <Container>
            <Navbar />
            <Anouncement  />
            <Wrapper>
              <ImageContainer>
                  <Image src = 'https://images.squarespace-cdn.com/content/v1/548ec3bee4b068057bfb6db7/1555524366324-VWFSC5FC2C2D9IP7XCP7/image-asset.jpeg?format=1500w'/>
              </ImageContainer>
              <InfoContainer>
                  <Title>Black Bag</Title>
                  <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusantium enim fugit quia nulla dolore ipsum quasi deleniti quidem possimus, quae nisi placeat alias tempora non labore perspiciatis assumenda! Id.</Desc>
                  <Price>$20</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color = 'black' />
                          <FilterColor color = 'darkblue' />
                          <FilterColor color = 'gray' />
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>X</FilterSizeOption>
                              <FilterSizeOption>SM</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              <FilterSizeOption>XXL</FilterSizeOption>
                          </FilterSize>
                      </Filter>
                  </FilterContainer>

                  <AddContainer>
                      <AmountContainer>
                          <RemoveIcon/>
                          <Amount>1</Amount>
                          <AddIcon />
                      </AmountContainer>
                      <Button>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductItem
