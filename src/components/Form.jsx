import { useState } from "react";
import { useCuentaContext, useCuentaToggleContext } from "../CuentaProvider";

function Form() {
  const [monto, setMonto] = useState(0);
  const [description, setDescription] = useState('');
  const cuenta = useCuentaContext();
  const toggleCuenta = useCuentaToggleContext();

  const registrarMonto = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    const montoNumerico = parseFloat(monto); // Convierte la cadena de monto a número
    toggleCuenta([...cuenta, { monto: montoNumerico, id: window.crypto.randomUUID(), descripccion: description }]);
  };

  return (
    <form onSubmit={registrarMonto}>
      <label htmlFor="">Ingreso</label>
      <input className="input-amount" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <label htmlFor="">Descripccion</label>
      <input className="input-description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className="button-form" type="submit">Ingresar</button>
    </form>
  );
}

export default Form;
