// Hooks
import React, { useEffect, useState } from 'react';

// Import TMDB axios
import axios from '../../../setup-app/the-movie-db/axios/index';

// CSS import
import './stylesheet/style.css'

function Row({ title, fetchUrl, isLargeRow = false, img_base_url }) {

    const [movies, setMovies] = useState([])


    useEffect(() => {

        async function fetchMovies() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }

        fetchMovies();
    }, [fetchUrl])


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row_posters">
                {
                    movies && movies.map((movie) => {
                        return (
                            <div style={{margin: "0", padding: "0"}}>
                                <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                    src={`${img_base_url}${isLargeRow ? movie?.poster_path :
                                        movie?.backdrop_path}`} alt="movie-name" key={movie.id}
                                />
                                {!isLargeRow ? <h3 className='movie_title_name'>{movie ? movie?.title || movie?.name || movie?.original_name : 'Error 404 Data Not Found' }</h3> : null}
                            </div>

                        )
                    })
                }
            </div>



        </div>
    )
}

export default Row