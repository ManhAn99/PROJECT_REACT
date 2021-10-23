import React, {useState, useEffect} from 'react'
import { SliderData, TypeData } from '../../data'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageTop from '../../assets/top.jpg'
import Imagebottom from '../../assets/bottom.jpg'
import styled from 'styled-components'
//responsive
import { mobile } from '../../responsive';

const Carousel = () => {

    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
      const setTime = setTimeout(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      },2000)
      return () => clearTimeout(setTime)
    },[current])
    
    return (
      <AllContainer>
       <All>
        <Container current = {current} >
            <ArrowBackIosIcon className = 'left-arrow'  onClick={prevSlide}/>
            <ArrowForwardIosIcon className = 'right-arrow'  onClick={nextSlide} />
            {
                SliderData.map((slide, index) => (
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                  >
                    {index === current && (
                      <img src={slide.image} alt='travel image' className='image' />
                    )}
                  </div>
                ))
            }
        </Container>
        <RightContainer>
              <div className = 'top'>
                <img src= {ImageTop} alt="imagetop" />
              </div>
              <div className="bottom">
              <img src= {Imagebottom} alt="Imagebottom" /> 
              </div>
        </RightContainer>
        </All> 

        <ListContainer>
            {
              TypeData.map((data, index) => (
                 <div key= {index}>
                  <img src = {data.image} alt = {data.name} />
                  <span>{data.name}</span>
                 </div>
              ))
            }
        </ListContainer>
       </AllContainer>
    )
}

export default Carousel
const AllContainer = styled.div`
 padding : 0 90px;
 ${mobile({padding : "0 10px"})}
`
const All = styled.div`
 display : flex;
 height:  235px;
 ${mobile({flexDirection : "column",height : 'auto'})}
`
const Container = styled.div`
 display: flex;
 align-items: center;
 position: relative;
 overflow: hidden;
 height : 100%;
 flex : 2;
  > img {
  width : 100%;
  height: 100%;
 }
 .right-arrow {
     position: absolute;
     top : 50%;
     right : 12px;
     z-index : 1;
     color : white;
     cursor : pointer
 }
 .left-arrow {
     position: absolute;
     top : 50%;
     left : 12px;
     z-index : 1;
     color : white;
     cursor : pointer
 }
 .slide {
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
}
${mobile({display : "none"})}
`

const RightContainer = styled.div`
 flex : 1;
 margin-left : 7px;
 display : flex;
 flex-direction : column;
 justify-content: space-between;

  > div {
   
     width: 100%;
     height : 48%;
     
      > img {
     width : 100%;
     object-fit : cover;
     height: 100%;
     }
 }

`
const ListContainer = styled.div`
 display : flex;
 margin-top : 30px;
 justify-content: space-around;
 > div {
   flex : 1;
   display : flex;
   flex-direction : column;
   align-items: center;
   justify-content: center;
   cursor : pointer;
   transition: 0.5s;
   &:hover {
     transform: translateY(-5px);
   };
    > img {
      width : 45px;
      height : 45px;
      object-fit : cover;
      
    };
    span {
      display:-webkit-box;
      text-align : center;
      margin-top : 8px;
      font-size : 15px;
      font-weight : 400;
      flex : 1
    }
   
 }
 ${mobile({display : "none"})}
`