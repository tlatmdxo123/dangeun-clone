import {mergeMap, Observable,map} from 'rxjs'
import {ofType,Epic,combineEpics} from 'redux-observable'
import { GET_USER_BY_EMAIL,User} from "./types";
import {ajax} from 'rxjs/ajax'
import { getUserByEmailSuccess } from './actions';

export const getUserByEmailEpic:Epic = (action$) => action$.pipe(
    ofType(GET_USER_BY_EMAIL),
    mergeMap(action => 
        ajax.getJSON<User>(`/api/user/email/${action.payload}`).pipe(
            map((res) => getUserByEmailSuccess(res))
        )    
    )
)

export const userEpic = combineEpics(getUserByEmailEpic)