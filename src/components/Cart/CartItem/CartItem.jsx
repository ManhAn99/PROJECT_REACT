import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './style'
const CartItem = ({item,updateProduct,removeProduct}) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image = {item.media.source} alt = {item.name} className = {classes.media} />
            <CardContent className = {classes.cardContent}>
                <Typography variant = 'h4'>{item.name}</Typography>
                <Typography variant = 'h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className = {classes.cartActions}>
                 <div className = {classes.buttons}>
                     <Button 
                     onClick = {() => updateProduct(item.id,item.quantity - 1)}
                     type = 'button' 
                     size = 'small'>
                         -
                    </Button>
                     <Typography>{item.quantity}</Typography>
                     <Button 
                     onClick = {() => updateProduct(item.id,item.quantity + 1)}
                     type = 'button' 
                     size = 'small'>
                         +
                     </Button>
                 </div>
                 <Button 
                 variant = 'contained' 
                 type = 'button' 
                 color = 'secondary'
                 onClick = {() => removeProduct(item.id)}
                 >
                     Remove
                    </Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
