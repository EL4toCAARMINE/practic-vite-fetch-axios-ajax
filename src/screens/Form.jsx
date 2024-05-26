import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Form() {
  const navigation = useNavigate();
  const [req, setReq] = useState('');

  const NavToList = () => {
    if (req !== '' && req !== null) {
      let objSend = { typeR: req };
      navigation('/ListMovies', { state: objSend });
    } else {
      alert('Selecciona una opcion');
    }
  };

  return (
    <div className="containerForm">
      <div className="form">
        <div className="containerInput">
          <label className="h3" htmlFor="request">
            Tipo de consulta
          </label>
          <select
            className="form-select"
            type="text"
            id="request"
            value={req}
            onChange={(val) => setReq(val.target.value)}
          >
            <option value="">Selecciona una opcion</option>
            <option value="fetch">Fetch</option>
            <option value="axios">Axios</option>
            <option value="jquery">jQuery</option>
          </select>
        </div>
        <div className="btn btn-dark" onClick={() => NavToList()}>
          Consultar
        </div>
      </div>
    </div>
  );
}
