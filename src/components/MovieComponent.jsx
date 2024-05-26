import react from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieComponent({ data, requestT }) {
  const navigation = useNavigate();

  return (
    <div
      className="movieComponentContainer"
      onClick={() =>
        navigation('/MovieScreen', { state: { data: data, req: requestT } })
      }
    >
      <img
        src={data.imageSet.verticalPoster.w240}
        alt={'Imagen de la pelicula ' + data.title}
      />
    </div>
  );
}
