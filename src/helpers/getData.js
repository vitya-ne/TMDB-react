
import API from '../services/API';
                                      
const fetchPage = function( page, keyAPI ) {
    return API.getMoviesPageData( page, keyAPI )
        .then( response =>
            response.results
        );
}

export default {
    getAllData( keyAPI ) {
        return fetchPage( 1, keyAPI )
            .then( first_page =>
                Promise.all( [2, 3, 4, 5].map(
                    item => fetchPage( item, keyAPI )
                ) )
                    .then( other_pages =>
                        [
                            first_page,
                            other_pages.flat()
                        ]
                    )
            )
            .then( all_pages =>
                all_pages.flat()
            );
    }
}