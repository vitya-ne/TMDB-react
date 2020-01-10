const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US';

const handleResponse = response =>
    response.json()
        .then( json => {
            if ( !response.ok ) {
                const error = Object.assign( {}, json, {
                    status: response.status,
                    statusText: response.statusText,
                } );

                return Promise.reject( error );
            }

            return json;
        } );

export default {
    getMoviesPageData( page, api_key ) {
        if ( !page ) {
            return Promise.reject( {
                statusText: "This page doesn't exist"
            } );
        }

        const url = `${API_URL}&api_key=${api_key}&page=${page}`;

        return fetch( url )
            .then( handleResponse );
    }
}

