import { useEffect } from "react";
// pages
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/Home/HomePage";
import ResetpasswordPage from "./pages/ResetpasswordPaga/ResetpasswordPage";
import Adminpage from './pages/Adminpage/Adminpage'
import ProductPage from "./pages/ShowProduct/ProductPage";
//redux and firebase
import { useSelector, useDispatch } from "react-redux";
import { auth, handleProfileUser } from "./firebase/utils";
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import {getCurrentUser} from './redux/user/user.actions'
//components
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import SimilarProduct from './components/SimilarProduct/SimilarProduct'
import MyAccount from "./components/MyAccount/MyAccount";
import PurchaseUser from "./components/PurchaseUser/PurchaseUser";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProductManager from "./components/Admin/ProductManager/ProductManager";
import UserManager from "./components/Admin/UserManager/UserManager";
import OrderManager from "./components/Admin/OderManager/OrderManager";
//layout
import ProductFilter from "./layouts/ProductFilter";
import UserLayout from "./layouts/UserLayout";
import CartLayout from "./layouts/CartLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const {currentUser} = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log(currentUser)
  
  const authListener = () => {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const useRef = await handleProfileUser(userAuth)
        useRef.onSnapshot(snapShot => {
          dispatch(getCurrentUser({
           id : snapShot.id,
           ...snapShot.data()
          }))
        })
      }
 
      else{
       dispatch(getCurrentUser(userAuth))
      }
    })
   }
 
   useEffect(() => {
     authListener()
     return () => authListener
   },[])

  return (
    <Router>
      <Switch>
        <Route exact path ='/'>
            <HomePage />
          </Route>
        {/* authentication */}
        <Route path = '/login'>
         {currentUser ? <Redirect to ='/' /> : <LoginPage />  } 
        </Route>

        <Route path = '/signup'>
         {currentUser ? <Redirect to ='/' /> :  <SignUpPage /> } 
        </Route>

        <Route path = '/resetPassword'>
         {currentUser ? <Redirect to ='/' /> :  <ResetpasswordPage /> } 
        </Route>

        <Route path = '/admin'>   
        {(currentUser && currentUser.userRoles.includes('admin')) ?   <Adminpage /> : <Redirect to ='/' />  }     
        </Route>

        {/* Admin */}
        <Route path = '/admin-product' render = {() => (
           <AdminLayout>
              <ProductManager />
            </AdminLayout>
        )} />
        <Route path = '/admin-user' render = {() => (
           <AdminLayout>
              <UserManager />
            </AdminLayout>
        )} />
        <Route path = '/admin-history' render = {() => (
           <AdminLayout>
              <OrderManager />
            </AdminLayout>
        )} />
        
        {/* product */}
        <Route path = '/category' render = {() => (
           <ProductFilter>
              <CategoryProduct />
            </ProductFilter> 
        )} />
         
        <Route path = '/searchProduct' render = {() => (
             <ProductFilter>
              <SearchProduct />
           </ProductFilter> 
        )}/>
        <Route path = '/similarProduct' render = {() => (
            <ProductFilter>
             <SimilarProduct />
          </ProductFilter> 
        )} />
        <Route path = '/showProduct/:id'>
          {<ProductPage />}
        </Route>
        {/* user */}
        <Route path = '/user' render = {() => (
           <UserLayout>
              <MyAccount />
            </UserLayout>
        )}>
          {!currentUser && <Redirect to ='/' />}
        </Route>

        <Route path = '/purchase' render = {() => (
           <UserLayout>
              <PurchaseUser />
            </UserLayout>
        )}>
          {!currentUser && <Redirect to ='/' />}
        </Route>
        {/* cart */}
        <Route path = '/cart' render = {() => (
           <CartLayout>
              <Cart />
            </CartLayout>
        )}>
          {!currentUser && <Redirect to ='/login' />}
        </Route>
        {/* checkout */}
        <Route path = '/checkout' render = {() => (
           <CartLayout>
              <Checkout />
            </CartLayout>
        )}>
          {!currentUser && <Redirect to ='/' />}
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
