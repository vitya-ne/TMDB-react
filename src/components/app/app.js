import React, { useState, useEffect } from 'react';

import './app.css';

import { Header } from '../header';
import { MovieList } from '../movie-list';
import Request from '../../helpers/getData';

const name = "TMDb first 100";

function App() {
    const [ state, setState ] = useState( {
        isLoading: false,
        hasError: false,
        keyAPI: ''
    } );

    const [ movies, setMovies ] = useState( [] );

    const onKeyEntered = key => {
        setState( state => ( {
            ...state,
            keyAPI: key
        } ) );
    }

    useEffect(
        () => {
            if ( !state.keyAPI ) {
                return;
            }

            const fetchMovieData = async () => {
                setState( state => ( {
                    ...state,
                    hasError: false,
                    isLoading: true
                } ) );

                try {
                    const movies_data = await Request.getAllData( state.keyAPI );
                    setMovies( movies_data );
                } catch ( error ) {
                    console.error( error );
                    
                    setState( state => ( {
                        ...state,
                        hasError: true,
                    } ) );
                }
        
                setState( state => ( {
                    ...state,
                    isLoading: false,
                } ) );
            }

            fetchMovieData();
        }, [ state.keyAPI ]
    );

    return (
        <div className="page">
            <Header
                name = { name }
                onKeyEntered = { onKeyEntered }
                hasKeyError = { state.hasError }
            />
            <MovieList
                movies = { movies }
            />
        </div>
    );
}

export default App;
