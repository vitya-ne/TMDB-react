import React, { Suspense } from 'react';

import './app.css';
import useMovieDataAPI from './hooks/useMovieDataAPI';

import { Header } from '../header';

// dynamic ( lazy ) import
const MovieList = React.lazy(
    () => import( '../movie-list/movie-list.js')
);


const name = "TMDb first 100";

function App() {
    const [ movies, { isLoading, error }, setKeyAPI ] = useMovieDataAPI();

    const isUnauthorized = errorStatus =>
        errorStatus === 401;
        
    return (
        <div className="page">
            <Header
                name = { name }
                onKeyEntered = { setKeyAPI }
                hasKeyError = { isUnauthorized( error.status ) }
            />
            <Suspense fallback = {<div/>}>
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
