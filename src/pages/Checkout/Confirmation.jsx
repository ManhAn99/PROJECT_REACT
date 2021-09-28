import React from 'react'
import styled from 'styled-components'
import {useGlobalState} from '../../context/GlobalState'
import {useHistory} from "react-router-dom"
const Form = styled.form`
 height : 60vh;
 display : flex;
 justify-content : space-between;
 flex-direction : column
`
const TitleTextContainer = styled.div``
const Text = styled.h2``
const Desc = styled.p`
 margin : 15px 0
`
const Button = styled.button`
 cursor : pointer;
 border : none;
 background-color : black;
 color : white;
 padding : 15px;
 font-weight  : 600;
 transition : 0.6s;
 &:hover{
     opacity : 0.6
 }
`
const Confirmation = () => {
    const {data,resetAll} = useGlobalState()
    const history = useHistory()
    const {order} = data
    const handleSubmit = e => {
        e.preventDefault()
        resetAll()
        history.push('/')
        console.log('a')
    }
    return (
        <Form onSubmit = {handleSubmit}>
           <TitleTextContainer>
             <Text>Hi , {order.info[0].value} </Text>
             <Desc>Thank you for purchasing our product. Your support and trust in us are much appreciated.</Desc>
           </TitleTextContainer>
         <Button type = 'submit'>CONTINUE SHOPPING</Button>
        </Form>
    )
}

export default Confirmation
