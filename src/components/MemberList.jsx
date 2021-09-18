import React from 'react'
import Member from './Member'
import { useGlobalState } from '../context/GlobalState'

const MemberList = () => {
    const {data} = useGlobalState()
    const {members} = data
    return (
        <div className = 'p-14 '>
          {
            members.length === 0 ? ('No Member') : (
               <>
                  <div className = 'flex items-center justify-between py-1 border-b-2 border-gray-600 '>
                <div className = 'w-3/12 flex justify-between'>
                 <span className = 'text-yellow-600 font-medium text-lg'>Name</span>
                 <span className  = 'text-gray-600 font-medium  pr-11'>Phone</span>
                </div>
                <div className = 'w-3/12 flex justify-between'>
                 <span className  = 'text-gray-600 font-medium'>Active</span>
                 <span className = 'text-gray-600 font-medium'> Actions</span>
                </div>
                
              </div>
               {members.map(member => (
                  <Member id = {member.id} member = {member} />
              ))}
               </>
            )
          }
        </div>
    )
}

export default MemberList
