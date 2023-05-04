import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {

  

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchMovies = useCallback( async () =>{
    setIsLoading(true);
    // fetch('https://react-http-d3d8c-default-rtdb.firebaseio.com/results.json').then(
    //   function(res){
    //     if (!res.ok) { 
    //       throw new Error("Something went wrong!");
    //     }
    //     return res;
    //   }).then(
    //     res => res.json()
    //   ).then((data)=>{
        /*
        const transformedData = data.results.map((movieData) => {
          return{
            id : movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          }
        })
        */

      //   let loadedMovies = []

        // for(const key in data){
        //   loadedMovies.push({
        //     id : key,
        //     title : data[key].title,
        //     openingText : data[key].openingText,
        //     releaseDate : data[key].releaseDate,
        //   });
        // }

      //   setMovies(loadedMovies);
      // }).catch(error =>  setError(error.message) );
      
      // setIsLoading(false);
      try{
          const response =  await fetch(`https://react-http-d3d8c-default-rtdb.firebaseio.com/results.json`);
          console.log(response, "data");
        
          if(!response.ok){
            throw new Error('Something went wrong!');
          }

          
          let data = await response.json();
              /*
                const transformedData = data.results.map((movieData) => {
                  return{
                    id : movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                  }
                })
              */

            let loadedMovies = [];

            for(const key in data){
              loadedMovies.push({
                id : key,
                title : data[key].title,
                openingText : data[key].openingText,
                releaseDate : data[key].releaseDate,
              });
            }

            setMovies(loadedMovies);
          } catch(error) {
            setError(error.message);
          }
          setIsLoading(false);
  }, [])


      useEffect(()=>{
        fetchMovies();
      }, [fetchMovies]);

      async function addMovieHandler(movie) {
        const response = await fetch('https://react-http-d3d8c-default-rtdb.firebaseio.com/results.json', {
          method : "POST",
          body : JSON.stringify(movie),
          headers : {
            'Content-Type' : 'application/json'
          }
        });
        const data = response.json();
        console.log(data);
      } 

      let content;

      if(isLoading){
        content = <p>Loading...</p>;
      } else if(error ) {
        content = <p>{error}</p>
      } else if(movies.length > 0) {
        content = <MoviesList movies={movies}/>
      } else {
        content = <p>No movies Found</p>;
      }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick = {fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
