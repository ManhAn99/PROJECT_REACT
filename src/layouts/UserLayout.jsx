import React from 'react'
import styled from 'styled-components'
import HeaderMain from '../components/HeaderMain/HeaderMain'
import Footer from '../components/Footer/Footer'
import SideBarUser from '../components/SideBarUser/SideBarUser'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

//redux
import {useDispatch, useSelector} from 'react-redux'
//actions
import { editUserSuccess } from '../redux/user/user.actions'
//responsive
import {mobile} from '../responsive'

const UserEditSuccess = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
     dispatch(editUserSuccess(false))
    }
    return (
       <EditSuccessContainer onClick = {handleClose}>
            <div>
              <CheckCircleOutlineOutlinedIcon className = 'check' />
              <span>Profile Updated</span>
            </div>
       </EditSuccessContainer>
    )
}

const UserLayout = ({children}) => {
    const {editSuccess} = useSelector(state => state.user) 
    return (
        <Container>
            <HeaderMain />
            <BodyContainer>
                <SideBarUser />
                {children}
            </BodyContainer>
            {editSuccess && <UserEditSuccess  />}
            <Footer />       
        </Container>
    )
}

export default UserLayout

const Container = styled.div`
 min-height: 100vh;
 background-color: #f5f5f5;
 position: relative;
`
const BodyContainer = styled.div`
 margin-top : 120px;
 min-height: calc(100vh - 120px);
 padding : 0 90px;
 padding-top: 20px;
 display: flex;
 ${mobile({padding :'0px',flexDirection : 'column'})}
`
const EditSuccessContainer = styled.div`
 position: fixed;
 top : 0;
 left : 0;
 width : 100%;
 height : 100vh;
 z-index : 1000;
 background-color: #05050567;
 display: flex;
 align-items : center;
 justify-content : center;
  >div {
      background-color: white;
      display : flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width : 400px;
      height: 150px;

      .check {
          color : green;
          font-size: 60px;
      }
      > span {
          padding : 10px;
          font-weight : 700;
          font-size : 22px
      }
  
    }
`