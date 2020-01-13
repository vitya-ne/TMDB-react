import React from 'react';
import './movie-data.css';

const POSTER_URL = "https://image.tmdb.org/t/p/w200";

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
                <p>
                    Release: <span className="data">
                        { movie.release_date }
                    </span>
                </p>
                <p>
                    Id: <span className="data">
                        { movie.id }
                    </span>
                </p>
                <p>
                    Popularity: <span className="data">
                        { movie.popularity }
                    </span>
                </p>
                <p>
                    Vote count: <span className="data">
                        { movie.vote_count }
                    </span>
                </p>
                <p>
                    Vote average: <span className="data">
                        { movie.vote_average }
                    </span>
                </p>
                <p>
                    Other:<span className="data">
                        { movie.adult === true?
                            "adult" : "not adult only"
                        }
                    </span>
                </p>
                
            </div>
            <div className="col-overview">
                { movie.overview }
            </div>
        </div>
    );
}

export default MovieData;
