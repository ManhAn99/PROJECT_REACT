import React from 'react'
import Review from './Review'
import {Typography, Button, Divider} from '@material-ui/core'
const PaymentForm = ({checkoutToken,backStep,nextStep,refreshCart,timeOut}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        nextStep()
        refreshCart()
        timeOut()
    }

    return (
        <>
           <Review checkoutToken = {checkoutToken} />
           <Divider />
           <div style = {{marginTop : '10px'}}>
               <form onSubmit = {handleSubmit}>
                   <div style = {{display : 'flex', justifyContent : 'space-between'}}>
                       <Button variant = 'outlined' onClick = {backStep}>Back</Button>
                       <Button type = 'submit' variant = 'contained' color = 'primary'>Next</Button>
                   </div>
               </form>
           </div>
        </>
    )
}

export default PaymentForm
