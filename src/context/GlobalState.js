import {useContext,createContext,useReducer} from 'react'
import MemberReducer from './MemberReducer'
const initialState = {
    members : [],
    isOpenForm : false,
    idEdit : '',
    detailMember : {}
}


//create context
export const GlobalContext = createContext(initialState)

//useContext
export const useGlobalState = () => {
    return useContext(GlobalContext)
}

//provider component
export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(MemberReducer, initialState)

   //actions
   const addMember = (member) => {
       dispatch({
           type : 'ADD_MEMBER',
           payload : member
       })
       console.log(member)
   }
   const openAddForm = () => {
       dispatch({
           type : 'OPEN_ADD_FORM',
           
       })
   }
   const deleteMember = (id) => {
       dispatch({
           type : 'DELETE_MEMBER',
           payload : id
       })
   }
   const changeActiveMember = (id) => {
       dispatch({
           type : 'CHANGE_ACTIVE_MEMBER',
           payload : id
       })
      
   }
   const getIdEditMember = (idEdit) => {
       dispatch ({
           type : 'GET_ID_EDIT_MEMBER',
           payload : idEdit
       })

   }
   const closeEditForm = () => {
       dispatch({
           type : 'CLOSE_EDIT_FORM',
       })
   }
   
   const editMember = (updatedMember) => {
       dispatch ({
           type : 'UPDATED_MEMBER',
           payload : updatedMember
       })
   }

   const showDetailMember = (member) => {
       dispatch({
           type : 'SHOW_DETAIL_MEMBER',
           payload : member
       })
   }
   const hideDetailMember = () => {
       dispatch({
           type : 'HIDE_DETAIL_MEMBER',

       })
   }
    return (
        <GlobalContext.Provider value = {{
            data : state,
            addMember,
            openAddForm,
            deleteMember,
            changeActiveMember,
            getIdEditMember,
            editMember,
            showDetailMember,
            hideDetailMember,
            closeEditForm
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

