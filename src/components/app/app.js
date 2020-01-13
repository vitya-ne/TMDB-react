import React from 'react';

import './app.css';

import { Header } from '../header';
import { MovieList } from '../movie-list';

import useMovieDataAPI from './hooks/useMovieDataAPI';

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
            <MovieList
                movies = { movies }
                isLoading = { isLoading }
                error = { error }
            />
        </div>
    );
}

export default App;
