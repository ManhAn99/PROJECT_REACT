import React, {useState} from 'react'
import styled from 'styled-components'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import {useHistory} from 'react-router-dom'
//responsive
import { mobile } from '../../responsive';

const FilterCard = ({product}) => {
    const {id, name, rate,price,productImageURL} = product
    const [favorite,setFavorite] = useState(false)
    const history = useHistory()
    const handleShowProduct = () => {
        history.push(`/showProduct/${id}`)
    }
  
    return (   
        <Container >
            <img src = {productImageURL} alt = {name} onClick  = {handleShowProduct} />
             <BodyContainer>
                 <h3 onClick  = {handleShowProduct}>{name}</h3>
                 <ContentProduct>
                   <ShipProduct onClick  = {handleShowProduct}>
                      <span>₫ {price}</span>
                       <LocalShippingIcon className = 'truck' />
                   </ShipProduct>
                   <FavoriteProduct>
                       <FavoriteIcon 
                       style = {{color : `${favorite ? '#f53d2f' : '#b9b9b9'}`}}
                       className = 'heart' 
                       onClick = {() => setFavorite(!favorite)}
                       />
                       <RateContainer>
                       {[1,2,3,4,5].map(r => (
                        <span
                          key = {r}
                         className = {`${rate >= r ? 'yellow' : 'gray'} `}
                        
                        ><StarIcon className = 'star'/></span>
                        ))}
                       </RateContainer>
                   </FavoriteProduct>
                 </ContentProduct>
             </BodyContainer>
         </Container>
   
    )
}

export default FilterCard
const Container = styled.div`
 width : calc(100%/5 - 10px);
 overflow: hidden;
 margin-left: 10px;
 margin-bottom: 10px;
 background-color: white;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 display : flex;
 flex-direction : column;
 transition : 0.4s;
 cursor : pointer;
 &:hover {
     transform: translateY(-5px)
 }
 > img {
     width : 100%;
     object-fit : cover;
     height : 230px
 }
 ${mobile({width : "calc(100%/2 - 10px)"})}
`
const BodyContainer = styled.div`
 padding : 8px;
 min-height: 138px;
 display : flex;
 flex-direction: column;
 flex : 1;
 > h3 {
     flex : 1;
     color : #8f8f8f
 }
`
const ContentProduct = styled.div`
`
const ShipProduct = styled.div`
 display : flex;
 justify-content: space-between;
 align-content: center;
 padding : 5px 0;
 .truck {
     color : rgb(0, 191, 165)
 }
 > span {
     color : #ff5521;
     font-size : 20px;
     font-weight: 700;
 }
`
const FavoriteProduct = styled.div`
  display : flex;
 justify-content: space-between;
 align-content: center;
 .heart {
     font-size: 15px;
 }
`
const RateContainer = styled.div`
   .yellow {
      color : yellow
  }
  .gray {
      color : gray
  }
  .star {
      font-size: 15px;
  }

`
