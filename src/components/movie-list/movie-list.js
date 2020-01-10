import React from 'react';
import './movie-list.css';

import { MovieData } from '../movie-data'

const MovieList = props => {
    const items = props.movies.map( ( item, index ) =>
        <MovieData
            key={ item.id }
            index={ index }
            movie={ item }
        ></MovieData>
    );

    return (
        <div className="movie-list">
            { items }
        </div>
    );
}

export default MovieList;