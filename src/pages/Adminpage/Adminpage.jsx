import React, {useState, useEffect,useRef} from 'react'
import styled from 'styled-components'
//component
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import AddForm from './AddForm/AddForm'
import EditForm from './EditForm/EditForm'
import { useSelector,useDispatch } from 'react-redux'
//actions
import { getProducts } from '../../redux/product/product.action'

import { firestore } from '../../firebase/utils'

const Adminpage = () => {
    const [toggle,setToggle] = useState(false)
    const ref = useRef(null)
    const dispatch = useDispatch()
    const {currentProduct} = useSelector(state => state.productData)
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

         ref.current.scrollIntoView({
            behavior : 'smooth'
        })  
         return () => subscriber()
    }, [])

 
    return (
        <Container>
            <div ref = {ref}></div>
            <HeaderLogin />
            <BodyContainer>
               <LeftSide />
               <RightSide setToggle = {setToggle}  />         
            </BodyContainer>
            {toggle &&  <AddForm setToggle = {setToggle} />}
            { currentProduct &&  <EditForm  />}
        </Container>
    )
}

export default Adminpage
const Container = styled.div`
 min-height: 100vh;
 position : relative
`
const BodyContainer = styled.div`
 display: flex;
 
`