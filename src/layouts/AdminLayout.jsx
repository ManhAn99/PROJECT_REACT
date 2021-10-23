import React,{useEffect} from 'react'
import styled from 'styled-components'
import HeaderAdmin from '../components/Admin/HeaderAdmin/HeaderAdmin'
import NavBarAdmin from '../components/Admin/NavBarAdmin/NavBarAdmin'
import DetailUser from '../components/Admin/UserManager/DetailUser/DetailUser'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
//actions
import { getUsersAndHistory } from '../redux/admin/admin.action'

//form
import AddFormProduct from '../components/Admin/ProductManager/AddFormProduct/AddFormProduct'
import EditFormProduct from '../components/Admin/ProductManager/EditFormProduct/EditFormProduct'
//responsive
import { mobile } from '../responsive'

const AdminLayout = ({children}) => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
    const {toggleAddForm, currentUserAdmin} = useSelector(state => state.adminData)
    const {currentProduct} = useSelector(state => state.productData)
    const history = useHistory()
    useEffect(() => {
       if(!currentUser || !currentUser.userRoles.includes('admin')) {
           history.push('/')
           return
       }
       dispatch(getUsersAndHistory())
    },[])
    return (
        <Container>
            <HeaderAdmin />
            <BodyContainer>
              <NavBarAdmin />
              <ContentContainer>
                  {children}
              </ContentContainer>
            </BodyContainer>
            {toggleAddForm && <AddFormProduct />}
            {currentProduct && <EditFormProduct />}
            {currentUserAdmin && <DetailUser />}
        </Container>
    )
}

export default AdminLayout
const Container = styled.div`
  min-height: 100vh;
  position : relative
`
const BodyContainer = styled.div`
 display: flex;
 ${mobile({flexDirection : "column"})}
`
const ContentContainer = styled.div`
 flex : 6;
 background-color: white;
 min-height: calc(100vh - 84px);
 padding : 30px;
 ${mobile({padding : "20px"})}
` 