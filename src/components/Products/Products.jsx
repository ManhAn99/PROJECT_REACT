import React from 'react'
import {Grid} from '@material-ui/core'
import useStyles from './style'
import Product from './Product/Product'

const Products = ({products,handleAddProduct}) => {
    const classes = useStyles()
    return (
        <main className = {classes.content}>
            <div className = {classes.toolbar} />
            <Grid container justify = 'center' spacing = {4} >
                {products.map(product => (
                    <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                      <Product product = {product} handleAddProduct= {handleAddProduct} />
                    </Grid> 
                ))}
            </Grid>
        </main>
    )
}

export default Products
