import React from 'react'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Fade from 'react-reveal/Fade';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useGlobalState } from '../context/GlobalState';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Member = ({member}) => {
    const {deleteMember,changeActiveMember,getIdEditMember,showDetailMember}  =  useGlobalState() 

    return (
      <Fade left>
        <div className = 'flex items-center justify-between py-1 '>
          
          <div className = 'w-3/12 flex justify-between'>
           <span className = 'text-black-600 font-medium text-lg'>{member.name}</span>
           <span className  = 'text-black-600 font-medium '>{member.phone}</span>
          </div>
          <div className = 'w-3/12 flex justify-between'>
           <div>
             <CheckBoxIcon 
              onClick = {() => changeActiveMember(member.id)}
             className = {`${member.active ?  'check' : 'noappear'} mr-5 cursor-pointer `} />
           </div>
           
           <div>
               <MoreHorizIcon 
               onClick = {() => showDetailMember(member)}
               className = 'cursor-pointer '/>
               <EditOutlinedIcon 
                onClick = {() => getIdEditMember(member.id)}
                className = 'mx-1 cursor-pointer text-blue-900 text-opacity-100 ' />
               <DeleteOutlineOutlinedIcon 
                onClick = {() => deleteMember(member.id)}
                className = 'cursor-pointer text-red-900 text-opacity-100' />
           </div>
          </div>
          </div>
          </Fade>
          
        
    )
}

export default Member
