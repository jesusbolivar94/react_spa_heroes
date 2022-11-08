import {types} from '../../../src/auth/types/index.js'

describe('Pruebas en types.js', () => {

    it('Debe de regresar estos types', () => {

        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })

    })

})