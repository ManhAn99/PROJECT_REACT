import React from 'react'
import {AddShoppingCart} from '@material-ui/icons'
import {Card,CardMedia,CardActions,CardContent,Typography,IconButton} from '@material-ui/core'
import useStyles from './style'
const Product = ({product,handleAddProduct}) => {
    const classes = useStyles()
    return (
        <Card className = {classes.root}>
          <CardMedia className = {classes.media} image = {product.media.source} title = {product.title} />
          <CardContent>
              <div className = {classes.cardContent}>
                  <Typography variant = 'h5' gutterBottom>
                      {product.name}
                  </Typography>
                  <Typography variant = 'h5' gutterBottom>
                      {product.price.formatted_with_symbol}
                  </Typography>
              </div>
              <Typography 
                 dangerouslySetInnerHTML = {{__html : product.description}}
                  variant = 'body2' color = 'textSecondary'/>
              <CardActions 
              onClick = {() => handleAddProduct(product.id,1)}
              disableSpacing className = {classes.cardActions}>
                 <IconButton aria-lable = 'add to cart'>
                     <AddShoppingCart />
                 </IconButton>
              </CardActions>
          </CardContent>
        </Card>
    )
}

export default Product
