import React from 'react';
import './movie-data.css';

const POSTER_URL = "https://image.tmdb.org/t/p/w200";

const MovieData = ( { index, movie } ) => {
    return (
        <div className="row">
            <div className="col-index">
                {index + 1}
            </div>
            <div className="col-id">
                { movie.id }
            </div>
            <div className="col-title">
                { movie.title }
                { movie.original_title !== movie.title &&
                    <p>
                        { movie.original_title }
                    </p>
                }
            </div>
            <div className="col-poster">
                <img
                    src={POSTER_URL + movie.poster_path }
                    alt=""
                >
                </img>
            </div>
            <div className="col-date">
                { movie.release_date }
            </div>
            <div
                className="col-adult"
            >
                { movie.adult === true?
                    "adult" : "not adult only"
                }
            </div>
            <div className="col-overview">
                { movie.overview }
            </div>
        </div>
    );
}

export default MovieData;
