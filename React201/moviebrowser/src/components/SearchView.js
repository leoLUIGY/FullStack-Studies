import Hero from './Hero';
import {  Link } from 'react-router-dom';

const MovieCard = ({movie}) =>{
    const posterUrl = `https://image.tndb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`;

    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={detailUrl} className="btn btn-primary">Show details</Link>
            </div>
        </div>
        </div>
    )
}

const SearchView = ({keyword, searchResults}) =>{
    const title = `Ỳou are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) =>{
        return <MovieCard movie={obj} key={i} />
    })
    return(
        <>
            <Hero text={title} />
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </>
    )
}

export default SearchView;