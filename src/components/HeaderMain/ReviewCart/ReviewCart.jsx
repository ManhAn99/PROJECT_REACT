import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//responsive
import { mobile } from '../../../responsive'

const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <div>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png" alt="empty" />
                <h5>No Products Yet</h5>
            </div>
        </EmptyCartContainer>
    )
}


const ReviewCart = () => {
    const  {carts} = useSelector(state => state.checkoutData)
    const reviewCart = carts.length < 5  ? carts : carts.slice(carts.length - 5, carts.length)
    if(carts.length === 0) {
        return (
            <Container>
                <Triangle />
                <EmptyCart />
            </Container>
        )
    }
    return (
        <Container>
           <Triangle />
           <h4>Recently Added Products</h4>
           {reviewCart.map(product =>{
               const {id, price,count,name,productImageURL} = product
               return (
                <div className = 'product' key = {id}>
                    <img src= {productImageURL} alt= {name} />
                    <h5 className = 'name'><span>{name}</span><span>x{count}</span></h5>
                    <h6 className = 'price'>₫ {price * count}</h6>
                 </div>
               )
           }
              
           )}
           <BottomContainer>
               {carts.length > 5 ? (
                   <h4 className = 'total'>{carts.length - 5} More Products In Cart</h4>
               ): (
                <h4 className = 'total'>Total : {carts.length} {`${carts.length === 1 ? 'item' : 'items'}`}</h4>
               )}
            
               <h4 className = 'to-cart'><Link to  ='/cart'>View My Shopping Cart</Link></h4>
           </BottomContainer>
        </Container>
    )
}

export default ReviewCart

const Container = styled.div`
 background-color: #ffffff;
 position: absolute;
 width : 370px;
 top : 30px;
 right : 80px;
 min-height : 150px;
 z-index: 1000;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 padding : 15px;
 > h4 {
     color : gray
 }
 .product {
     display : flex;
     margin : 10px 0;
     color : black;
     justify-content: space-between;
     >img {
         width : 50px;
         height : 50px;
         object-fit: cover;
     }
     .name {
         font-size : 16px;
         display : flex;
         flex-direction: column;
         align-items: center;

     }
     .price {
        font-size : 16px;
        color :  #ee4d2d;
     }
 }
 ${mobile({display : "none"})}

`
const Triangle = styled.div`
width: 0;
height: 0;
border-style: solid;
border-width: 0 15px 10px 15px;
border-color: transparent transparent #ffffff transparent;
position : absolute;
top : -10px;
right : 10px;
`
const BottomContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items : center;
 .total {
     color : black
 }
 .to-cart {
     > a {
        color : white;
     cursor : pointer;
     background-color: #ee4d2d;
     padding : 10px 20px;
     font-size : 14px;
     text-decoration : none
     }
 }
`
const EmptyCartContainer = styled.div`
 display : flex;
 padding-top : 20px;
 justify-content : center;
 > div {
     display : flex;
     flex-direction : column;
     align-items : center;
     > h5 {
         color : gray;
         margin : 10px 0;
         font-size : 17px
     }
     img {
         width : 108px;
         height : 108px;
         object-fit : cover
     }
 }
`