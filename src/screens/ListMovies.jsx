import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import MovieComponent from '../components/MovieComponent';
import { Icon } from '@iconify/react';

export default function ListMovies() {
  const navigation = useNavigate();
  const location = useLocation();

  const [list, setList] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      switch (location.state.typeR) {
        case 'axios':
          const options1 = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/shows/search/filters',
            params: {
              country: 'us',
              show_type: 'movie',
              series_granularity: 'show',
              order_by: 'original_title',
              output_language: 'es',
              order_direction: 'asc',
              genres_relation: 'and',
            },
            headers: {
              'X-RapidAPI-Key':
                '4a96ac13ebmsh2eb75260f2d001fp1832d9jsn9dd46cf80130',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            },
          };

          try {
            const response = await axios
              .request(options1)
              .then((res) => res.data)
              .then((response) => {
                setList(response.shows);
              });
          } catch (error) {
            console.error(error);
          }
          break;

        case 'fetch':
          const url =
            'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&show_type=movie&series_granularity=show&order_by=original_title&output_language=es&order_direction=asc&genres_relation=and';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key':
                '4a96ac13ebmsh2eb75260f2d001fp1832d9jsn9dd46cf80130',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            },
          };

          try {
            const response = await fetch(url, options)
              .then((res) => res.json())
              .then((response) => {
                setList(response.shows);
              });
            // const result = await response.text();
          } catch (error) {
            alert(error);
          }
          break;

        case 'jquery':
          const settings = {
            async: true,
            crossDomain: true,
            url: 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&show_type=movie&series_granularity=show&order_by=original_title&output_language=es&order_direction=asc&genres_relation=and',
            method: 'GET',
            headers: {
              'X-RapidAPI-Key':
                '4a96ac13ebmsh2eb75260f2d001fp1832d9jsn9dd46cf80130',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            },
          };

          $.ajax(settings).done(function (response) {
            setList(response.shows);
          });
          break;

        default:
          navigation('/');
          break;
      }
    };
    GetData();
  }, []);

  return (
    <div className="container-fluid listScreenContainer">
      <Icon
        className="iconBack"
        icon="material-symbols:arrow-circle-left-rounded"
        onClick={() => navigation('/')}
      />
      <h2 className="h2">Lista de peliculas</h2>
      {list.length === 0 ? (
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="listContainer">
          {list.map((movie, index) => {
            return (
              <MovieComponent
                key={index}
                data={movie}
                requestT={location.state}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
