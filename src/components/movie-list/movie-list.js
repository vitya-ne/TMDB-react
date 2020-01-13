import React from 'react';
import './movie-list.css';

import { MovieData } from '../movie-data'

const MovieList = props => {
    const listClasses = `movie-list${ props.isLoading? ' is--loading' : ''}`;
    
    const ShowLoading = props =>
        props.isLoading?
            ( <div> Loading, Please wait..</div>) :
            null;
            
    const items = props.movies.map( ( item, index ) =>
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
            <ShowLoading
                isLoading={ props.isLoading }
            />
            { items }
        </div>
    );
}

export default MovieList;