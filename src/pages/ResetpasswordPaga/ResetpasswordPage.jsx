import React, {useState, useEffect} from 'react'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import styled from 'styled-components'
import userTypes from '../../redux/user/user.types'
import {useSelector, useDispatch} from 'react-redux'
import {resetPasswordStart} from '../../redux/user/user.actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router'
const ResetpasswordPage = () => {
    const [email,setEmail] = useState('')
    const dispatch = useDispatch()
    const {resetPassSuccess,resetPassErr} = useSelector(state => state.user)
    const history = useHistory()
    const handleChange = (e) => {
      setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
       e.preventDefault()
       
       dispatch(resetPasswordStart(email))    
    }
    useEffect(() => {
        if(resetPassErr) {
          toast.error(resetPassErr)
        }
      
     })
    useEffect(() => {
       if(resetPassSuccess) {
           dispatch({
               type : userTypes.USER_RESET_SUCCESS,
               payload : false
           })
           alert('Please go to the gmail to reset password')
           history.push('/login')
       }
    }, [resetPassSuccess]) 
    return (
        <Container>
            <HeaderLogin />
             <FormContainer onSubmit = {handleSubmit}>
                  <h2>Reset Password</h2>
                  <Input type="text" placeholder = 'Email' required value = {email} name = 'email' onChange = {handleChange} />
                  <Button type = 'submit'>
                      RESET PASSWORD
                  </Button>
               </FormContainer>
               <ToastContainer />
        </Container>
    )
}

export default ResetpasswordPage
const Container = styled.div`
 background-color: #e4e3e3;
 height: 100vh;
`
const FormContainer = styled.form`
 margin : 100px auto;
 display : block;
 width : 380px;
 background-color: #f0572b;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 padding : 15px;
 border-radius: 6px;
  > h2 {
      color : white;
      text-align: center;
  }

`
const Input = styled.input`
 width : 100%;
 border : none;
 padding : 10px;
 &:focus {
     outline : none
 }

`
const Button = styled.button`
 width: 100%;
 border : none;
 margin-top: 15px;
 cursor : pointer;
 padding : 5px 0;
 color : black;
 background-color: #e2e0e0;
`

