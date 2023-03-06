import { createContext, useState } from 'react'

export const signinButtonStateContext = createContext(null)

export default function SignInStateManager({ children }) {

    const [signinState, setSigninState] = useState(false)

    return (
        <signinButtonStateContext.Provider value={{ signinState, setSigninState }}>
            {children}
        </signinButtonStateContext.Provider>
    )
}