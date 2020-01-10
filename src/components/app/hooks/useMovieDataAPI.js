import { useState, useEffect } from 'react';

import Request from '../../../helpers/getData';

const useMovieDataAPI = () => {
    const [ keyAPI, setKeyAPI ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( {} );
    const [ movies, setMovies ] = useState( [] );

    useEffect( 
        () => {
            if ( !keyAPI ) {
                return;
            }

            const fetchMovieData = async () => {
                setIsLoading( false );

                try {
                    const result_data = await Request.getAllData( keyAPI );
                    setError( {} );
                    setMovies( result_data );
                } catch ( error ) {
                    console.error( error );
                    setError( error );
                }
        
                setIsLoading( false );
            }

            fetchMovieData();
        }, [ keyAPI ]
    );

    return [ movies, { isLoading, error }, setKeyAPI ];
}

export default useMovieDataAPI;