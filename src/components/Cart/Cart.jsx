import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core'
import useStyles from './style'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
const Cart = ({cart,updateProduct,removeProduct,emptyCart}) => {
    
    const classes = useStyles()
   
    const EmptyCart = () => (
        <Typography variant = 'subtitle1'>No Cart</Typography>
    )

    const FilledCart = () => (
        <>
          <Grid container spacing = {3}>
               {cart.line_items.map(item => (
                   <Grid item xs = {12} sm = {3} key = {item.id}>
                       <CartItem 
                       item = {item} updateProduct = {updateProduct} removeProduct = {removeProduct}/>
                    </Grid>
               ))}
          </Grid>

          <div className = {classes.cardDetails}>
             <Typography variant = 'h4'>
              Subtotal : {cart.subtotal.formatted_with_symbol}
            </Typography>

            <div>
                <Button
                  className = {classes.emptyButton}
                  size = 'large'
                  type = 'button'
                  variant = 'contained'
                  color = 'secondary'
                  onClick = {() => emptyCart()}
                >
                    Empty Cart
                </Button>

                <Button
                  className = {classes.checkoutButton}
                  size = 'large'
                  type = 'button'
                  variant = 'contained'
                  color = 'primary'
                  component = {Link}
                  to = '/checkout'
                >
                    Checkout
                </Button>
            </div>
           </div>
        </>
    )
    if(!cart.line_items) return 'Loading....'

    return (
         <Container>
            <Typography className = {classes.title} gutterBottom variant = 'h3'>Your Shopping Cart</Typography>
             {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
