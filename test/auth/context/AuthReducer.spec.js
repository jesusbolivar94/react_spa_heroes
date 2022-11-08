import {AuthReducer} from '../../../src/auth/context/index.js'
import {types} from '../../../src/auth/types/index.js'

describe('Pruebas en el AuthReducer', () => {

    const initialState = {
        logged: false,
    }

    it('Debe de retornar el estado por defecto', () => {

        const newState = AuthReducer( initialState, {} )

        expect( newState ).toBe( initialState )

    })

    it('Debe de (login) llamar el login autenticar y establecer el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Jesus Bolivar',
            }
        }

        const newState = AuthReducer( initialState, action )

        expect( newState ).toEqual({
            logged: true,
            user: action.payload
        })

    })

    it('Debe de (logout) borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Jesus Bolivar' }
        }

        const action = {
            type: types.logout
        }

        const newState = AuthReducer( state, action )

        expect( newState ).toEqual({ logged: false })

    })

})