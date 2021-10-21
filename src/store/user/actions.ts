
import {GET_USER_BY_EMAIL, GET_USER_BY_EMAIL_SUCCESS, UserActionTypes,User,UserEditTypes, EDIT_USER, EDIT_USER_SUCCESS} from './types'

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

export const editUserInfo = (userId:string,value:any) => {
    return {
        type:EDIT_USER,
        info:{id:userId,...value}
    }
}

export const editUserInfoSuccess = (payload:User) => {
    return {
        type:EDIT_USER_SUCCESS,
        payload
    }
}