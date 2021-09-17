import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {mobile} from '../responsive'
const Container = styled.div`
 width : 100vw;
 height : 100vh;
 background : linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)) , url('https://assets.vogue.com/photos/5c86c8c29914d62d7ceb129a/master/w_2560%2Cc_limit/00-VW-top-f19-models.jpg') no-repeat ;
 display : flex;
 align-items : center;
 justify-content : center

`
const Wrapper = styled.div`
 padding : 20px;
 width : 25%;
 background-color : white;
 ${mobile({width : ' 75%'})}
`
const Form = styled.form`
  display : flex;
  flex-direction : column
`
const Title = styled.h1`
 font-size : 24px;
 font-weight : 300
`
const Input = styled.input`
 flex : 1;
 min-width : 40%;
 margin :  10px 0px ;
 padding : 10px
`

const Button = styled.button`
 width : 40%;
 border : none;
 padding : 15px 20px;
 background-color : teal;
 color : white;
 cursor : pointer;
 margin-bottom : 10px
`
const Link1 = styled.a`
 margin : 5px 0px;
 font-size : 12px;
 cursor : pointer;
 text-decoration : underline
`

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = 'username' />
                <Input placeholder = 'password' />
                <Button><Link to = '/' style = {{textDecoration :'none',color : 'white'}}>LOGIN</Link></Button>
                <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
                <Link1>CREATE A NEW ACCOUNT</Link1>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
