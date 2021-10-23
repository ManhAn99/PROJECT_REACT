import React,{useState} from 'react'
import styled from 'styled-components'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
//components
import InfoForm from './InfoForm/InfoForm'
import { useSelector,useDispatch } from 'react-redux';
import ProductCheckout from './ProductCheckout/ProductCheckout';
import EditForm from './EditForm/EditForm';

import { useHistory } from 'react-router';
//actions
import { sendInfoCheckoutToFirebase } from '../../redux/checkout/checkout.actions';

const Checkout = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {infoUser,checkedProducts} = useSelector(state => state.checkoutData)
    const [toggleEdit, setToggleEdit] = useState(false)
    const allPrice =  checkedProducts.reduce((a,b) => (
        a += (b.price * b.count)
    ), 0)

    const handleSend = () => {
        dispatch(sendInfoCheckoutToFirebase(infoUser,checkedProducts,allPrice))
        alert('Thank you for your purchase !')
        history.push('/')
    }

    return (
        <Container>
            <AddressContainer>
             <ImageAddress />
             <div class = 'info-user'>
                <div className="top-info">
                   <h3><AddLocationAltIcon className = 'location' /><span>Delivery Address</span></h3>
                </div>
                <div className="bottom-info">
                  {infoUser.displayName && (
                      <h3>{infoUser.displayName}{`(${infoUser.phone})`}</h3>
                  )}
                  {
                    infoUser.address && <p>{infoUser.address}</p>
                  }
                  <h4 onClick = {() => setToggleEdit(true)}>CHANGE</h4>
                </div>
             </div>
            </AddressContainer>
            <ProductContainer>
               {checkedProducts.map(product => (
                   <ProductCheckout product = {product} key = {product.id} />
               ))}
            </ProductContainer>
            <PlaceOrderContainer>
               <div className="placeOrderTop">
                   <div className="info-checkout">
                       <h4>Merchandise Subtotal : <span>₫ {allPrice}</span></h4>
                       <h4>Shipping Total : <span>₫ O</span></h4>
                       <h4>Total Payment : <span className = 'total-payment'>  ₫ {allPrice}</span></h4>
                   </div>
               </div>
               <div className="placeOrderBottom">
                  <h4 onClick = {handleSend}>Place Order</h4>
               </div>
            </PlaceOrderContainer>
            {Object.keys(infoUser).length === 0  && <InfoForm/>}
            {toggleEdit && <EditForm setToggleEdit = {setToggleEdit} /> }
        </Container>
    )
}

export default Checkout

const Container = styled.div`
 position: relative;
`
const AddressContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height : 135px;
 .info-user {
     flex : 1;
     background-color: white;
     padding : 20px 30px;
     display: flex;
     flex-direction: column;
     .top-info {  
         flex : 1;
         >h3 {
             color : #ee4d2d;
             display: flex;
             align-items: center;
             > span {
                 padding : 0 10px
             }
         }
     }
     .bottom-info {
         display: flex;
         flex : 1;
         h4,h3 {
             flex : 1
         }
         p{
             flex : 2;
             font-weight : 700;
             color : gray;
             font-size : 19px
         }
         h4 {
             display: flex;
             justify-content: flex-end;
             color : #05a;
             cursor : pointer;
         }
     }
 }

`
const ImageAddress = styled.div`
 background-image: repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,transparent 0,transparent 41px,#f18d9b 0,#f18d9b 74px,transparent 0,transparent 82px); 
 height : 3px
`
const ProductContainer = styled.div`
 
`
const PlaceOrderContainer = styled.div`
 background-color :#fffefb;
 border-bottom: 1px solid #f1f0ed;
 border-top: 1px solid #f1f0ed;
 height: 252px;
 margin : 20px 0 40px 0;
 display : flex;
 flex-direction: column;
 .placeOrderTop{
     flex : 1;
     padding: 10px 30px 10px 0px;
     display : flex;
     justify-content: flex-end;
     .info-checkout {
         display : flex;
         flex-direction: column;
         justify-content: space-between;
         > h4 {
             display : flex;
             justify-content: space-between;
             align-items: center;
             width : 260px;
             color : gray;
             .total-payment {
                 color  : #ee4d2d;
                 font-size : 30px
             }
         }
     }
 }
 .placeOrderBottom {
    border-top : 1px dashed #dadada;
    height : 96px;
    padding-right : 30px;
    display : flex;
    align-items: center;
    justify-content : flex-end;
    > h4 {
        color : white;
        cursor : pointer;
        padding : 7px 70px;
        background-color : #ee4d2d;
        transition : 0.5s;
        &:hover {
            opacity: 0.7;
        }
    }
 }
`