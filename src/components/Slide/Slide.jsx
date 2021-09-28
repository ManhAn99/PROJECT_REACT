import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../../data'
import {mobile} from '../../responsive'
const Container = styled.div`
 width : 100%;
 height : 100vh;
 display : flex;
 position : relative;
 overflow : hidden;
 ${mobile({display : 'none'})}
 
`
const Arrow = styled.div`
 width : 50px;
 height : 50px;
 border-radius : 50%;
 background-color : #fff7f7;
 display : flex;
 align-items : center;
 justify-content : center;
 position : absolute;
 top :0;
 bottom : 0;
 margin : auto;
 cursor : pointer;
 z-index : 4;
 opacity : 0.6;
 left : ${props => props.position === 'left' && '10px'};
 right : ${props => props.position === 'right' && '10px'};
`
const Wrapper = styled.div`
 display : flex;
 height : 100%;
 transform : translateX(${props => props.slideIndex * -100}vw);
 transition : 1.5s
`
const SlideContainer = styled.div`
 display : flex;
 width : 100vw;
 justify-content : space-between;
 align-items : center

`
const ImageContainer = styled.div`
 flex : 1
`
const Image = styled.img`
 width : 100%;
 height : 100%;
 object-fit : cover
`
const InfoContainer = styled.div`
 flex : 1;
 padding : 50px;
`
const SlideTitle = styled.h1`
 color : black;
 font-size : 70px;
 

`
const Desc = styled.p`
 color : black;
 margin : 50px 0;
 font-size : 22px;
 letter-spacing : 2px
`
const Button = styled.button`
 border : 1px solid black;
 background-color : white;
 padding : 15px 20px;
 cursor : pointer;
 font-weight : 600;
 font-size : 18px
`
const Slide = () => {
    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick = (direction) => {
      if(direction === 'left') setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
      if(direction === 'right') setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
    return (
        <Container>
            <Arrow position = 'left' onClick = {() => handleClick('left')}>
              <ArrowLeftOutlinedIcon style = {{color : 'black'}}/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
               {sliderItems.map(item => (
                 <SlideContainer key = {item.id} color = {item.bg}>
                   <ImageContainer>
                       <Image src = {item.img} />
                   </ImageContainer>
                   <InfoContainer>
                       <SlideTitle>{item.title}</SlideTitle>
                       <Desc>{item.desc}</Desc>
                       <a href = '#1'><Button>SHOP NOW</Button></a>
                   </InfoContainer>
               </SlideContainer>
               ))}
            </Wrapper>
            <Arrow position = 'right' onClick = {() => handleClick('right')}>
              <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slide
