import {fireEvent, render, screen} from '@testing-library/react'
import {MemoryRouter, useNavigate} from 'react-router-dom'

import {Navbar} from '../../../src/ui/index.js'
import {AuthContext} from '../../../src/auth/context'

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en el <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Jesus Bolivar'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    it('Debe de mostrar el nombre del usuario logeado', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Jesus Bolivar') ).toBeTruthy()

    })

    it('Debe de llamar el logout y navigate cuando se hace clic en el boton', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logOutBtn = screen.getByRole('button')
        fireEvent.click( logOutBtn )

        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", { "replace": true })

    })
    
})