import React,{useEffect, useState} from 'react'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core'
import useStyles from './style'
import { commerce } from '../../../lib/commerce'
import {Link} from 'react-router-dom'

const steps = ['Shipping address', 'Payment details']

const Checkout = ({cart ,refreshCart}) => {

    const [activeStep,setActiveStep] = useState(0)
    const [checkoutToken,setCheckoutToken] = useState()
    const [shippingData,setShippingData] = useState({})
    const [isFinished,setIsFinished] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        const generateToken = async () => {
            try{
                const token = await commerce.checkout.generateToken(cart.id, {type : 'cart'})
                console.log('token')
                 console.log(token)
                 setCheckoutToken(token)
            }
            catch(err) {
                console.log(err)
            }
        }

      generateToken()
    }, [cart])

    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }
    const backStep = () => {
        setActiveStep(activeStep - 1)
    }
    const next = (data) => {
       setShippingData(data)
       nextStep()
    }
    const timeOut = () => {
        setTimeout(() => {
          setIsFinished(true)
        },3000)
    }


    const Confirmation = () => (
         <>
            {isFinished ? (
                
               <div>
                 <Typography variant = 'h5'>Thank you for your purchase</Typography>
                 <Divider className = {classes.divider} />
                 <br />
                <Button component = {Link} to = '/' variant = 'outlined' type = 'button'>Back to home</Button>
             </div>
            ) : (
                <div className = {classes.spinner}>
                 <CircularProgress />
               </div>
            )}
         </>
    )

    const Form = () => activeStep === 0
    ? <AddressForm  checkoutToken = {checkoutToken} next = {next}/> 
    : <PaymentForm refreshCart = {refreshCart} timeOut = {timeOut} checkoutToken = {checkoutToken} backStep = {backStep} nextStep = {nextStep} /> 

    return (
        <>
        <div className = {classes.toolbar} />
        <main className = {classes.layout}>
            <Paper className = {classes.paper}>
                <Typography variant = 'h4' align = 'center'>Checkout</Typography>
                <Stepper activeStep = {activeStep} className = {classes.stepper}  >
                  {steps.map(step => (
                      <Step key = {step}  >
                       <StepLabel >{step}</StepLabel>
                       </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken &&  <Form />}
            </Paper>
        </main>
     </>
    )
}

export default Checkout
