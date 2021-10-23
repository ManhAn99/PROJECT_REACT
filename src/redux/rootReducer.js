import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import productReducer from './product/product.reducer'
import checkoutReducer from './checkout/checkout.reducer'
import adminReducer from './admin/admin.reducer'

const rootReducer = combineReducers({
    user : userReducer,
    productData : productReducer,
    checkoutData :  checkoutReducer,
    adminData : adminReducer
})

export default rootReducer