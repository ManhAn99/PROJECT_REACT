import React, {useState} from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
//actions
import { getSimilarProduct } from '../../../redux/product/product.action';
//responsive
import { mobile } from '../../../responsive';

const ProductCard = ({product}) => {
    const {id,price,productImageURL,name,rate,category} = product
    const [visible,setVisible] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const mouseOver = () => {
        setVisible(true)
    }
    const mouseLeave = () => {
        setVisible(false)
    }
    
    const handleShowProduct = () => {
        history.push(`/showProduct/${id}`)
    }

    return (
        <Container 
        onMouseOver = {mouseOver}
        onMouseLeave = {mouseLeave}
        style = {{border  : `${visible ? '1px solid #ee4d2d' : 'none'}`}}
       
        >
            <img src= {productImageURL} alt = {name}  onClick = {handleShowProduct} />
            <BodyContainer onClick = {handleShowProduct}>
               <h3>{name}</h3>
              <InfoContainer> 
                <span className = 'price'> ₫ {price}</span>
               <RateContainer>
                 {[1,2,3,4,5].map(r => (
                    <span
                    key = {r}
                    className = {`${rate >= r ? 'yellow' : 'gray'}`}
                    ><StarIcon className = 'start'/></span>
                 ))}
               </RateContainer>
             </InfoContainer>
            </BodyContainer>
            {visible && (
                <BottomContainer>
                 <span onClick = {() => dispatch(getSimilarProduct(product))}>
                     <Link to = {`/similarProduct?type=${category}`}>
                       Find Similar
                     </Link>
                 </span>
               </BottomContainer>
            )}
        </Container>
    )
}

export default ProductCard
const Container = styled.div`
 max-height: 300px;
 width : calc(100%/6 - 10px) ;
 display : flex;
 flex-direction: column;
 background-color: white;
 margin-left:  10px;
 margin-top : 13px;
 cursor: pointer;
 position: relative;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 
 > img {
     width: 100%;
     height : 188px;
     object-fit: cover;
 }
 ${mobile({width : "calc(100%/2 - 10px)"})}
`
const BodyContainer = styled.div`
 padding : 10px;
 flex : 1;
 display : flex;
 flex-direction: column;
  > h3 {
      flex : 1;
      font-size: 16px;
      text-overflow: ellipsis; 
      overflow: hidden; 
     white-space: nowrap;
  }
`
const InfoContainer = styled.div`
 display : flex;
 justify-content: space-between;
 align-content: center;
 .price {
     font-weight : 700;
     color : gray
 }
`
const RateContainer = styled.div`
  > span {
      .start {
          font-size : 13px
      }
  }
   .yellow {
      color : yellow
  }
  .gray {
      color : gray
  }
`
const BottomContainer = styled.div`
 height : 32px;
 display : flex;
 justify-content : center;
 align-items: center;
 background-color: #ee4d2d;
 border :1px solid #ee4d2d ;
 box-sizing: content-box !important;
 z-index : 10;
 > span {
     a {
         text-decoration : none;
         font-size: 15px;
         color : white;
     }
 }
 position: absolute;
 width: 100%;
 top : 260px;
`