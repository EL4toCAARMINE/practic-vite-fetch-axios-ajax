import React from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MovieScreen() {
  const location = useLocation();
  const navigation = useNavigate();

  const dataMovie = location.state.data;

  return (
    <div className="container-fluid containerMovie">
      <Icon
        className="iconBack"
        icon="material-symbols:arrow-circle-left-rounded"
        onClick={() => navigation('/ListMovies', {state: location.state.req})}
      />

      <h2 className="h2">{dataMovie.title}</h2>

      <div className="containerData">
        <img
          src={dataMovie.imageSet.horizontalPoster.w360}
          alt={'Poster horizontal de la pelicula ' + dataMovie.title}
        />

        <div className="containerTexts">
          <div className="texts">
            <Icon
              className="iconText"
              icon="streamline:interface-calendar-blank-calendar-date-day-month"
            />
            <p className="h5">Año de lanzamiento: {dataMovie.releaseYear}</p>
          </div>
          <div className="texts">
            <Icon className="iconText" icon="ph:user" />
            <p className="h5">Director: {dataMovie.directors[0]}</p>
          </div>
          <div className="texts">
            <Icon className="iconText" icon="mdi:netflix" />
            <p className="h5">
              Streaming: {dataMovie.streamingOptions.us[0].service.name}
            </p>
          </div>
          <div className="texts">
            <Icon className="iconText" icon="material-symbols:movie" />
            <p className="h5">Genero: {dataMovie.genres[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
