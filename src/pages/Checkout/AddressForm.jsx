import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {useGlobalState} from '../../context/GlobalState'
const WrapperForm = styled.form`
 display : flex;
 flex-direction : column;
 justify-content : space-between;
 min-height : 70vh
`
const InputContainer = styled.div`
 display : flex;
 flex-wrap : wrap;

`
const Input = styled.input`
 flex: 1;
 margin : 10px ;
 padding : 10px;
 box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
 border : none;
 
 &:focus{
     outline : none
 }
`

const ButtonContainer = styled.div`
 margin : 0 10px;
 display : flex;
 justify-content : space-between
`
const Button = styled.button`
 border : none;
 padding : 10px 30px;
 cursor : pointer;
 background-color : ${props => props.type === 'back' ? 'red' : 'green'};
 color : white;
 font-weight : 600;
 transition : 0.6s;
 &:hover{
   opacity : 0.6
 }

`
const AddressForm = ({nextStep}) => {
    const {getOrder,data} = useGlobalState()
    const {order} = data
    const [info,setInfo] = useState({})

    const handleOnChange = (e) => {
     const nameField = e.target.name 
     const valueField = e.target.value 
     setInfo({...info,[nameField] : valueField})
    }
    const onSubmit = e => {
       e.preventDefault() 
       getOrder(info)
       nextStep()
    }
    console.log(order)
    return (
        <WrapperForm onSubmit = {onSubmit} >
          <InputContainer>
            <Input 
            placeholder = 'Name' 
            value = {info.name} 
            name = 'name'  type = 'text' 
            required  
            onChange = {handleOnChange} />
            <Input 
            placeholder = 'Phone'
            value = {info.phone} 
            name = 'phone' 
            type = 'number' 
            required  
            onChange = {handleOnChange} />
            <Input 
            placeholder = 'Email' 
            value = {info.email} 
            name = 'email'  
            type = 'email'  
            onChange = {handleOnChange} />
            <Input 
            placeholder = 'Address1' 
            value = {info.address1} 
            name = 'address1' 
            type = 'text' 
            required  
            onChange = {handleOnChange} />
            <Input 
            placeholder = 'Address2' 
            value = {info.address2}  
            name = 'address2' 
            type = 'text' 
            onChange = {handleOnChange} />
            <Input 
            placeholder = 'Facebook' 
            value = {info.facebook}  
            name = 'facebook' 
            type = 'text' 
            onChange = {handleOnChange} />
          </InputContainer>
          <ButtonContainer>
              <Link to = '/cart' style = {{textDecoration : 'none'}}><Button type = 'back' >BACK</Button></Link>
              <Button type = 'submit' >NEXT</Button>
          </ButtonContainer>
        </WrapperForm>
    )
}

export default AddressForm
