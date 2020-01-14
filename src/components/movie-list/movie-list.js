import React from 'react';
import './movie-list.css';

import { MovieData } from '../movie-data'

const MovieList = ( { isLoading, movies } ) => {
    const listClasses = `movie-list${ isLoading? ' is--loading' : ''}`;
    
    const ShowLoading = () =>
        isLoading?
            <div> Loading, Please wait..</div> :
            null;
            
    const Items = movies.map( ( item, index ) =>
        <MovieData
            key={ item.id }
            index={ index }
            movie={ item }
        ></MovieData>
    );

    return (
        <div
            className={ listClasses }
        >
            { ShowLoading() }
            { Items }
        </div>
    );
}

export default MovieList;