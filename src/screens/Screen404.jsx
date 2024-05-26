import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function Screen404() {
  const navigation = useNavigate();

  return (
    <div className="container404">
      <div className="container404circle" onClick={() => navigation('/')}>
        <Icon className="icon404" icon="tabler:error-404" />
        <h2 className="h2">Not Found</h2>
      </div>
      <p>Click en el circulo para volver a la pagina de inicio</p>
    </div>
  );
}
