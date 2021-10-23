import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import google from '../../assets/google.jpg'
import AppleIcon from '@mui/icons-material/Apple';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {signInWithEmail, signInWithGoogle, signInWithFacebook} from '../../redux/user/user.actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const dispatch = useDispatch()
    const {userErrorLogin} = useSelector(state => state.user)
    const [user,setUser] = useState({
        email : '',
        password : ''
    })
    const {email,password} = user
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(signInWithEmail({email, password}))
    }

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    useEffect(() => { 
       if(userErrorLogin) {
        toast.error(userErrorLogin)
       }
    },[userErrorLogin])

    return (
        <Container>
          <TopContainer>
              <Title>Log In</Title>
              <FormContainer onSubmit = {handleSubmit}>
                  <Input type="text" placeholder = 'Email' required value = {email} name = 'email' onChange = {handleChange} />
                  <Input type="password" placeholder = 'Password' required value = {password} name = 'password' onChange = {handleChange} />
                  <Button type = 'submit'>
                      LOG IN
                  </Button>
                  <span><Link to ='/resetPassword'>Reset password</Link></span>
                 
              </FormContainer>
          </TopContainer>
          <Horizontal>
              <Line />
                <span>OR</span>
              <Line />
          </Horizontal>
          <BottomContainer>
            <WrapperBottom>  
             <button  onClick = {() => dispatch(signInWithFacebook())}  style = {{backgroundColor : '#1877f2'}}>
                 <FacebookOutlinedIcon />
                 <span>Facebook</span>
             </button>
             <button  onClick = {() => dispatch(signInWithGoogle())} style = {{backgroundColor : '#4285f4'}}>
                 <img src={google} alt="goggle" />
                <span>Google</span>
             </button>
             <button  style = {{backgroundColor : '#000000'}}>
                <AppleIcon />
                 <span>Apple</span>
             </button>
            </WrapperBottom>
            <p>New to Shoppe ? <span><Link to = 'signup'> Sign up</Link></span></p>
          </BottomContainer>
          <ToastContainer />
        </Container>
    )
}

export default SignIn
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
 > .MuiSvgIcon-root {
     
     
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
const Horizontal = styled.div`
 /* width: 100%;
 border: 1px solid #dbdbdb;
 margin : 15px 0 */
 display: flex;
 align-items: center;
 
 > span {
     color : #dbdbdb;
     padding : 0 16px;
 }
`
const Line = styled.div`
border: 1px solid #f0eeee;
flex: 1;
`
const BottomContainer = styled.div`
margin-top : 20px;

 > p {
     padding : 30px 0 50px 0;
     color : gray;
     text-align: center;
     font-size: 15px;
     
     > span {
         
         font-weight: 900;
         cursor: pointer;
         >a {
            color :#ff5722;
            text-decoration : none
         }
     }
 }
`
const WrapperBottom = styled.div`
  display: flex;
  margin-left: -10px;
 > button {
     display: flex;
     align-items: center;
     justify-content: space-around;
     height: 40px;
     flex : 1;
     margin-left: 10px;
     border : none;
     padding-left: 6px;
     color : white;
     font-size: 16px;
     font: 600;
     transition: 0.6s;
      &:hover {
     opacity: 0.5;
     }
     cursor : pointer;
    > img {
        width: 35px;
        object-fit: cover;
    }
}
`