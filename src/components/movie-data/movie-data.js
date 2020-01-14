import React from 'react';
import './movie-data.css';

const POSTER_URL = "https://image.tmdb.org/t/p/w200";

const MovieProperty = ( { label, value } ) => (
    <p>
        { label }: <span className="movie-prop">
            { value }
        </span>
    </p>
);

const MovieData = ( { index, movie } ) => {
    return (
        <div className="row">
            <div className="col-index">
                {index + 1}
            </div>
            <div className="col-poster">
                <img
                    src={POSTER_URL + movie.poster_path }
                    alt=""
                >
                </img>
            </div>
            
            <div className="col-title">
                { movie.title }
                { movie.original_title !== movie.title &&
                    <p>
                        { movie.original_title }
                    </p>
                }
            </div>
            
            <div className="col-info">
                <MovieProperty
                    label="Release"
                    value={ movie.release_date }
                />
                <MovieProperty
                    label="Id"
                    value={ movie.id }
                />
                <MovieProperty
                    label="Popularity"
                    value={ movie.popularity }
                />
                <MovieProperty
                    label="Vote count"
                    value={ movie.vote_count }
                />
                <MovieProperty
                    label="Vote average"
                    value={ movie.vote_average }
                />
                <MovieProperty
                    label="Other"
                    value={
                        movie.adult === true?
                            "adult" : "not adult only"
                    }
                />
                
            </div>
            <div className="col-overview">
                { movie.overview }
            </div>
        </div>
    );
}

export default MovieData;
