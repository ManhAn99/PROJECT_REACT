import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux'
//components
import ProductCardManager from './ProductCardManager/ProductCardManager'
//actions
import { getProducts } from '../../../redux/product/product.action'
import { toggleAddFormProduct } from '../../../redux/admin/admin.action'
import { firestore } from '../../../firebase/utils'
//responsive
import { mobile } from '../../../responsive'

const ProductManager = () => {
    const {products} = useSelector(state => state.productData)
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

    if(products.length === 0 ) return null

    return (
        <Container>
            <button onClick = {() => dispatch(toggleAddFormProduct(true))} >Add product</button>
            <h2>Total : {products.length}</h2>
            <ListProduct>
                    {products.map(product => (
                        <ProductCardManager product = {product} key = {product.id} />
                    ))}
                </ListProduct>
        </Container>
    )
}

export default ProductManager
const Container = styled.div`

> button {
     cursor : pointer;
     border : none;
     color : white;
     padding : 10px 15px;
     background-color:  #e74f13;
     font-size: 16px;
     margin-bottom: 20px;
    
 }
`
const ListProduct = styled.div`
 display: flex;
 flex-direction: column;
`
