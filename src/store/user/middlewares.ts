import {mergeMap, Observable,map,filter} from 'rxjs'
import {ofType,Epic,combineEpics} from 'redux-observable'
import { EDIT_USER, GET_USER_BY_EMAIL,User} from "./types";
import {ajax} from 'rxjs/ajax'
import { editUserInfoSuccess, getUserByEmailSuccess } from './actions';

export const getUserByEmailEpic:Epic = (action$) => action$.pipe(
    ofType(GET_USER_BY_EMAIL),
    mergeMap(action => 
        ajax.getJSON<User>(`/api/user/email/${action.payload}`).pipe(
            map((res) => getUserByEmailSuccess(res))
        )    
    )
)

export const editUserEpic:Epic = (action$) => action$.pipe(
    ofType(EDIT_USER),
    mergeMap(action => {
        const updateKey = Object.keys(action.info)[1]
        const value = action.info[updateKey]
        return ajax<User>({
            url:`/api/user/${action.info.id}`,
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'rxjs-custom-header': 'Rxjs'
            },
            body: {
                [updateKey]: value
            }
        }).pipe(
            filter(res => res.status===200 && res.response!==null)
            ,mergeMap(res => 
                ajax.getJSON<User>(`/api/user/${action.info.id}`).pipe(
                    map(res => editUserInfoSuccess(res))
                )
            ))  
        }  
    )
)

export const userEpic = combineEpics(getUserByEmailEpic)