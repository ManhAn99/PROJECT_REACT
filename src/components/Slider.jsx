import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import {sliderItems} from '../data'
import { mobile } from '../responsive';
const Container = styled.div`
 width : 100%;
 height : 100vh;
 display : flex;
 overflow : hidden;
 position : relative;
 margin-top : 20px;
 ${mobile({display : 'none'})}

`
const Arrow = styled.div`
  width : 50px;
  height : 50px;
  background-color : #fff7f7;
  border-radius : 50%;
  display : flex;
  align-items : center;
  justify-content : center;
  position : absolute;
  top : 0;
  bottom : 0;
  margin : auto;
  left : ${props => props.direction === 'left' && "10px"};
  right : ${props => props.direction === 'right' && "10px"};
  cursor : pointer;
  opacity : 0.5;
  z-index : 3
`

const Wrapper = styled.div`
  height : 100%;
  display : flex;
  transform : translateX(${props => props.slideIndex *  -100}vw);
  transition : all 1.5s ease
  
`

const Slide = styled.div`
   display : flex;
   align-items : center;
   width : 100vw;
   height : 100vh;
   background-color : #${props => props.bg}
   
`
const Image = styled.img`
    height : 100%;
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    background-size : cover

`
const ImageContainer = styled.div`
   flex : 1;
   height : 100%;
   position : relative
`
const InfoContainer = styled.div`
  flex : 1;
  padding: 50px
`
const Title = styled.h1`
  font-size : 70px
`
const Desc = styled.p`
  margin : 50px 0px;
  font-size : 20px;
  font-weight : 500;
  letter-spacing : 3px
`
const Button = styled.button`
  padding : 10px;
  font-size : 20px;
  background-color : transparent;
  cursor : pointer
`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick = (direction) => {

      if(direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      }
      else{
        setSlideIndex(slideIndex <  2 ?  slideIndex + 1 : 0)
      }
    }
    return (
        <Container>
             <Arrow direction = 'left' onClick = {() => handleClick('left')}>
                <ArrowLeftOutlinedIcon />
             </Arrow>
             <Wrapper slideIndex = {slideIndex}>
                 {sliderItems.map(item => (
                     <Slide key = {item.id} bg = {item.bg}>
                     <ImageContainer>
                       <Image src= {item.img} />
                     </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                   </Slide>
                 ))}
                
             </Wrapper>
             <Arrow direction = 'right' onClick = {() => handleClick('right')}>
                <ArrowRightOutlinedIcon />
             </Arrow>
        </Container>
    )
}

export default Slider
