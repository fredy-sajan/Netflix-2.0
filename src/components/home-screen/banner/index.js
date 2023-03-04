// Hooks
import React, { useEffect, useState } from 'react';

// API, Link and axios req. setup
import axios from '../../../setup-app/the-movie-db/axios/index';
import requests from '../../../setup-app/the-movie-db/requests';


// CSS import
import './stylesheet/style.css'



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

  console.log(`movies ${movies?.name}`)


  // Truncate description
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className='banner' style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}>

      <div className="banner_contents">

        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className='banner_button banner_play_button'>Play</button>
          <button className='banner_button banner_mylist_button'>My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movies?.overview, 140)}
        </h1>

      </div>

      <div className="banner_fade_bottom" />

    </header>
  )

}

export default Banner