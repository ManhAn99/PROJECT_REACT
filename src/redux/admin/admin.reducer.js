import adminTypes from "./admin.types";

const initialState = {
    toggleAddForm : false,
    allUsers : [],
    allHistoryOrders : [],
    currentUserAdmin : null
}

const adminReducer = (state = initialState,action) => {
    switch(action.type) {
        case adminTypes.TOGGLE_ADD_FORM :
          return {
              ...state,
              toggleAddForm : action.payload
          }
        case adminTypes.GET_ALL_USER :
          return {
              ...state,
              allUsers : action.payload
          }
        case adminTypes.GET_ALL_HISTORY_ORDERS :
            return {
                ...state,
                allHistoryOrders : action.payload
            }
        case adminTypes.GET_CURRENT_USER_ADMIN :
            return {
                ...state,
                currentUserAdmin : action.payload
            }
        default :
          return state
    }
}

export default adminReducer