import React,{useState}  from 'react'
import styled from 'styled-components'
//components
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import StarIcon from '@mui/icons-material/Star';
//redux
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useHistory} from 'react-router-dom'
//actions
import { moveProductToCart } from '../../../redux/checkout/checkout.actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//responsive
import { mobile } from '../../../responsive';

const ShowProduct = () => {
    let {id} = useParams()
    const history = useHistory()
    const [count,setCount] = useState(1)
    const {products,similarProduct} = useSelector(state => state.productData)
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const {name,price,rate,productImageURL} = similarProduct
    const increaseCount = () => {
       setCount(count + 1)
    }
    const decreaseCount = () => {
       setCount(count === 1 ? 1 : count - 1)
    }  

    const handlePurchase = () => {
        if(!currentUser) {
            history.push('/login')
            return
        }
        toast.success("Item has been added to your shopping cart!")   
        dispatch(moveProductToCart({...similarProduct,count}))
    }
    const handleBuyNow = () => {
        if(!currentUser) {
            history.push('/login')
            return
        }
        dispatch(moveProductToCart({...similarProduct,count}))
        history.push('/cart')
    }
    return (
         <ProductContainer >
            <LeftProductContainer>
                 <img src = {productImageURL} alt = {name} />    
            </LeftProductContainer>
             <RightProductContainer>
                <TitleProduct>
                     <h3>{name}</h3>
                    <RatingContainer>
                    <div>
                        <RateContainer>
                            {[1,2,3,4,5].map(r => (
                             <span
                                key = {r}
                                className = {`${rate >= r ? 'yellow' : 'gray'} `}                      
                                ><StarIcon className = 'star'/></span>
                            ))}
                             </RateContainer>
                            </div>
                            <span className = 'rate'>30 Ratings</span>
                        <span className = 'sold'>59 Sold</span>
                        </RatingContainer>
                      </TitleProduct>
                     <PriceProduct>
                           <span className = 'line-through'>
                           ₫ 1000000
                           </span>
                           <span className = 'price'>
                           ₫ {price * count} 
                           </span>
                           <span className = 'discount'>
                               20% OFF
                           </span>
                       </PriceProduct>
                       <VoucherContainer>
                           <span className = 'voucher'>
                               Shop Vouchers
                           </span>
                           <p clasName = 'coin-back'>
                               12% Coins Cashback
                           </p>
                       </VoucherContainer>
                       <ShippingContainer>
                           <span>Shipping</span>
                           <MethodShippingContainer>
                               <div>
                                   <span className = 'method'>
                                       <LocalShippingIcon className = 'truck' />
                                        Free Shipping
                                   </span>
                               </div>
                               <div className = 'method-plane'>
                                   <span className = 'method'>
                                       <FlightTakeoffIcon className = 'plane' />
                                        Shipping From
                                   </span>
                                   <span>
                                       Hoang Quoc Viet, Nghia Tan, Cau Giay, Ha Noi
                                   </span>
                               </div>
                               <div>
                                   <span className = 'method fee'>
                                       Shipping Fee
                                   </span>
                                   <span>
                                   ₫  O 
                                   </span>
                               </div>
                           </MethodShippingContainer>
                        </ShippingContainer>
                       <PurchaseContainer>
                          <Quantity>
                              <span>Quantity</span>
                              <div>
                                  <button onClick = {decreaseCount}>-</button>
                                  <div>{count}</div>
                                  <button onClick = {increaseCount}>+</button>
                              </div>
                          </Quantity>
                          <ButtonContainer>
                              <button className = 'add' onClick = {handlePurchase}>
                                  <AddShoppingCartIcon />
                                  Add to cart
                              </button>
                              <button className = 'back' onClick = {handleBuyNow}>
                              
                                  Buy Now
                              </button>
                          </ButtonContainer>
                       </PurchaseContainer>
                   </RightProductContainer>
                   <ToastContainer />
               </ProductContainer>
    )
}

export default ShowProduct
const ProductContainer = styled.div`
 background-color: white;
 display : flex;
 border-radius: 3px;
 ${mobile({flexDirection : 'column'})}
`
const LeftProductContainer = styled.div`
 flex : 1;
 padding : 15px;
 border-radius: inherit;
 > img {
     width: 100%;
     object-fit: cover;
     height : 450px

 }
`

const RightProductContainer = styled.div`
 flex : 1.5;
 padding : 15px;
 border-radius: inherit;
`
const TitleProduct = styled.div`
 > h3 {
     font-size : 20px
 }
`
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
  div {
      padding-right: 20px;
  }
  .rate, .sold {
       color : gray;
       padding : 0 20px;
       margin-top : -5px
  }
  .rate {
      border-left: 1px solid #c9c9c9;
      border-right: 1px solid #c9c9c9;
  }
`
const RateContainer = styled.div`
   .yellow {
      color : #ee4d2d
  }
  .gray {
      color : gray
  }
  .star {
      font-size: 22px;
  }

`

const PriceProduct = styled.div`
  background-color: #fafafa;
  padding : 15px;
  display : flex;
  align-items : center;
  > span {
      padding : 0 10px;
      font-weight : 700
  }
  .line-through {
      text-decoration-line : line-through;
      color : gray;
      font-size : 18px;
      
  }
  .price {
      color : #ee4d2d;
      font-size: 28px;
      font-weight : bolder !important;
      
  }
  .discount {
      color : white;
      background-color :  #ee4d2d;

  }
`
const VoucherContainer = styled.div`
  padding : 15px;
  display : flex;
  padding-left: 25px;
  align-items : center;
  > span {
    width : 110px;
    color : gray;
    font-weight : 700
  }
  >p {
      background-color: #fbebed;
      color :#ee4d2d ;
      font-weight: bold;
  }
`
const ShippingContainer = styled.div`
  display : flex;
  padding-left: 25px;
  > span {
    width : 110px;
    color : gray;
    font-weight : 700
  }
`
const MethodShippingContainer = styled.div`
 > div {
     display: flex;
     align-items : center;
     > span {
        display: flex;
        align-items : center;
      
        .truck, .plane {
            
            font-size : 29px
        }
        .truck {
            color : #00bfa5
        }

        .plane {
            color : #6e6e6e
        }
       
     }
     .method {
         width : 150px
     }
     .fee {
      padding-left : 27px;
    }
 }
 .method-plane {
     margin : 8px 0
 }
`
const PurchaseContainer = styled.div`
 padding-left: 25px;
`
const Quantity = styled.div`
margin-top: 20px;
> span {
    width : 110px;
    color : gray;
    font-weight : 700
  }
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
const ButtonContainer = styled.div`
  margin-left: -15px;
  margin-top: 20px;
  display : flex;
  align-items : center;
 >button {
     width : 150px;
     cursor : pointer;
     border : none;
     margin-left: 15px;
     padding : 10px 0;
     height : 50px;
     display : flex;
     align-items: center;
     justify-content: center;
     font-size : 16px;
     font-weight : 700;
     transition : 0.5s;
     &:hover {
         opacity: 0.7;
     }
 }
 .add {
    background-color: #fcddd2;
    border: 1px solid #f05d40 ;
    color : #f05d40
 }
 .back {
     background-color : #f05d40;
     color : white;
     
 }

`