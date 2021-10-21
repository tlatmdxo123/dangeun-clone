export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL" as const;
export const GET_USER_BY_EMAIL_SUCCESS = "GET_USER_BY_EMAIL_SUCCESS" as const;
export const GET_USER_BY_EMAIL_ERROR = "GET_USER_BY_EMAIL_ERROR" as const;

export const GET_USER_BY_ID = "GET_USER_BY_ID" as const;
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS" as const;
export const GET_USER_BY_ID_ERROR = "GET_USER_BY_ID_ERROR" as const;

export const EDIT_USER = "EDIT_USER" as const;
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS" as const;
export const EDIT_USER_ERROR = "EDIT_USER_ERROR" as const;

interface GetUserByEmailAction{
    type:typeof GET_USER_BY_EMAIL,
    payload:string
}
interface GetUserByEmailSuccessAction{
    type:typeof GET_USER_BY_EMAIL_SUCCESS,
    payload:User
}
interface GetUserByEmailErrorAction{
    type:typeof GET_USER_BY_EMAIL_ERROR,
    payload:string
}
interface EditUserSuccess{
    type:typeof EDIT_USER_SUCCESS,
    payload:User
}

export interface User{
    _id:string,
    name:string,
    email:string,
    image:string,
    addr?:string,
    emailVerified:boolean,
    createdAt:Date,
    updatedAt:Date
}

export enum UserEditTypes{
    ADDR='addr'
}

export type UserActionTypes = GetUserByEmailAction | GetUserByEmailSuccessAction | GetUserByEmailErrorAction | EditUserSuccess