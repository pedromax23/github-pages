import { useCuentaContext } from "../CuentaProvider"

function Egreso() {

  const cuenta = useCuentaContext();
  
  const egresos = cuenta.filter((registro) => registro.monto < 0)

  const total = egresos.reduce((acc, valor) => acc + valor.monto, 0)

  return (
    <>
    <div className="mont-info">

      <h3>Egresos</h3>
      <p>{total}</p>
    </div>
    </>
  )
}

export default Egreso