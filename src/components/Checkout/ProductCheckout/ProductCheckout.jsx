import React from 'react'
import styled from 'styled-components'
import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
//responsive
import { mobile } from '../../../responsive';

const ProductCheckout = ({product}) => {
    const {price,name,productImageURL,count,category} = product
    return (
        <Container>
            <TopContainer>
                <StorefrontIcon className = 'store' />
                <h4>{category}.store</h4>
                <ForumIcon  className = 'message'/>
            </TopContainer>
            <BodyContainer>    
               <LeftContainer>   
                   <InfoContainer>
                   <img src={productImageURL} alt= {name} />
                       <h3>{name}</h3>
                    </InfoContainer>
                      <UnitPrice>
                         <h4> ₫ {price}</h4>
                         <h5>{'(Unit Price)'}</h5>
                      </UnitPrice>
                  
               </LeftContainer>

               <RightContainer>
                <ButtonContainer>
                    <div>
                        <div>x{count}</div>
                     </div>
                    </ButtonContainer>
                   <TotalPrice>
                       <h4> ₫ {price * count} </h4>
                       <h5>{'(Total Price)'}</h5>
                   </TotalPrice>
               </RightContainer>
            </BodyContainer>
        </Container>
    )
}

export default ProductCheckout

const Container = styled.div`
 background-color : white;
 margin : 15px 0
`
const TopContainer = styled.div`
 display : flex;
 align-items : center;
 padding : 15px 0;
 padding-left : 50px;
 border-bottom : 1px solid #ebebeb;
 > h4 {
     padding : 0 6px;
     font-size : 15px;
     color : gray
 }
 .store {
     color : gray
 }
 .message {
     color :#00bfa5;
 }
 .store, .message {
     font-size : 19px
 }
 ${mobile({padding :'15px'})}

`
const BodyContainer = styled.div`
padding : 25px 20px 25px 50px;
display : flex;
${mobile({padding :'15px',flexDirection : 'column'})}
`
const LeftContainer = styled.div`
 flex : 1;
 display : flex;
 justify-content: space-between;
 align-items : center;
 padding-right: 40px;
 ${mobile({padding :'0px'})}
`
const InfoContainer = styled.div`
display : flex;
align-items: center;
> h3 {
    padding : 0 30px
}
>img {
      width : 50px;
      height : 50px;
      object-fit : cover;
      margin-left: 30px;
      ${mobile({margin :'0px'})}
  }
`
const UnitPrice = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  > h5 {
      color : gray
  }
`
const ButtonContainer = styled.div`
display : flex;
  align-items: center;
  > div {
      width : 110px;
      display : flex;
      > div {
          flex : 1;
          display : flex;
          align-items: center;
          justify-content: center;
          font-size : 20px;
          color : gray;
          font-weight : 700;
          ${mobile({justifyContent :'flex-start'})}
      }
  }

` 
const RightContainer = styled.div`
width : 300px;
 display : flex;
 align-items: center;
 justify-content: center;
 ${mobile({justifyContent :'space-between',width : '100%',marginTop :'20px'})};

`
const TotalPrice = styled.div`
 display : flex;
  flex-direction : column;
  align-items: center;
  color :  #ee4d2d;
`
