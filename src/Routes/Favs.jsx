import React, { useContext, useState } from "react";
import { ThemeContext } from "../Components/utils/global.context"

const Favs = () => {
  const { state } = useContext(ThemeContext);
  const localFavorites = JSON.parse(localStorage.getItem("favorites"))
  const [bandera, setBandera] = useState(localFavorites ? false : true)
  const limpiarFavoritos = () => {
    localStorage.clear();
    setBandera(true)

  }
  return (
    <div style={{
      background: state.theme.background,
      color: state.theme.color,
      minHeight: "85vh",
      paddingTop: state.theme.padding
    }}>
      <h1>Favoritos</h1>
      <div className='cardContainer'>
        {bandera ? (
          <h2>No hay favoritos</h2>
        ) : (
          localFavorites.map((favorite, index) => {
            const parsedFavorite = JSON.parse(favorite);
            return (
              <div key={parsedFavorite.id} className='card'>
                <img src="public/images/doctor.jpg" alt="Photo" />
                <h2>{parsedFavorite.name}</h2>
                <p>Email: {parsedFavorite.email}</p>
                <p>Phone: {parsedFavorite.phone}</p>
                <p>id: {parsedFavorite.id}</p>
              </div>
            );
          })
        )
        }
      </div>
      <button onClick={limpiarFavoritos}>Eliminar todo</button>
    </div>
    
  )
}

export default Favs