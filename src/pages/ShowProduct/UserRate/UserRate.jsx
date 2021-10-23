import React, {useState} from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import {motion} from 'framer-motion'
//redux
import {useSelector,useDispatch} from 'react-redux'
import { ratingProduct } from '../../../redux/product/product.action';
import {useParams,useHistory} from 'react-router-dom'
const UserRate = ({setUserRating}) => {
    const  [rating,setRating] = useState(null)
    const history = useHistory()
    const {currentUser} = useSelector(state => state.user)
    const [input,setInput] = useState('')

    let {id} = useParams()
    const dispatch = useDispatch()
    const dropIn = {
        hidden : {
          y : '-100vh',
          opacity : 0
        },
        visible : {
         y : '0vh',
         opacity: 1,
         transition : {
             duration : 0.1,
             type : 'spring',
             damping : 25,
             stiffness : 500
         }
        }
        ,
        exit : {
         y : '100vh',
         opacity:  0
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(!currentUser) {
            history.push('/login')
        }
        dispatch(ratingProduct(rating,id,currentUser,input))
        setUserRating(false)
    }
    return (
        <Container onSubmit = {handleSubmit} >
         <motion.div
           variants = {dropIn}
           initial = 'hidden'
           animate = 'visible'
         >
            <textarea onChange = {(e) => setInput(e.target.value)} />
        
            <StartContainer>
                {[...Array(5)].map((star,i) => {
                    const ratingValue = i+1
                    return (
                        <label>
                         <input 
                           type="radio" 
                           name="rating" 
                           value ={ratingValue} 
                           onClick = {() => setRating(ratingValue)}/>
                          <StarIcon 
                          style = {{color : `${ratingValue <= rating ? 'yellow' : 'gray'}`}}
                          className = 'star' />
                        </label>
                    )
                })}
            </StartContainer>
            <ButtonContainer>
                <button type = 'submit' className = 'submit'>Submit</button>
                <button className = 'close' onClick = {() => setUserRating(false)}>Close</button>
            </ButtonContainer>
           </motion.div> 
        </Container>
    )
}

export default UserRate
const Container = styled.form`
 > div {
    background-color: #fffbf8;
    border : 1px solid #f9ede5;
    padding: 25px;
   padding-left :40px;
   > textarea {
      width: 100%;
      height: 100px;
      border : 1px solid #e2e2e2;
      font-size : 18px;
      padding : 10px 0 0 20px;
      font-weight: 700;
      &:focus {
          outline : none
      }
  }
 }
  
`
const StartContainer = styled.div`
  > label {
      > input[type = 'radio'] {
          display : none
      }
      .star {
          font-size : 27px;
          cursor : pointer
      }
  };
  margin : 10px 0
`
const ButtonContainer = styled.div`
  > button {
      border : none;
      width : 150px;
      color : white;
      font-weight : 700;
      cursor : pointer;
      margin-left: 10px;
      padding : 9px 0;
  }
  margin-left : -10px;
  .submit {
     background-color: #ee4d2d;
  }
  .close {
      background-color: #979797;
  }
`