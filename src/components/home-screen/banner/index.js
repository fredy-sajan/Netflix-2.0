// Hooks
import React, { useEffect, useState } from 'react';

// API, Link and axios req. setup
import axios from '../../../setup-app/the-movie-db/axios/index';
import requests from '../../../setup-app/the-movie-db/requests';


// CSS import
import './stylesheet/style.css'

import errorImage from '../../../assets/images/404-error/404-pages.jpg'



function Banner() {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    async function fetchMovies() {

      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1 )
        ]
      );
      return request;

    }

    fetchMovies();
  }, []);

  const img_base_url = "https://image.tmdb.org/t/p/original/"


  // Truncate description
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className='banner' style={{
      backgroundSize: "cover",
      backgroundImage: movies ? `url("${img_base_url}${movies?.backdrop_path}")` : `url(${errorImage})`,
      backgroundPosition: "center center",
    }}>

      <div className="banner_contents">

        <h1 className="banner_title">
          {movies ? movies?.title || movies?.name || movies?.original_name : "Error 404  Data Not Found"}
        </h1>

        <div className="banner_buttons">
          <button className='banner_button banner_play_button'>Play</button>
          <button className='banner_button banner_mylist_button'>My List</button>
        </div>

        <h1 className="banner_description">
          {truncate( movies ? movies.overview : "Error 404", 140)}
        </h1>

      </div>

      <div className="banner_fade_bottom" />

    </header>
  )

}

export default Banner