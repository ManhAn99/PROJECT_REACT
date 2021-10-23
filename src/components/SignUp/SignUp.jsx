import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import  {signUpWithEmail} from '../../redux/user/user.actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const dispatch = useDispatch()
    const [newUser,setNewUser] = useState({
        name : '',
        email :'',
        phone : '',
        password : '',
        confirmPassword : ''
    })
    const {name,email,phone,password,confirmPassword} = newUser
    const handleChange = e => {
        const {name, value} = e.target;
        setNewUser({
            ...newUser,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(password !== confirmPassword) {
            toast.warn("Password don't match")
            return 
        }

        dispatch(signUpWithEmail({
            name,
            email,
            phone,
            password
        }))
    }
    return (
        <Container>
          <TopContainer>
              <Title>Sign Up</Title>
              <FormContainer onSubmit = {handleSubmit} >
                  <Input type="text" placeholder = 'Name' name = 'name' onChange = {handleChange} required />
                  <Input type="email" placeholder = 'Email' name = 'email' onChange = {handleChange} required/>
                  <Input type="number" placeholder = 'Phone' name = 'phone' onChange = {handleChange} required/>
                  <Input type="password" placeholder = 'Password' name = 'password' onChange = {handleChange} required/>
                  <Input type="password" placeholder = 'Confirm Password' name = 'confirmPassword' onChange = {handleChange} required />
                  <Button type = 'submit'>
                      SIGN UP
                  </Button>
                  <span><Link to = '/login'>Login now</Link></span>     
              </FormContainer>
          </TopContainer> 
           <ToastContainer />
        </Container>
    )
}

export default SignUp

const Container = styled.div`
 background-color: white;
 border-radius: 3px;
 width: 420px;
 padding : 0 30px;
`
const Title = styled.h1`
 color : black;
 padding : 22px 0
`
const TopContainer = styled.div``
const FormContainer = styled.form`
 
 > span {
    
     font-size: 14px;
     line-height: 14.4px;
     font-weight: 700;
     cursor : pointer;
     > a {
         text-decoration: none;
         color : #0055aa;
     }
 }

`
const Input = styled.input`
 width: 100%;
 padding : 10px;
 border : 1px solid #dbdbdb;
 font-size: 14px;
 margin-bottom: 30px;
 background-color: white;
 font-weight : 700;
 &:focus {
     outline : none
 }

`
const Button = styled.button`
 font-size: 15px;
 width: 100%;
 padding : 10px 0;
 border : none;
 background-color: #ff5722;
 color : white;
 font-weight: 600;
 cursor : pointer;
 transition: 0.6s;
 &:hover {
    opacity: 0.5;
 }
`