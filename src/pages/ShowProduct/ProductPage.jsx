import React ,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
//components
import ShowProduct from './ShowProduct/ShowProduct'
import Shop from './Shop/Shop'
import MoreProduct from './MoreProduct/MoreProduct'
import RatingProduct from './RatingProduct/RatingProduct'

//redux
import {useSelector, useDispatch} from 'react-redux'
import {useParams,useHistory} from 'react-router-dom'

//actions
import { getSimilarProduct, getCurrentId } from '../../redux/product/product.action'
//responsive
import { mobile } from '../../responsive'

const ProductPage = () => {
    const currentRef = useRef(null)
    const history = useHistory()
    let {id} = useParams()
    const {products,currentId,similarProduct} = useSelector(state => state.productData)
    const dispatch = useDispatch()
    const currentProduct = products.find(product => product.id === id)
    useEffect(() => {
        dispatch(getSimilarProduct(currentProduct))
        dispatch(getCurrentId(id))    
        currentRef.current.scrollIntoView({
            behavior : 'smooth'
        })
    }, [currentId])
    if(currentProduct === undefined) {
        history.push('/')
    }
    const moreProduct = products.filter(product => product.category === currentProduct.category && product.id !== id)
    
    return (
        <Container>
            <div ref = {currentRef} style = {{position : 'absolute', top : '0'}}></div>
            <HeaderMain />
            <BodyContainer >
            {similarProduct && <ShowProduct />}
               <Shop />
               <DescriptionProduct>
                  <LeftDesc>
                      <SpecificProduct>
                        <TitleProduct>
                            <h3>Product Specifications</h3>
                        </TitleProduct>
                        <DetailProduct>
                            <div>
                                <span>Category</span>
                                <p>{currentProduct && currentProduct.category}</p>
                            </div>
                            <div>
                                <span>Plus Size</span>
                                <p>No</p>
                            </div>
                            <div>
                                <span>Stock</span>
                                <p>509</p>
                            </div>
                            <div>
                                <span>Ship From</span>
                                <p>Trung Hoa, Cau Giay, Ha Noi</p>
                            </div>
                        </DetailProduct>
                        <TitleProduct>
                           <h3>Product Description</h3>             
                        </TitleProduct>
                         <div>
                           <p className = 'desc'>{currentProduct && currentProduct.description}</p>
                         </div>
                      </SpecificProduct>
                    { currentId && similarProduct && <RatingProduct  />    }  
                  </LeftDesc>
                 {moreProduct.length !== 0 && (
                      <RightSide>
                  
                      {moreProduct.map(product => (
                          <MoreProduct product = {product} key = {product.id} currentRef = {currentRef} />
                      ))}
                   </RightSide>
                 )}
               </DescriptionProduct>
            </BodyContainer>
          
        </Container>
    )
}

export default ProductPage
const Container = styled.div`
 min-height: 100vh;
 background-color: #f5f5f5;
 
`
const BodyContainer = styled.div`
 margin-top : 120px;
 min-height: calc(100vh - 120px);
 padding : 40px 90px;
 ${mobile({padding : '0px'})}
`
const DescriptionProduct = styled.div`
 display: flex;
 background-color: #f5f5f5;
 ${mobile({flexDirection : 'column'})}
`
const LeftDesc = styled.div`
  flex : 1;
 
`
const SpecificProduct= styled.div`
 padding : 25px;
 background-color: white;
  > div {
      .desc {
          font-weight : 700;
          padding : 20px 0 0px 20px;

      }
  }

`
const TitleProduct = styled.div`
 background-color: rgba(0, 0, 0, 0.02);
 padding : 10px 0 10px 20px;
 > h3 {
     font-size : 23px
 }
`
const DetailProduct = styled.div`
  > div {
      display : flex;
      align-items : center;
      margin-bottom :10px;
      font-weight : 700;
      > span {
          width: 150px;
          color : gray
      }
  }
  padding : 20px 0 0px 20px;

`

const RightSide = styled.div`
 width : 250px;
 ${mobile({width : '100%',padding : '15px'})}

`