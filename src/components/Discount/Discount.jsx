import React from 'react'
import styled from 'styled-components'
import { SaleData } from '../../data'
//responsive
import { mobile } from '../../responsive'

const Discount = () => {
    return (
        <Container>
            <TopContainer>
               <img src="https://cf.shopee.com.my/file/9690c53fb75db571cd58852f27b768a2_xxhdpi" alt="logo" />
            </TopContainer>
            <BottomContainer>
               <Wrapper> 
               <img src="https://cf.shopee.com.my/file/5e7d031649e162ee1b4fa73bc686bb43" alt="lgog" />
               <ContentBottom>
                  <SubContainer>
                     <TitleContainer type = 'brand'>
                         <h3>TOP BRAND DEAL</h3>
                         <span>See More {'>'}</span>
                     </TitleContainer>
                     <SaleContainer>
                         {
                             [0,1,2].map((doc,index) => (
                               <ItemSaleContainer  key = {index}>
                                     <ImageContainer>
                                         <img src = {SaleData[doc].image} alt = {index} />
                                     </ImageContainer>
                                     <span>{SaleData[doc].name}</span>
                                </ItemSaleContainer>
                             ))
                         }
                     </SaleContainer>
                  </SubContainer>
                  <SubContainer>
                   <TitleContainer>
                        <h3>THANK YOU SALE</h3>
                        <span>See More {'>'}</span>
                     </TitleContainer>
                     <SaleContainer>
                         {
                             [3,4,5].map((doc,index) => (
                               <ItemSaleContainer  key = {index}>
                                     <ImageContainer>
                                         <img src = {SaleData[doc].image} alt = {index} />
                                     </ImageContainer>
                                     <span>{SaleData[doc].name}</span>
                                </ItemSaleContainer>
                             ))
                         }
                     </SaleContainer>
                  </SubContainer>
               </ContentBottom>
             </Wrapper>
            </BottomContainer>
        </Container>
    )
}

export default Discount
const Container = styled.div`
 padding : 20px 0px;
 background-color: #f5f5f5;
 ${mobile({display : "none"})}

`
const TopContainer= styled.div`
 width: 100%;
 > img {
     width : 100%;
     object-fit: cover;
 }
`
    
const BottomContainer = styled.div`
 width : 100%;
 margin-top: 15px;
  > img {
      width : 100%;
      object-fit : cover
  }
`
const Wrapper = styled.div`
 overflow: hidden;
`
const ContentBottom = styled.div`
 min-height : 310px;
 background-color: #d0011b;
 margin-top : -10px;
 padding : 0 15px 15px;
 display : flex;
 justify-content: space-between;
 margin-left: -15px;
`
const SubContainer = styled.div`
 flex : 1;
 margin-left: 15px;
 padding-top: 20px;
 cursor: pointer;
`
const TitleContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding : 0 15px;
  margin-bottom: 10px;
  color : ${props => props.type === 'brand' && '#d9d9d9'};
 > h3 {
     font-size: 18px;
    
 }
 > span {
     font-size: 14px;
     font-weight: 700;
     
 }
`
const SaleContainer = styled.div`
 display : flex;
 justify-content: space-between;
`
const ItemSaleContainer = styled.div`
 display: flex;
 flex-direction: column;
 flex : 1;
 margin-left: 1px;
 background-color : white;
 align-items : center;
 transition: 0.5s;
  > span {
      padding-bottom: 20px ;
      color : #d0011b;  
      font-size : 20px;
      font-weight: 700;
  };
  &:hover {
     transform: translateY(-10px);
  }
`
const ImageContainer =styled.div`
  > img {
      width : 100%;
  }
  
`