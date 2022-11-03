import {types} from '../types'

const initialState = {
    logged: false,
}

export const AuthReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }

        default:
            return state
    }

}