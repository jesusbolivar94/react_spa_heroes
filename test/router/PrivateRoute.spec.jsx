import {PrivateRoute} from '../../src/router/PrivateRoute.jsx'
import {AuthContext} from '../../src/auth/context'
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

describe('Pruebas en el <PrivateRoute />', () => {

    it('Debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Jesus Bolivar'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Privada') ).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/")

    })

})