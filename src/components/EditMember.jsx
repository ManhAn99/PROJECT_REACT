import React from 'react'
import Fade from 'react-reveal/Fade';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel } from '@material-ui/core';
import { useGlobalState } from '../context/GlobalState';

const EditMember = () => {
  const { register, reset, handleSubmit } = useForm();
  const {data,editMember,closeEditForm} = useGlobalState()
  const {idEdit} = data
  
  const onSubmit = data => {
    editMember({...data,id : idEdit})
    reset()
  }
  return (
        <div className = 'flex items-center justify-center mt-10 '>
          <Fade top>
           <form 
           onSubmit = {handleSubmit(onSubmit)} 
           className = 'p-10  w-6/12 flex shadow-lg items-center justify-between flex-wrap'>
             <div className = 'w-5/12'>
               <TextField {...register("name")} label="Name"  className = 'w-full' />
              </div>
             <div className = 'w-5/12 '>
               <TextField {...register("phone")}  label="Phone"   className = 'w-full' />
              </div>
             <div className = 'w-5/12 my-4'>
               <TextField {...register("email")}  label="Email" type = 'email'  className = 'w-full'/>
               </div>
             <div className = 'w-5/12'>
               <TextField  {...register("age")}  label="Age"   className = 'w-full' />
               </div>
             <div className = 'w-5/12'>
               <TextField {...register("address")}  label="Address"   className = 'w-full'/>
               </div>
             <div className = 'w-5/12'>
               <TextField {...register("job")}  label="Job"   className = 'w-full' />
               </div>    

             <div className = 'w-5/12 my-7'>
               <InputLabel>Active</InputLabel>
               <Select className = 'w-full' {...register("active")} >
                 <MenuItem value = {true}>Yes</MenuItem>
                 <MenuItem value = {false}>No</MenuItem>
               </Select>
             </div>  
             <div className = 'w-5/12'>
             <InputLabel>Gender</InputLabel>
               <Select  className = 'w-full' {...register("gender")} >
                 <MenuItem value = 'male'>Male</MenuItem>
                 <MenuItem value = 'female'>Female</MenuItem>
               </Select>
             </div>  
             <input type = 'submit' value = 'Edit member' className = 'w-full p-2 cursor-pointer text-white bg-green-500'/>
             <input onClick = {closeEditForm}  value = 'Close'  className = ' text-center mt-2 w-full p-2 cursor-pointer text-white bg-red-500'/>
            
           </form>
          </Fade>
        </div>
    )
}

export default EditMember

