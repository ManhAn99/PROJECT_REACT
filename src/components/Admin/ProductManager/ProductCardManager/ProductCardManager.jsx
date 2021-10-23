import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { deleteProduct, getCurrentProduct } from '../../../../redux/product/product.action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//responsive
import { mobile } from '../../../../responsive';

const ProductCardManager = ({product}) => {
    const {category, name, price,productImageURL,rate,timestamp,id} = product
    const dispatch = useDispatch()
    const handleDelete = () => {     
            dispatch(deleteProduct(id,productImageURL))
            toast.success("Delete product success!")     
    }
    return (
        <Container>
        <TopContainer>
          <InfoTop>
              <h3>{name}</h3>
               <span>{timestamp.toDate().toUTCString()}</span>
          </InfoTop>
          <RateContainer>
            {[1,2,3,4,5].map(r => (
                <span
                key = {r}
                className = {`${rate >= r ? 'yellow' : 'gray'}`}
                ><StarIcon/></span>
            ))}
          </RateContainer>
        </TopContainer>
        <BottomContainer>
           <LeftBottom>
             <img src = {productImageURL} alt = {name} />
              <TextContainer>
                   <h4>Category : {category}</h4>
                   <span>Price : ₫ {price} </span>
              </TextContainer>
           </LeftBottom>
              <RightContainer>         
                      <button className = 'edit' onClick = {() => dispatch(getCurrentProduct(product))}>
                          <EditIcon />
                      </button>
                      <button onClick = {handleDelete} >
                          <DeleteOutlineIcon />
                      </button>   
              </RightContainer>
        </BottomContainer>
        <ToastContainer />
    </Container>
    )
}

export default ProductCardManager

const Container = styled.div`
 margin : 20px 0;
 width : 600px;
 border : 1px solid #e4e2e2;
 ${mobile({width : "100%"})}
`
const TopContainer = styled.div`
 display : flex;
 border-bottom : 1px solid #e4e2e2;
 padding : 15px;
 align-items: center;
 justify-content: space-between;
`
const InfoTop = styled.div`
 > span {
     font-size: 13px;

 }
` 
const RateContainer = styled.div`
  .yellow {
      color : yellow
  }
  .gray {
      color : gray
  }
`
const BottomContainer = styled.div`
 display: flex;
 padding-right: 15px;
 justify-content: space-between;
 align-items: center;
`
const LeftBottom = styled.div`
 > img {
     width: 100px;
     height : 100px;
     object-fit: cover;
 };
 display : flex
`
const TextContainer = styled.div`
 display: flex;
 flex-direction :column;
 justify-content: center;
 padding-left: 20px;
 font-weight : 700;
 > span {
     color : gray;
     margin : 10px 0
 }
`
const RightContainer = styled.div`
 > button {
     color : black;
     border : none;
     cursor : pointer;
     transition : 0.7s;
     background-color : transparent;
     &:hover {
         opacity : 0.4
     }
 }
 .edit {
     margin : 0 15px
 }
 
`
