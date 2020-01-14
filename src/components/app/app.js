import React, { Suspense } from 'react';

import './app.css';
import useMovieDataAPI from './hooks/useMovieDataAPI';

import { Header } from '../header';
//import { MovieList } from ;
const MovieList = React.lazy(
    () => import( '../movie-list/movie-list.js')
);



const name = "TMDb first 100";

function App() {
    const [ movies, { isLoading, error }, setKeyAPI ] = useMovieDataAPI();

    return (
        <div className="page">
            <Header
                name = { name }
                onKeyEntered = { setKeyAPI }
                hasKeyError = { error.status === 401 }
            />
            <Suspense fallback={<div>Загрузка...</div>}>
                <MovieList
                    movies = { movies }
                    isLoading = { isLoading }
                    error = { error }
                />
            </Suspense>
            
        </div>
    );
}

export default App;
