import { useState,useEffect } from 'react'
import { commerce } from './lib/commerce'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Products , Navbar,Cart, Checkout} from './components'
const App = () => {

  const [products,setProducts] = useState([])
  const [cart,setCart] = useState([])

  //get Products
  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  //get carts
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    setCart(data)
  }

  //Add product to cart
  const handleAddProduct = async (productId,quantity) => {
    const {cart} = await commerce.cart.add(productId,quantity)
    setCart(cart)
  }

  //update Product
  const updateProduct = async (productId,quantity) => {
    const {cart} = await commerce.cart.update(productId,{quantity})
    setCart(cart)
  }

  //remove product
  const removeProduct = async (productId) => {
    const {cart} = await commerce.cart.remove(productId)
    setCart(cart)
  }

  //empty cart
  const emptyCart = async () => {
    const {cart} = await commerce.cart.empty()
    setCart(cart)
  }

  //refresh cart
  const refreshCart = async () => {
    const cart = await commerce.cart.refresh()
    setCart(cart)
  }

  //get products when component render
  useEffect(() => {
   fetchProducts()
   fetchCart()
  }, [])
 


   return (
    <Router>
      <Navbar totalItems = {cart.total_items} />
      <Switch>
        <Route exact path = '/'>
         <Products products = {products} handleAddProduct=  {handleAddProduct} />
        </Route>
        <Route exact path = '/cart'>
         <Cart cart = {cart}  updateProduct = {updateProduct}  removeProduct = {removeProduct} emptyCart = {emptyCart}/>
        </Route>
        <Route exact path = '/checkout'>
         <Checkout cart = {cart} refreshCart = {refreshCart} />
        </Route>
      </Switch>
    </Router>
    
  )
}

export default App