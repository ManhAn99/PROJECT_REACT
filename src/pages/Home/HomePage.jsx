import React, {useEffect} from 'react'
//components
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import Carousel from '../../components/Carousel/Carousel'
import styled from 'styled-components'
import Discount from '../../components/Discount/Discount'
import Gift from '../../components/Gift/Gift'
import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'
import ShockingSale from '../../components/ShockingSale/ShockingSale'
import ProductList from '../../components/ProductList/ProductList'
//redux
import { firestore } from '../../firebase/utils'
import { useDispatch } from 'react-redux'
//actions
import { getProducts } from '../../redux/product/product.action'
//responsive
import { mobile } from '../../responsive'

const HomePage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const subscriber = firestore
         .collection('products')
         .orderBy('timestamp', 'desc')
         .onSnapshot((querySnapshot) => {
            const getPostsFromFirebase = [];
            querySnapshot.forEach(doc => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    id : doc.id
                })
               
            })
            dispatch(
                getProducts(getPostsFromFirebase)
            )
          
         })
         return () => subscriber()
    }, [])
  
    return (
        <Container>
            <HeaderMain />
            <BodyContainer>
            <Carousel />
              <Wrapper>    
                <Discount />
               <Category/>
               <Gift />
               <ShockingSale />  
               <ProductList />
              </Wrapper>       
           </BodyContainer>   
           <Footer  />
        </Container>
    )
}

export default HomePage

const Container = styled.div`
 position: relative;

`
const BodyContainer = styled.div`
 margin-top: 120px;
 padding-top: 30px;

`
const Wrapper = styled.div`
 background-color: #f5f5f5;
 padding : 0 90px;
 ${mobile({padding : "0px"})}
`