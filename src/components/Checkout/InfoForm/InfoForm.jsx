import React,{useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
//actions
import { getInfoUser } from '../../../redux/checkout/checkout.actions'

const InfoForm = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
    const [infoUser,setInfoUser] = useState(currentUser)
    const {displayName,phone,address = ''} = infoUser
    const history = useHistory()
    const handleCancel = () => {
        history.push('/cart')
    }
    const handleChange = e => {
        const {name,value} = e.target;
        setInfoUser({
            ...infoUser,
            [name] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getInfoUser(infoUser))
    }
    return (
        <Container>
           <form onSubmit = {handleSubmit}>
           <h3>Infomation</h3>
            <input 
              type="text" 
              placeholder = 'Name' 
              name = 'displayName' 
              value = {displayName} 
              onChange = {handleChange}
              required />
            <input 
              type="number" 
              placeholder = 'Phone' 
              name = 'phone' 
              value = {phone} 
              onChange = {handleChange}
              required />
            <input 
              type="text" 
              placeholder = 'Address' 
              name = 'address' 
              value = {address} 
              onChange = {e => setInfoUser({...infoUser,address : e.target.value})}
              required />
            <div className = 'buttons'>
                 <button type = 'submit' className = 'submit' >SUBMIT</button>
                 <button className = 'cancel' onClick = {handleCancel}>CANCEL</button>
            </div> 
           </form>
        </Container>
    )
}

export default InfoForm
const Container = styled.div`
 position: fixed;
 top: 0;
 left : 0;
 width : 100%;
 height : 100vh;
 background-color: rgba(0,0,0,0.4);
 z-index : 20;
 display : flex;
 justify-content: center;
 >form {
     background-color: white;
     width : 380px;
     height: 70vh;
     margin-top: 34px;
     padding : 20px;
     display: flex;
     flex-direction: column;
     >h3 {
         padding-top : 10px;
         font-size : 22px;
         color : #ee4d2d;
     }
     >input {
         width : 100%;
         padding : 15px;
         border : 1px solid #cfcece;
         margin : 10px 0;
         font-weight: 700;
         font-size : 17px;
         &:focus {
             outline : none
         }
     }
     .buttons {
         flex : 1;
         display : flex;
         align-items: flex-end;
         justify-content: flex-end;
         margin-right: -10px;
         
         >button {
             border : none;
             cursor : pointer;
             padding : 10px 40px;
             margin-right: 10px;
             font-weight : 700;
         }
         .submit {
           color : white;
           background-color : #ee4d2d;
           transition : 0.7;
           &:hover {
               opacity: 0.6;
           }
         }
         .cancel {
           color : gray;
           background-color: transparent;
           transition : 0.7;
           &:hover {
               background-color: #d1d0d0;
           }
         }
     }
 }
`