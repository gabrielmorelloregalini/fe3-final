import React, { useContext, useState } from "react";
import { ThemeContext } from "./utils/global.context"

const Form = () => {
  const { state } = useContext(ThemeContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("")

  function handleNombre(e) {
    setNombre(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function sendForm(e) {
    e.preventDefault()
    if (nombre.length <= 5) {
      setMensaje('formato erroneo de nombre. Por favor verifique su información nuevamente');
      return;
    }
    const RegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!email.match(RegEx)) {
      setMensaje('formato erroneo de email. Por favor verifique su información nuevamente');
      return;
    }
    setMensaje(`Gracias ${nombre}, te contactaremos lo antes posible vía correo electrónico.`);
  };
  return (
    <div style={{
      background: state.theme.background,
      color: state.theme.color,
      padding: state.theme.padding
    }} className="FormCss">
      <h2>Contactactanos</h2>
      <p>Ingrese sus datos y le llegara un mail de confirmación</p>
      <form onSubmit={sendForm}>
        <div>
          <label>Nombre</label>
          <input
            style={{
              background: state.theme.background,
              color: state.theme.color}}
            type="text" placeholder="Ingrese su nombre completo"
            value={nombre}
            onChange={handleNombre} />
        </div>
        <div>
          <label>Email</label>
          <input
            style={{
              background: state.theme.background,
              color: state.theme.color}}
            type="text"
            placeholder="Ingrese su Email"
            value={email}
            onChange={handleEmail} />
        </div>
        <button>Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}
export default Form
