import {GET_USER_BY_EMAIL_SUCCESS, User, UserActionTypes} from './types'

const initialState:User = {
    _id:'',
    name:'',
    email:'',
    image:'',
    addr:'',
    emailVerified:false,
    createdAt:new Date(),
    updatedAt:new Date(),
}

export const userReducer = (
    state = initialState,
    action:UserActionTypes
):User => {
    switch(action.type){
        case GET_USER_BY_EMAIL_SUCCESS:
            return {...action.payload}
        default:
            return state
    }
    
}