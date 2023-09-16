import React, { useContext } from 'react';
import { ThemeContext } from "../Components/utils/global.context"
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { state } = useContext(ThemeContext);
  const { data } = state;
  const { id } = useParams();

  return (
    <>
      <div style={{
        background: state.theme.background,
        color: state.theme.color,
        paddingTop: state.theme.padding
      }}>
        <div className='card' style={{ margin: "auto" }}>
          <img src="\public\images\doctor.jpg"></img>
          <p>{data[id - 1].name}</p>
          <p>{data[id - 1].email}</p>
          <p>{data[id - 1].phone}</p>
          <p>{data[id - 1].website}</p>
        </div>
      </div>
    </>
  )
}

export default Detail
