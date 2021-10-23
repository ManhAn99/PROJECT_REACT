import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {motion} from 'framer-motion'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import firebase from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadImage from '../../../../assets/uploadproduct.png'
//actions
import { addProduct } from '../../../../redux/product/product.action';
import { toggleAddFormProduct } from '../../../../redux/admin/admin.action';
//data
import { CategoryData } from '../../../../data';
//responsive
import { mobile } from '../../../../responsive';

const AddFormProduct = () => {
    const dispatch = useDispatch()
    const [image,setImage] = useState('')
    const [newProduct, setNewProduct] = useState({
        name : '',
        productImageURL : '',
        price : '',
        category : CategoryData[0].value,
        rate : 1,
        description : ''
    })
    const {name, productImageURL, price,category,rate,description} = newProduct
    const dropIn = {
        hidden : {
          y : '-100vh',
          opacity : 0
        },
        visible : {
         y : '0vh',
         opacity: 1,
         transition : {
             duration : 0.1,
             type : 'spring',
             damping : 25,
             stiffness : 500
         }
        }
        ,
        exit : {
         y : '100vh',
         opacity:  0
        }
    }
    const handleChange = e => {
        const {name,value} = e.target;
        setNewProduct({
            ...newProduct,
            [name] : value
        })
    }
    const upLoadHandleChange = e => {
      if(e.target.files[0]) {
        setImage(e.target.files[0])
      }
    }
    const handleUpload = () => {
      if(!image) {
        toast.error("Pleasa choose the image")
        return 
      }
      toast.success("Upload image success!")
      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image)
      uploadTask.on('state_changed', snapshot => {
          console.log('snapshot')
      }, (err) => {
          console.log(err)
      }, () => {
          firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => {
              setNewProduct({
                  ...newProduct,
                  productImageURL : url
              })
          })
      })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(
            addProduct(newProduct)
        )
        dispatch(toggleAddFormProduct(false))
    }
    return (
        <Container>  
        <motion.div 
        variants = {dropIn}
        initial = 'hidden'
        animate = 'visible'
        exit = 'exit'
       > 
          <FormContainer onSubmit = {handleSubmit}>
              <h2>Add Product</h2>
              <input type="text" name = 'name' required placeholder = 'Name' onChange = {handleChange} value = {name} />
              <input type="number" name = 'price' required placeholder = 'Price' onChange = {handleChange} value = {price} />
              <textarea type="text" name = 'description' required placeholder = 'Description' onChange = {handleChange} value = {description} />
              
              <SelectContainer>
                  <div>
                  <select onChange = {e => setNewProduct({...newProduct,category : e.currentTarget.value})} value = {category} >
                   {CategoryData.map((doc,index) => (
                       <option key = {index} value = {doc.value}>{doc.name}</option>
                   ))}
                 </select>
              <select   onChange = {e => setNewProduct({...newProduct,rate : e.currentTarget.value})} value = {rate} >
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>      
              </select>
                  </div>
                <UploadContainer>
                <img src= {productImageURL ? productImageURL : uploadImage  } alt="images" />
                <div>
                <label className="custom-file-upload">
                   <input type="file" onChange = {upLoadHandleChange} />
                    <FileUploadIcon />
                </label>
                <p>{image.name}</p>
                </div>
                <input onClick = {handleUpload} value = 'Upload Image' className = 'upload-image' type = 'button'/>
                  </UploadContainer>
              </SelectContainer>       
               <div>
                   <button className = 'add' type = 'submit' >Add product</button>
                   <button className = 'close' onClick = {() => dispatch(toggleAddFormProduct(false))}>Close</button>
               </div>
          </FormContainer>
        </motion.div> 
        <ToastContainer />
      </Container>
    )
}

export default AddFormProduct

const Container = styled.div`
 position: fixed;
 top : 0;
 left: 0;
 width: 100%;
 background-color: rgba(0,0,0,0.6);
 display : flex;
 height: 100vh;
 justify-content: center;
 z-index : 2000;
 ${mobile({padding : "0 20px",paddingBottom : '40px'})}
`
const FormContainer = styled.form`
 background-color: white;
 padding : 20px;
 margin-top :10px;
 ${mobile({margin : "0px"})}
 > h2 {
     color : black;
     text-align: center;
 }

 > input,textarea {
     width: 100%;
     margin : 10px 0 ;
     padding : 7px;
     padding-left: 15px;
     border : 1px solid #d6d3d3;
     font-size: 14px;
     &:focus {
         outline: none;
     }
 }
 > div {
     display: flex;
     align-items: center;
     margin-left: -20px;
     > button {
         color : white;
         cursor : pointer;
         border : none;
         padding : 7px;
         margin-left: 20px;
         width: 100px;
         font-size: 14px;
     }
     .add {
        background-color: green;
     }
     .close {
         background-color: #b4b3b3;
     }
 }
`
const SelectContainer = styled.div`
   display : flex;
   flex-direction: column;
   align-items: flex-start !important;
   padding : 0 20px;
   > div {
    > select {
     width : 300px;
     margin: 20px 0;
     padding : 0 7px;
     font-size: 14px;
     padding-left: 15px;
     width: 100px;
     display: block;
     border : 1px solid #d6d3d3;
     &:focus {
         outline: none;
     }
   }
   }
   
`
const UploadContainer = styled.div`
 display : flex;
 align-items: center;
 margin-bottom : 20px ;
 > img {
     width : 150px;
     height : 150px;
     object-fit : cover
 }
 input[type="file"] {
    display: none;
}
.custom-file-upload {
    display: inline-block;
    padding: 6px ;
    cursor: pointer;
}
.upload-image {
    border : none;
    color : white;
    padding : 5px;
    cursor : pointer;
    background-color: #000000;
}
div {
    display : flex;
    flex-direction: column;
    align-items: center;
     > p {
         font-size: 14px;
         margin-bottom: -10px;
     }
}

`