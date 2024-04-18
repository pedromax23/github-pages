import React, { useState, useContext, useEffect } from 'react'

const cuentaContext = React.createContext();
const cuentaToggleContext = React.createContext();

export function useCuentaContext() {
    return useContext(cuentaContext);
}
export function useCuentaToggleContext() {
    return useContext(cuentaToggleContext);
}

const valorLocal = localStorage.getItem('cuenta')
const valorInicial = valorLocal ? JSON.parse(valorLocal) : []

export function CuentaProvider({children}) {

    const [cuenta, setCuenta] = useState(valorInicial)

    useEffect(() => {
        localStorage.setItem('cuenta', JSON.stringify(cuenta))
    }, [cuenta])

    return (
        <cuentaContext.Provider value={cuenta}>
            <cuentaToggleContext.Provider value={setCuenta}>
                {children}
            </cuentaToggleContext.Provider>
        </cuentaContext.Provider>
    )
}