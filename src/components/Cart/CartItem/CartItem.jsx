import React from 'react'
import styled from 'styled-components'
import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
//actions
import { getSimilarProduct } from '../../../redux/product/product.action';
import { increaseCountProduct , decreaseCountProduct, deleteItemFromCart } from '../../../redux/checkout/checkout.actions';
//responsive
import { mobile } from '../../../responsive';

const CartItem = ({product,handleChange}) => {
    const {price,name,productImageURL,count,category,id} = product
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFindSimilar = () => {
       dispatch(getSimilarProduct(product))
       history.push(`/similarProduct?type=${category}`)
    }
    const handleIncreaseCount = () => {
        dispatch(increaseCountProduct(id))
    }
    const handleDecreaseCount = () => {
        dispatch(decreaseCountProduct(id))
    }
    const handleDeleteProduct = () => {
        dispatch(deleteItemFromCart(id))
    }
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
                   <input 
                   type = 'checkbox' 
                   name = 'item' 
                   id = {id} 
                   onChange = {handleChange}
                   checked = {product.isChecked === true ? true : false}
                   />
                   <img src={productImageURL} alt= {name} />
                   <div>
                       <h3>{name}</h3>
                       <img src="https://cf.shopee.com.my/file/9a617c7d2b0cf40315f1297fd9260716" alt="bean" />
                   </div>
                    </InfoContainer>
                    <div className = 'unit-price-button'>
                     <UnitPrice>
                         <h4>₫ {price}</h4>
                         <h5>{'(Unit Price)'}</h5>
                      </UnitPrice>
                    <ButtonContainer>
                    <div>
                         <button onClick = {handleDecreaseCount}>-</button>
                            <div>{count}</div>
                         <button onClick = {handleIncreaseCount}>+</button>
                     </div>
                    </ButtonContainer>
                   </div>
               </LeftContainer>
               <RightContainer>
                   <TotalPrice>
                       <h4>₫ {price * count}</h4>
                       <h5>{'(Total Price)'}</h5>
                   </TotalPrice>
                   <DeleteItem>
                       <span onClick = {handleDeleteProduct}>Delete</span>
                       <span className = 'find-similar' onClick = {handleFindSimilar}>
                          Find Similar
                          <ArrowDropDownIcon />   
                       </span>
                   </DeleteItem>
               </RightContainer>
            </BodyContainer>
        </Container>
    )
}

export default CartItem

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
     color : #ee4d2d;
 }
 .store, .message {
     font-size : 19px
 }
 ${mobile({padding :'15px'})}

`
const BodyContainer = styled.div`
padding : 25px 20px 25px 50px;
display : flex;
${mobile({flexDirection : 'column',padding :'15px'})}
`
const LeftContainer = styled.div`
 flex : 1;
 display : flex;
 justify-content: space-between;
 align-items : center;
 padding-right: 40px;
 .unit-price-button {
     flex : 1;
     display : flex;
     justify-content: space-between;
     ${mobile({width : '100%', padding : '20px 40px'})}
 }
 ${mobile({flexDirection : 'column', paddingRight : '0'})}
`
const InfoContainer = styled.div`
display : flex;
align-items: center;
>img {
      width : 90px;
      height : 90px;
      object-fit : cover;
      margin-left: 30px;
  }
  input[type = 'checkbox'] {
     appearance: none;
     --webkit-appearance : none;
     height : 20px;
     width : 20px;
     background-color: transparent;
     border-radius : 5px;
     cursor : pointer;
     display : flex;
     align-items : center;
     justify-content : center;
     border : 1px solid #d1d1d1
 }
 input[type ='checkbox']:after {
     font-family: 'Font Awesome 6 Free';
     content : '\f00c';
     font-weight : 900;
     font-size : 15px;
     color : white;
     display : none
 }
 input[type = 'checkbox']:hover{
     background-color: #dadada;
 }
 input[type = 'checkbox']:checked{
     background-color: #ee4d2d;
 }
 input[type = 'checkbox']:checked:after{
     display : block;
     border : none
 }
 > div {
    align-self : flex-start;
    padding : 0 10px;
    display : flex;
    flex-direction : column;
    > img {
        width : 227px;
        height : 20px;
        object-fit : cover;
        margin-top : 7px
    }
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
      border : 1px solid #e6e6e6;
      > div {
          flex : 1;
          display : flex;
          align-items: center;
          justify-content: center;
          font-size : 20px;
          color : gray;
          font-weight : 700;
          border-left: 1px solid #e6e6e6 ;
          border-right: 1px solid #e6e6e6 ;
      }
      > button {
          width : 30px;
          border : none;
          font-size : 20px;
          cursor : pointer;
          background-color: transparent;
          color : gray;
          font-weight : 700;

      }
  }
` 
const RightContainer = styled.div`
width : 300px;
 display : flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({width : '100%',justifyContent :'space-between',padding : '0 40px'})}
`
const TotalPrice = styled.div`
 display : flex;
  flex-direction : column;
  align-items: center;
  color :  #ee4d2d;
`
const DeleteItem = styled.div`
 display : flex;
 flex-direction : column;
 align-items : center;
 padding-right : 15px;
 >span {
     font-weight : 700;
     cursor : pointer
 }
 .find-similar {
     display : flex;
     align-items : center;
     color :  #ee4d2d;
   
     ${mobile({paddingLeft :'15px'})}
 };
 ${mobile({flexDirection : 'row',padding : '0px'})}
`