import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import UserRate from '../UserRate/UserRate'
import StarIcon from '@mui/icons-material/Star';
import {firestore} from '../../../firebase/utils'
import ShowUserRate from '../UserRate/ShowUserRate';
//redux
import { useSelector } from 'react-redux';

const NoRatingYet = () => {
    return (
        <NoRatingContainer>
           <div>
             <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/eac95a8ac896158642c2761a9e9cd52e.png" alt="no rating" />
             <span>No Rating Yet</span>
           </div>
         </NoRatingContainer>
    )
}

const RatingProduct = () => {
    const [userRating,setUserRating] = useState(false)
    const [ratingValue,setRatingValue] = useState([])
    const {similarProduct,currentId} = useSelector(state => state.productData)
    const {rate} = similarProduct
   
    useEffect( () => {   
        const subscriber =  firestore
       .collection('products')
       .doc(currentId)
       .collection('userRate')
       .orderBy('timeStamp', 'desc')
       .onSnapshot((querySnapshot) => {
        const getDataFromFirebase = []
          querySnapshot.forEach(doc => {
              getDataFromFirebase.push({
                  ...doc.data(),
                  id : doc.id
              })     
          })    
          setRatingValue(getDataFromFirebase)      
       })
       return () => subscriber()
    }, [currentId])
    console.log(ratingValue)
    return (
        <Container>
            <h3>Product Ratings</h3>
            <HeaderRate>
                <TitleRateContainer>
                   <LeftTitleRate>
                    <p><span>{rate ? rate : 0}.0</span> out of 5</p>
                   <RateContainer>
                    {[1,2,3,4,5].map(r => (
                      <span
                      key = {r}
                      className ={`${rate >= r ? 'yellow' : 'gray'} `}                      
                        ><StarIcon className = 'star'/></span>
                    ))}
                    </RateContainer>
                   </LeftTitleRate>
                   <button onClick = {() => setUserRating(true)}>Rate</button>
                </TitleRateContainer>
                {userRating && (
                    <UserRate  setUserRating = {setUserRating}  />
                )}
            </HeaderRate>
            <BodyContainer>
               {ratingValue.length === 0 ? (
                   <NoRatingYet />
               ) : (
                  ratingValue.map(rate => (
                    <ShowUserRate rate = {rate} key = {rate.id} />
                ))
               )}
            </BodyContainer>
        </Container>
    )
}

export default RatingProduct
const Container = styled.div`
 background-color: white;
 margin : 20px 0;
 padding : 25px;
 > h3{
   color : gray
 }
`
const HeaderRate = styled.div`
 
`
const TitleRateContainer = styled.div`
 height: 146px;
 display: flex;
 align-items: center;
 background-color: #fffbf8;
 border : 1px solid #f9ede5;
 margin : 20px 0 10px 0;
 justify-content: space-between;
 padding-right : 40px;
  > button {
      color : white;
      background-color: #ee4d2d;
      border : none;
     
      cursor : pointer;
      padding : 10px 30px;
      font-weight: 700;
      font-size: 18px;
  }
  
`
const LeftTitleRate = styled.div`
   padding-left : 40px;
   > p {
      color :#ee4d2d;
      font-size : 21px;
      font-weight: 700;
      > span {
          font-weight : bolder;
          font-size : 30px
      }

  }
` 

const RateContainer = styled.div`
   padding : 3px 0;
   .yellow {
      color : #ee4d2d
  }
  .gray {
      color : gray
  }
  .star {
      font-size: 28px;
  }

`
const BodyContainer = styled.div`
 
`
const NoRatingContainer = styled.div`
  height: 50vh;
  display : flex;
  align-items: center;
  justify-content: center;
  > div {
      display : flex;
      align-items: center;
      flex-direction : column;
      > span {
          padding-top : 10px;
          font-weight : 700
      }
  }
`