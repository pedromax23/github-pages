import { useCuentaContext, useCuentaToggleContext } from "../CuentaProvider";

function ItemsView() {


    const cuenta = useCuentaContext()
    const setCuenta = useCuentaToggleContext()
    
    const eliminar = (id) => {
        const nuevaCuenta = cuenta.filter((registro) => registro.id !== id)
        setCuenta(nuevaCuenta)
    }

    return (
        <ul className="list-title">
            {
                cuenta.map((registro, id) => (
                    <li className="list-items" key={'registro'+id}>
                        <p className="amount-item">{registro.monto}</p>
                        <p>{registro.descripccion}</p>
                        <button onClick={() => eliminar(registro.id)}>Eliminar</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default ItemsView