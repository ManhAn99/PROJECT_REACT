import React from 'react'
import Fade from 'react-reveal/Fade';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel } from '@material-ui/core';
import { useGlobalState } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const AddMember = () => {
  const { register, reset, handleSubmit } = useForm();
  const {addMember} = useGlobalState()
  const onSubmit = data => {
    addMember({...data,id : uuidv4()})
    reset()
  }
  return (
        <div className = 'flex items-center justify-center mt-10 '>
          <Fade top>
           <form 
           onSubmit = {handleSubmit(onSubmit)} 
           className = 'p-10  w-6/12 flex shadow-lg items-center justify-between flex-wrap'>
             <div className = 'w-5/12'>
               <TextField {...register("name")} label="Name" required className = 'w-full' />
              </div>
             <div className = 'w-5/12 '>
               <TextField {...register("phone")}  label="Phone" required  className = 'w-full' />
              </div>
             <div className = 'w-5/12 my-4'>
               <TextField {...register("email")}  label="Email" required type = 'email'  className = 'w-full'/>
               </div>
             <div className = 'w-5/12'>
               <TextField  {...register("age")}  label="Age" required  className = 'w-full' />
               </div>
             <div className = 'w-5/12'>
               <TextField {...register("address")}  required label="Address"   className = 'w-full'/>
               </div>
             <div className = 'w-5/12'>
               <TextField {...register("job")}  label="Job" required  className = 'w-full' />
               </div>    

             <div className = 'w-5/12 my-7'>
               <InputLabel>Active</InputLabel>
               <Select className = 'w-full' {...register("active")}  >
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
             <input type = 'submit' value = 'Add member' className = 'w-full p-2 cursor-pointer text-white bg-green-500'/>
           </form>
          </Fade>
        </div>
    )
}

export default AddMember
