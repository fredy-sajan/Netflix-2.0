import React from 'react';

// Component import
import NavBar from '../../components/nav-bar';
import Banner from '../../components/home-screen/banner/index';
import Row from '../../components/home-screen/row';
import requests from '../../setup-app/the-movie-db/requests';

const img_base_url = "https://image.tmdb.org/t/p/original";


function HomeScreen() {

  return (
    <div className='homeScreen'>

        <NavBar />
        
        <Banner />

        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          img_base_url={img_base_url}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTopRated} img_base_url={img_base_url}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} img_base_url={img_base_url}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} img_base_url={img_base_url}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} img_base_url={img_base_url}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} img_base_url={img_base_url}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} img_base_url={img_base_url}/>
        
    </div>
  )
}

export default HomeScreen