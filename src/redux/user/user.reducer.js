import userTypes from "./user.types";

const initialState = {
    currentUser : null,
    userErrorLogin : '',
    resetPassSuccess : false,
    resetPassErr : "",
    editSuccess : false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case userTypes.GET_CURRENT_USER :
          return {
              ...state,
              currentUser : action.payload
          }
        case userTypes.SIGN_OUT_USER :
            return {
                ...state,
                ...initialState
            }
        case userTypes.USER_ERROR_LOG_IN :
            return {
                ...state,
                userErrorLogin : action.payload
            }
        case userTypes.USER_RESET_SUCCESS :
            return {
                ...state,
                resetPassSuccess : action.payload,
                resetPassErr : ''
            }
        case userTypes.USER_RESET_ERROR :
            return {
                ...state,
                resetPassErr : action.payload
            }
        case userTypes.EDIT_USER_SUCCESS :
            return {
                ...state,
                editSuccess : action.payload
            }
        default :
          return state
    }
}

export default userReducer