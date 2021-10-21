
import {GET_USER_BY_EMAIL, GET_USER_BY_EMAIL_SUCCESS, UserActionTypes,User} from './types'

export const getUserByEmail = (email:string):UserActionTypes => {
    return {
        type:GET_USER_BY_EMAIL,
        payload:email
    }
}

export const getUserByEmailSuccess = (payload:User) => {
    return {
        type:GET_USER_BY_EMAIL_SUCCESS,
        payload
    }
}