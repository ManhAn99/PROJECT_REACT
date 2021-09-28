import React, {useState}from 'react'
import styled from 'styled-components'
import { Navbar, Footer} from '../../components'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'
import { mobile } from '../../responsive';
const Container = styled.div``
const Wrapper  = styled.div`
 width : 100%;
 min-height : 90vh;
 display : flex;
 align-items : center;
 justify-content : center;
 margin-top : 50px

`
const SubContainer = styled.div`
 width : 35%;
 min-height : 90%;
 box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
 padding : 20px ;
 box-sizing : border-box;
 ${mobile({width : '85%'})}
`
const TopContainer = styled.div`
 
`
const BottomContainer = styled.div`
 padding : 30px 0 0 0;
`
const steps = ['Shipping address', 'Payment details']
const CheckoutForm = () => {
    const [activeStep,setActiveStep] = useState(0)
    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }
    const backStep = () => {
        setActiveStep(activeStep - 1)
    }
    
    return (
        <Container>
            <Navbar />
             <Wrapper>
               <SubContainer>
                 <TopContainer>
                   <Stepper activeStep = {activeStep}>
                      {steps.map(step => (
                          <Step key = {step}>
                             <StepLabel>{step}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
                 </TopContainer>
                <BottomContainer>
                 {activeStep === steps.length 
                 ? <Confirmation /> 
                 : activeStep === 0 
                 ? <AddressForm nextStep = {nextStep}/> 
                 : <PaymentForm backStep = {backStep} nextStep = {nextStep}/>}
                 </BottomContainer>
               </SubContainer>
             </Wrapper>
            <Footer />
        </Container>
    )
}

export default CheckoutForm
