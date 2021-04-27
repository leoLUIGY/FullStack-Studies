import Hero from "./Hero";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const MovieView = () => {
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/search/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&
        language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
        })
    }, [id])

    return(
        <div>
            <Hero text={movieDetails.original_title} />
        </div>
    );
}

export default MovieView;