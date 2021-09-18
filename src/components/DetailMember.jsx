import React from 'react'
import { useGlobalState } from '../context/GlobalState'
import ClearIcon from '@mui/icons-material/Clear';
const DetailMember = ({detailMember}) => {
    const {hideDetailMember} = useGlobalState()
    return (
        <div>
            <div className = 'flex items-center justify-between '>
                <h1 className = 'text-yellow-600 text-2xl font-semibold' >Detail Member</h1>
                <ClearIcon onClick = {hideDetailMember} className = 'cursor-pointer'/>
            </div>
            
            <div className = 'flex mt-10'>
                <div className = 'flex-1 '>
                    <img className = ' object-cover' src={detailMember.img} alt="profile" />
                </div>
                <div className = 'flex-1 px-10 flex flex-col justify-around'>
                     <div><span>Name : </span> {detailMember.name} </div>
                     <div><span>Address : </span> {detailMember.address} </div>
                     <div><span>Age : </span> {detailMember.age} </div>
                     <div><span>Job : </span> {detailMember.job} </div>
                     <div><span>Gender : </span> {detailMember.gender} </div>
                     <div><span>Phone : </span> {detailMember.phone} </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMember
