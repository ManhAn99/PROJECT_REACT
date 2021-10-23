import React, {useState} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar';
import firebase from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';
//redux
import { useDispatch } from 'react-redux'
import { editUserStart } from '../../redux/user/user.actions'
//responsive
import { mobile } from '../../responsive';

const genders = [
    'Male', 'Female', 'Other'
]

const MyAccount = () => {
    const dispatch = useDispatch()
    const [image,setImage] = useState(null)
    const {currentUser} = useSelector(state => state.user)
    const [editUser,setEditUser] = useState(currentUser)
    const {displayName,phone,gender,email,shopName,birthDay,photoURL,id} = editUser

    const handleChange  = e => {
        const {name,value} = e.target
        setEditUser({
            ...editUser,
            [name] : value
        })
      
     
    }
    const upLoadHandleChange = e => {
        if(e.target.files[0]) {
          setImage(e.target.files[0])    
        }
    }

    const handleUpload =  () => {
        if(!image) {
            toast.error("Pleasa choose the image")
            return 
          }
          toast.success("Upload image success!")
          const uploadTask =  firebase.storage().ref(`users/${image.name}`).put(image)
            uploadTask.on('state_changed', snapshot => {
              console.log('snapshot')
          }, (err) => {
              console.log(err)
          }, () => {
              firebase.storage().ref('users').child(image.name).getDownloadURL().then(url => {
                  setEditUser({
                      ...editUser,
                      photoURL : url
                  })
              })
        })

         firebase.storage().refFromURL(photoURL).delete()
         setImage(null)
    }


    const handleSubmit = (e) => {
         e.preventDefault()
         dispatch(
            editUserStart(editUser,id)
        )
    }

    return (
        <Container>
            <TopContainer>
                <h3>My Profile</h3>
                <h4>Manage and protect your account</h4>
            </TopContainer>
            <BodyContainer>
               <LeftContainer onSubmit = {handleSubmit}>
                  <div>
                      <span>Name</span>
                      <input type="text"  name = 'displayName' value = {displayName} onChange = {handleChange} />
                  </div>
                  <div>
                      <span>Email</span>
                      <p>{email}</p>
                  </div>
                  <div>
                      <span>Phone Number</span>
                      <input type="number" name = 'phone' value ={phone && phone} onChange = {handleChange} />
                  </div>
                  <div>
                      <span>Shop Name</span>
                      <input type="text" name = 'shopName' value = {shopName && shopName} onChange = {handleChange} />
                  </div>
                  <div>
                      <span>Gender</span>
                      <GenderSelect>
                            {
                                genders.map((g,index) => (
                                   <div className = 'gender' key = {index}>
                                     <input 
                                      type="radio" 
                                      value = {g} 
                                      onChange = {e => setEditUser({...editUser,gender : e.currentTarget.value})}
                                      checked = {g === gender && true}
                                      />
                                     <label >{g}</label>
                                    </div>
                                ))
                            }
                      </GenderSelect>
                  </div>
                  <div>
                      <span>Date Of Birth</span>
                      <input type="text" name = 'birthDay' value = {birthDay && birthDay} onChange = {handleChange} />
                  </div>
                  <div>
                      <button type = 'submit'>Save</button>
                  </div>
               </LeftContainer>
               <RightContainer>
                   <div>
                   { photoURL ? (
                      <Avatar sx = {{width : 160, height : 160}} alt= {'name'} src= {photoURL} className = 'avatar' />
                    ) : (
                      <Avatar sx = {{width : 160, height : 160}} >{ displayName[0]}</Avatar>
                  )}
                        <label className="custom-file-upload">
                         <input type="file" onChange = {upLoadHandleChange} />     
                         <span>Select Image</span>
                         
                      </label>
                      {image && <button onClick = {handleUpload}>Upload Image</button>}
                   </div>
               </RightContainer>
            </BodyContainer>
            <ToastContainer />
        </Container>
    )
}

export default MyAccount
const Container = styled.div`
 flex : 1;
 background-color: white;
 padding : 0 25px
`
const TopContainer = styled.div`
  border-bottom: 1px solid #e4e4e4;
  padding : 15px 0 20px 0;
  > h4 {
      color : gray;

  }
`
const BodyContainer = styled.div`
  display: flex;
  padding : 25px 0;
  ${mobile({flexDirection :'column'})}
`
const LeftContainer = styled.form`
 flex : 1;
 padding-right: 30px;
 display : flex;
 flex-direction: column;
 align-items: center;
 div {
     display : flex;
     width : 95%;
     align-items: center;
     justify-content: flex-start;
     margin-bottom: 25px;
     > button {
         color : white;
         border : none;
         cursor: pointer;
         background-color: #f05d40;
         margin-left: 120px;
         font-weight: 700;
         padding : 10px 20px
     }
     > input {
         border : 1px solid #e2e2e2;
         border-radius: 3px;
         padding : 10px ;
         font-weight : 700;
         color : grey;
         font-size : 18px;
         &:focus {
            outline : 1px solid #5a5a5a;
         }
     }
     > span {
     width : 150px;
     font-weight : 700
    }
    > p {
          width : 100%;
          font-weight : 700;
          color : grey
    }
   > input {
     width : 100%
   }
 }
`

const RightContainer = styled.div`
 background-color: white;
 width : 280px;
 display: flex;
 justify-content: center;
  padding-top : 60px;
  border-left : 1px solid #e6e6e6;
 > div {
     display: flex;
     align-items: center;
     flex-direction : column;
     
     input[type="file"] {
    display: none;
}
.custom-file-upload {
    display: inline-block;
    padding: 16px ;
    cursor: pointer;
    margin-top : 20px;
    >span {
         background-color: transparent;
         border : 1px solid #c7c6c6;
         font-weight : 700;
         color : gray;
         cursor : pointer;
         padding : 10px 20px;
         margin-top : 20px;
         font-size : 17px
     }
 }
     >button {
         background-color: #f05d40;;
         border : none;
         font-weight : 700;
         color : white;
         cursor : pointer;
         padding : 10px 18px;
         margin-top : 20px;
         font-size : 16px
     }
 }
 ${mobile({border :'none',width : '100%',})}
`

const GenderSelect = styled.div`
    width : 100%;
    display : flex;
    align-items: center;
    .gender {
        margin-bottom: -20px;
        width: 100px;
      
        >label {
            padding : 0 7px
        }
        label:before {
            border: 2px solid red;
        }
        > input[type='radio'] {
            width: 20px;
            cursor : pointer;
            
            &:focus {
                outline: none;
            }
        }
        
    }
     
`