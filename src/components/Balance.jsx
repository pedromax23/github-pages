import { useCuentaContext } from "../CuentaProvider"

function Balance() {

  const cuenta = useCuentaContext();
  
  const ingresos = cuenta.filter((registro) => registro.monto > 0)
  const egresos = cuenta.filter((registro) => registro.monto < 0)

  const totalIngresos = ingresos.reduce((acc, valor) => acc + valor.monto, 0)
  const totalEgresos = egresos.reduce((acc, valor) => acc + valor.monto, 0)

  const total = (totalIngresos + totalEgresos)

  return (
    <>
    <div className="div-balance">
      <h3>Balance</h3>
      <h1>${total}</h1>
    </div>
    </>
  )
}

export default Balance