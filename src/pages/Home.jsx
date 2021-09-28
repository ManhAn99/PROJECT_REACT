import React ,{useEffect}from 'react'
import {Navbar,Slide,Announcement,Products,DetailProduct,Newsletter,Footer} from '../components'
import { useGlobalState } from '../context/GlobalState'
import { commerce } from '../lib/commerce'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'

const ProgressContainer = styled.div`
 display : flex;
 align-items: center;
 justify-content : center;
 margin : 30px 0
`

const Home = () => {
    const {data,getProducts} = useGlobalState()
    const {products} = data
    const {DetailProductItem} = data
   
    const fetchProducts = async () => {
      const {data} = await commerce.products.list()
      getProducts(data)
    }
    useEffect(() => {
      fetchProducts()
    }, [])
  
    return (
        <div>
            <Navbar />
            <Announcement/>
            <Slide />
            {products.length === 0 ? (
            <ProgressContainer>  <CircularProgress /> </ProgressContainer>
            ) : <Products />}
            {Object.keys(DetailProductItem).length !== 0 && <DetailProduct detailProduct = {DetailProductItem}  />}
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
