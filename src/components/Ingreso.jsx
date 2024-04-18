import { useCuentaContext } from "../CuentaProvider"

function Ingreso() {

  const cuenta = useCuentaContext();
  
  const ingresos = cuenta.filter((registro) => registro.monto > 0)

  const total = ingresos.reduce((acc, valor) => acc + valor.monto, 0)

  return (
    <>
    <div className="mont-info">
      <h3>Ingresos</h3>
      <p>{total}</p>
    </div>
    </>
  )
}

export default Ingreso