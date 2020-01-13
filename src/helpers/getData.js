
import API from '../services/API';
                                      
const fetchPage = function( page, keyAPI ) {
    return API.getMoviesPageData( page, keyAPI )
        .then( response =>
            response.results
        );
}

const getPageNums = pageCount => [
    ...Array( pageCount ).keys()
].map( item => item + 2 );

export default {
    getFirstPageData( keyAPI = '' ) {
        return fetchPage( 1, keyAPI );
    },
    
    getPagesData( pageCount = 5, keyAPI = '' ) {
        if ( pageCount < 1 ) {
            return Promise.resolve( [] );
        }

        return this.getFirstPageData( keyAPI )
            .then( firstPage => {
                const pageNums = getPageNums( pageCount - 1 );

                return Promise.all( pageNums.map(
                    item => fetchPage( item, keyAPI )
                ) )
                    .then( otherPages => [
                        firstPage,
                        otherPages.flat()
                    ] )
            } )
            .then( allPages =>
                allPages.flat()
            );
    }
}