import React from 'react'
import logo from '../assets/logo.jpg'
import AddIcon from '@material-ui/icons/Add';
import { useGlobalState } from '../context/GlobalState'
const Header = () => {
  const {openAddForm,data} = useGlobalState()
    return (
        <div className = 'p-4 flex items-center justify-between shadow-lg '>  
          <div className = 'flex items-center'>
            <div className = 'w-8 h-8 relative'>
                <img src={logo} alt="logo"  className = 'w-full h-full absolute left-0 top-0 object-cover'/>
             </div>
                <span className = 'pl-3 text-xl text-green-900 font-normal'>Member Management</span>
          </div>
            
           <div>
           <button 
             onClick = {() => openAddForm()}
             className = {`${data.isOpenForm ? 'bg-gray-400' : 'bg-yellow-500'} flex items-center text-sm justify-center  p-2 text-white rounded-md cursor-pointer hover:bg-yellow-300 delay-150`}
             >
            {data.isOpenForm  ? 'Close' : ( <><AddIcon /> Add Member </>  ) }
            </button>
           </div>
         </div> 
    )
}

export default Header
