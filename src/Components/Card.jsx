import React, { useContext } from 'react';
import { ThemeContext } from "./utils/global.context"
import { Link } from 'react-router-dom';

const Card = () => {
  const { state } = useContext(ThemeContext);
  const { data } = state;

  const addToFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const selectedItem = data.find((item) => item.id === id);

    const isAlreadyInFavorites = favorites.some((favItem) => {
      const parsedItem = JSON.parse(favItem);
      return parsedItem.id === id;
    });

    if (!isAlreadyInFavorites) {
      favorites.push(JSON.stringify(selectedItem));
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("agregada/o a favoritos");
    } else {
      alert("ya esta en favoritos")
    }
  };

  return (
    <div className='cardContainer'>
      {data.map((item) => (
        <div key={item.id} className='card' >
            <img src="public/images/doctor.jpg" alt="Photo" />
            <h2>{item.name}</h2>
            <h2>{item.username}</h2>
          <Link to={`/detail/${item.id}`} key={item.id}>
            <button>id: {item.id}</button>
          </Link>
          <button onClick={() => addToFavorites(item.id)}>Add Fav</button>
        </div>
      ))}
    </div>
  );
}

export default Card