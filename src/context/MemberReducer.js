const MemberReducer = (state, {type,payload}) => {
   switch(type) {
       case 'ADD_MEMBER':
        return {
            ...state,
            members : [...state.members,payload]
        }
        case  'OPEN_ADD_FORM' :
         return {
             ...state,
             isOpenForm : !state.isOpenForm,
             idEdit : ''
         }
        case 'DELETE_MEMBER' :
         return {
             ...state,
             members : state.members.filter(member => member.id !== payload)
         }
         case 'CHANGE_ACTIVE_MEMBER' :
         return {
             ...state,
             members : state.members.map(member => member.id === payload ? {...member,active : !member.active} : member)
         }
         case 'GET_ID_EDIT_MEMBER' :
             return {
                 ...state,
                 idEdit : payload,
                 isOpenForm : false
             }
        case 'UPDATED_MEMBER' :
            return {
                ...state,
                members : [payload,...state.members.filter(member => member.id !== payload.id)],
                idEdit : ''  
            }
        case 'SHOW_DETAIL_MEMBER' :
            return {
                ...state,
                detailMember : {...payload,img: 'https://i.stack.imgur.com/l60Hf.png'}
            }
        case 'HIDE_DETAIL_MEMBER' :
            return {
                ...state,
                detailMember : {}
            }
        case 'CLOSE_EDIT_FORM' :
            return {
                ...state,
                idEdit : ''
            }
       default :
        return state
   }
}

export default MemberReducer