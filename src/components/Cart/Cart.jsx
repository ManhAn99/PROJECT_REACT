import React,{useState} from 'react'
import styled from 'styled-components'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {useSelector,useDispatch} from 'react-redux'
//components
import CartItem from './CartItem/CartItem';
import { Link,useHistory } from 'react-router-dom';
import { getCarts, emptyCart } from '../../redux/checkout/checkout.actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//actions
import { moveToCheckout } from '../../redux/checkout/checkout.actions';
//reponsive
import { mobile } from '../../responsive';

const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <div>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png" alt="empty" />
                <h5>Your shopping cart is empty</h5>
                <button><Link to ='/'>Go Shopping Now</Link></button>
            </div>
        </EmptyCartContainer>
    )
}



const Cart = () => {
    const [toggle,setToggle] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const  {carts} = useSelector(state => state.checkoutData)
    const checkedProducts = carts.filter(product => product.isChecked === true)

    const allPrice =  checkedProducts.reduce((a,b) => (
        a += (b.price * b.count)
    ), 0)
      
    const handleChange = e => {
        const {name,checked,id} = e.target;
        if(name === 'all-select') {
          let tempCarts = carts.map(product => (
              {...product,isChecked : checked}
          ))
          dispatch(getCarts((tempCarts)))
        }
        else {
            let tempCarts = carts.map(product => product.id === id ? {...product,isChecked : checked} : product)
            dispatch(getCarts((tempCarts)))
        }
        
    }
    const moveToCheckOutPage = () => {
        if(checkedProducts.length === 0) {
            toast.error("You have not selected any items for checkout!")
            return
        }
        dispatch(moveToCheckout(checkedProducts))
        history.push('/checkout')
    }

    if(carts.length === 0 ) return <EmptyCart />

    return (
        <Container>
          <FreeShipContainer>
              <LocalShippingIcon className = 'truck'/>
               <h4>Select free shipping voucher below to enjoy shipping discount</h4>
          </FreeShipContainer>
          <SelectAllContainer>
              <input 
              type = 'checkbox' 
              name = 'all-select'
               onChange = {handleChange} 
               checked = {carts.every(product => product.isChecked === true)} />

              <label>Select All</label>
          </SelectAllContainer>
          <CartItemContainer>
              {carts.map(product => (
                  <CartItem product = {product} key = {product.id} handleChange = {handleChange} />
              ))}
          </CartItemContainer>
          <CheckoutContainer>
              <h4 className = 'delete-all' onClick = {() => setToggle(true)} >Delete All</h4>
              <div className = 'checkout' onClick = {moveToCheckOutPage}>
                  <h4>Total {`(${checkedProducts.length} ${checkedProducts.length === 1 ? 'item' : 'items'})`} :</h4>
                  <h3>₫ {allPrice}</h3>
                  <h5>Check Out</h5>
              </div>
          </CheckoutContainer>
          {toggle && (
               <DeleteAllProduct>
               <div className = 'wrapper'>
                   <h3>Do you want to remove the {carts.length} {`${carts.length === 1 ? 'item' : 'items'}`} ? </h3>
                 <div className = 'buttons'>
                    <button className = 'cancel' onClick = {() => setToggle(false)}>Cancel</button>
                    <button className = 'yes' onClick = {() => dispatch(emptyCart())}>Yes</button>
                 </div>
               </div>
           </DeleteAllProduct>
          )}
             <ToastContainer />
        </Container>
    )
}

export default Cart
const Container = styled.div`
 position : relative
`
const FreeShipContainer = styled.div`
 background-color: #fffefb;
 display : flex;
 align-items : center;
 margin-top : 10px;
 padding : 10px;
 padding-left : 20px;
 border : 1px solid #f3db97;
 .truck {
     color : #00bfa5
 }
  > h4 {
      padding : 0 10px
  }
`
const SelectAllContainer = styled.div`
 background-color: white;
 margin-top : 10px;
 padding : 15px 0 15px 40px;
 display : flex;
 align-items: center;
 ${mobile({padding :'15px'})};
 >label {
     padding : 0 20px;
     font-weight : 600;
     font-size : 15px
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
`
const CartItemContainer = styled.div`
 
`
const EmptyCartContainer = styled.div`
 display : flex;
 padding-top : 50px;
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
     > button {
        border : none;
        margin-top : 20px;
        > a {
            color : white;
           cursor : pointer;
           background-color: #ee4d2d;
           padding : 10px 30px;
           font-size : 18px;
           text-decoration : none;
           transition : 0.5s;
           &:hover {
               opacity : 0.7
           }
        }
         
     }
 }
`
const CheckoutContainer = styled.div`
 background-color: white;
 margin : 20px 0 40px 0;
 height : 70px;
 display : flex;
 align-items: center;
 justify-content: space-between;
 padding : 0 30px 0 50px;
 .delete-all {
         color : gray;
         border : 1px solid #e4e4e4;
         padding : 5px 20px;
         cursor : pointer
     
 }
 .checkout {
     display : flex;
     align-items: center;
     > h5 {
        background-color :  #ee4d2d;
         color : white;
         width : 210px;
         height : 40px;
         display : flex;
         align-items: center;
         justify-content : center;
         cursor : pointer;
         font-size : 16px; 
     } 
     > h3 {
         color : #ee4d2d;
         padding : 0 15px;
         font-size : 25px
     }
 
     ${mobile({justifyContent : 'space-between',width : '100%', margin : '20px 0'})}
    
 }
 ${mobile({flexDirection : 'column',height :'auto',padding :'15px',alignItems : 'flex-start'})}
`
const DeleteAllProduct = styled.div`
 position : fixed;
 top : 0;
 left : 0;
 width : 100%;
 height : 100vh;
 display : flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(0,0,0,0.4);
 z-index : 200;
 .wrapper {
     background-color: white;
     padding : 30px 70px;
     display : flex;
     flex-direction: column;
     align-items: center;
     .buttons {
         margin-top : 20px ;
         display : flex;
         margin-left : -20px;
         >button {
             border : none;
             width: 100px;
             height : 50px;
             display : flex;
             align-items: center;
             justify-content: center;
             margin-left: 20px;
             cursor : pointer;
             font-weight: 700;
             transition : 0.5s;
         }
         .cancel {
             color : white;
             background-color: #ee4d2d; 
             &:hover {
                 opacity : 0.6
             }
         }
         .yes {
             background-color: transparent;
             color : black;
             &:hover {
                 background-color : #dddbdb
             }
         }
     }
 }
`