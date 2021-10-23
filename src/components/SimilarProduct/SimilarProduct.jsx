import React,{useEffect} from 'react'
import styled from 'styled-components'
import {useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//actions
import { getFilterProduct } from '../../redux/product/product.action';
//components
import FilterCard from '../FilterCard/FilterCard';
import TopFilter from '../TopFilter/TopFilter';
import StarIcon from '@mui/icons-material/Star';
import ChatIcon from '@mui/icons-material/Chat';
import Avatar from '@mui/material/Avatar';

import { useHistory } from 'react-router';

//reponsive
import { mobile } from '../../responsive';

const  useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


const SimilarProduct = () => {
    const history = useHistory()
    const {products,filterProduct,similarProduct} = useSelector(state => state.productData)
    const dispatch = useDispatch()
    let query = useQuery();
    const type = query.get('type')
    const filterProducts = products
    .filter(product => product.category === type)
    .filter(product => product.id !== similarProduct.id)

    useEffect(() => {
      dispatch(getFilterProduct(filterProducts))
    }, [])

    const handleShopNow = () => {
        history.push(`/showProduct/${similarProduct.id}`)
    }

    if(filterProducts.length === 0) {
        history.push('/')
    }

    const {productImageURL, name ,price,rate} = similarProduct

    return (
        <Container>
        <ProductContainer>
           <WrapperContainer>
              <img src= {productImageURL} alt= {name} />
              <InfoContainer>
                 <LeftContainer>
                 <h3>{name}</h3>
                  <RateContainer>
                       {[1,2,3,4,5].map(r => (
                        <span
                          key = {r}
                         className = {`${rate >= r ? 'yellow' : 'gray'} `}
                        
                        ><StarIcon className = 'star'/></span>
                        ))}
                       </RateContainer>
                  <h4>₫ {price}</h4>
                 <button onClick = {handleShopNow}>Shop Now</button>
                 </LeftContainer>
                 <RightContainer>
                     <TopUser>
                       <Avatar src = 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg' alt = 'avatar' />
                       <span>Kedai kecil China</span>
                       <ChatIcon className = 'mess' />
                     </TopUser>
                     <ContentUser>
                         <LeftContent>
                            <h3>Product : <span>9.8k</span></h3>
                         </LeftContent>
                         <RightContent>
                         <h3>Ratings <span>{rate} out of 5</span></h3>
                         </RightContent>
                     </ContentUser>
                 </RightContainer>
              </InfoContainer>
           </WrapperContainer>
        </ProductContainer>
        <TopFilter  />
        <BodyContainer>
            {filterProduct.map(product => (
                <FilterCard key = {product.id} product = {product} />
            ))}
        </BodyContainer>
    </Container>
    )
}

export default SimilarProduct
const Container = styled.div`
 padding-top: 10px;
 min-height : 100vh
`

const BodyContainer = styled.div`
 display : flex;
 flex-wrap : wrap;
 margin-left : -10px
`

const ProductContainer = styled.div`
padding : 25px 30px;
 background-color: white;
 margin : 20px 0 30px 0;
 ${mobile({padding : "10px"})}
`
const WrapperContainer = styled.div`
  display : flex;
 >img {
     width : 160px;
     object-fit: cover;
     height: 160px;
     ${mobile({width : "100%",height : "350px"})}
 }
 ${mobile({flexDirection : "column",height : 'auto'})}
`
const InfoContainer = styled.div`
 flex : 1;
 padding-left: 20px;
 display : flex;
 ${mobile({flexDirection : "column",padding : '0'})}
`
const RateContainer = styled.div`
   .yellow {
      color : yellow
  }
  .gray {
      color : gray
  }
  .star {
      font-size: 18px;
  }

`
const LeftContainer = styled.div`
 border-right: 1px solid #cacaca;
 flex : 2;
 display: flex;
 flex-direction: column;
 justify-content: space-between;

 > button {
     width : 130px;
     border : none;
     padding : 5px 0;
     color : white;
     cursor : pointer;
     background-color: #f05d40;
     font-size : 16px;
     font-weight: 700;
 }
 > h4 {
     color :#f05d40;
     font-size: 25px;
 }
 ${mobile({border : "none",padding : '15px 20px'})}
`
const RightContainer = styled.div`
 flex : 1;
 padding : 0 0px 0 30px;
 ${mobile({border : "none",padding : '15px 20px'})}
`
const TopUser = styled.div`
 display : flex;
 align-items: center;
 > span {
     padding : 0 16px;
     font-weight: 700;
 }
 .mess {
     color : #00bfa5;
     font-size : 15px
 }
`

const ContentUser = styled.div`
 display : flex;
 justify-content: space-between;
 margin-top : 15px

`
const LeftContent = styled.div`
 flex : 1;
 border-right: 1px solid #cacaca;
 
 h3 {
     font-size: 16px;
     color : gray;
     > span {
         color : #f05d40
     }
 }
`
const RightContent = styled.div`
 flex : 1.5;
 display : flex;
 justify-content: center;
 h3 {
     font-size: 16px;
     color : gray;
     > span {
         color : #f05d40
     }
 }
`