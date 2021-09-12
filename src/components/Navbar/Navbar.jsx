import React from 'react'
import {ShoppingCart}from '@material-ui/icons'
import {AppBar,Toolbar,IconButton,Badge,Typography} from '@material-ui/core'
import logo from '../../assets/commerce.png'
import useStyles from './style'
import {Link,useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()
  
    return (
        <>
         <AppBar position = 'fixed' className = {classes.appBar} color ='inherit'>
             <Toolbar>
                 <Typography component = {Link} to = '/'  variant = 'h6' className = {classes.title} color = 'inherit'  >
                  <img src = {logo} alt = 'commerce' height = '25px' className = {classes.image}/>
                  E-Commerce
                 </Typography>
                 <div className = {classes.grow} />
                 <div className = {classes.button}>
                   {location.pathname === '/' && (
                      <IconButton aria-label = 'show cart items' color = 'inherit' component = {Link} to = '/cart'>
                         <Badge badgeContent = {totalItems} color = 'error'>
                           <ShoppingCart />
                         </Badge>
                      </IconButton>
                     )}
                 </div>
             </Toolbar>
         </AppBar>
        </>
    )
}

export default Navbar
