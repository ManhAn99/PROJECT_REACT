import React from 'react'
import { useGlobalState } from '../../context/GlobalState'
import styled from 'styled-components'
import { Divider } from '@mui/material'
const ContainerForm = styled.form``
const InfoUser  = styled.div`
 margin-bottom : 30px
`
const InfoContainer = styled.div`
 margin : 10px 0
`
const TitleInfo = styled.b`
 width : 80px;
 display : inline-flex;
 justify-content : space-between;
 margin-right : 6px
`
const TitleText = styled.span``
const InfoProduct = styled.div`
 display : flex;
 
`
const InfoProductContainer = styled.div`
 margin-top : 30px
`
const InfoProductItem = styled.div`
 display : flex;
 justify-content : space-between;
 align-items : center;
 margin : 10px 0px
`
const ImageContainer = styled.div`
 width : 100px;
 heigth : 100px
`
const Image = styled.img`
 width : 100%;
 height : 100%;
 object-fit : cover
`
const InfoProductText = styled.div`
 display : flex;
 align-items : center;
 margin-left : 10px
`
const NameProduct = styled.b``
const QuantityProduct = styled.span`
 margin-left : 5px
`
const PriceProduct = styled.span``
const TotalContainer = styled.div`
 display : flex;
 justify-content : space-between;
 margin : 20px 0
`
const TotalText = styled.b`
 font-size : 26px
`
const TotalPrice = styled.span`
 font-size : 22px
`
const ButtonContainer = styled.div`
 display : flex;
 justify-content : space-between
`
const Button = styled.button`
 padding : 10px 30px;
 color : white;
 border : none;
 background-color : ${props =>props.type === 'back' ? 'red' : 'green'};
 cursor : pointer;
 font-weight : 600;
 transition : 0.6s;
 &:hover{
     opacity : 0.6
 }

`
const PaymentForm = ({backStep,nextStep}) => {
    const {data} = useGlobalState()
    const {order} = data
    const {info,cart} = order
    const total = cart.reduce((a,b) => (
        a += b.count * b.price.raw
    ),0)
    const handleSubmit = e => {
       e.preventDefault()
       nextStep()
    }
    return (
        <ContainerForm onSubmit = {handleSubmit} >
            <InfoUser>
                {
                  info.map(information => (
                    <InfoContainer 
                    key = {information.value}>
                        <TitleInfo>
                            <TitleText>{information.label}</TitleText> : </TitleInfo>{information.value}
                    </InfoContainer>
                  ))
                }
            </InfoUser>
            <Divider />
            <InfoProductContainer>
             {cart.map(product => (
                 <InfoProductItem key = {product.id}>
                   <InfoProduct>
                       <ImageContainer>
                           <Image src = {product.media.source}/>
                       </ImageContainer>
                       <InfoProductText>
                           <NameProduct>{product.name}</NameProduct>
                           <QuantityProduct>x{product.count}</QuantityProduct>
                       </InfoProductText>
                   </InfoProduct>
                   <PriceProduct>{(product.count * product.price.raw).toString()} VND</PriceProduct>
               </InfoProductItem>
             ))}
            </InfoProductContainer>
            <Divider />
            <TotalContainer>
                <TotalText>Total : </TotalText>
                <TotalPrice>{total.toString()} VND</TotalPrice>
            </TotalContainer>
            <ButtonContainer>
                <Button type = 'back' onClick = {backStep}>BACK</Button>
                <Button  type = 'submit' >NEXT</Button>
            </ButtonContainer>
        </ContainerForm>
    )
}

export default PaymentForm
