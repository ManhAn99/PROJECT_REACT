import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//actions
import { getCurrentId } from '../../../redux/product/product.action';
//responsive
import {mobile} from '../../../responsive'

const MoreProduct = ({product,currentRef}) => {
    const {rate,price,name,productImageURL,id} =  product
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = () => {
        currentRef.current.scrollIntoView({
            behavior : 'smooth'
        })
        dispatch(getCurrentId(id))
        history.push(`/showProduct/${id}`)
    }
    return (
        <Container onClick = {handleClick}>
            <img src= {productImageURL} alt= {name} />
            <BodyContainer>
                <h3>{name}</h3>
                <RateContainer>
                    {[1,2,3,4,5].map(r => (
                     <span
                     key = {r}
                    className = {`${rate >= r ? 'yellow' : 'gray'} `}                      
                     ><StarIcon className = 'star'/></span>
                    ))}
                 </RateContainer>
                 <h4>₫ {price} </h4>
            </BodyContainer>
        </Container>
    )
}

export default MoreProduct
const Container = styled.div`
  padding : 15px;
  margin-bottom : 10px ;
  margin-left: 10px;
  background-color: white;
  display : flex;
  flex-direction: column;
  cursor : pointer;
  > img {
      width : 100%;
      height : 300px;
      object-fit: cover;
  }
  ${mobile({marginLeft : '0px',marginBottom : '15px'})}
`
const BodyContainer = styled.div`
 flex : 1;
 display : flex;
 flex-direction : column;
 > h3 {
     flex : 1
 }
 > h4 {
     color : gray
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